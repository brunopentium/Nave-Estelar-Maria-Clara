// Motor 3D: renderer PBR, pós-processamento, céu procedural, iluminação, partículas
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
export const lerp = (a, b, t) => a + (b - a) * t;
export const rnd = (a, b) => b === undefined ? Math.random() * a : a + Math.random() * (b - a);
export const pick = a => a[Math.random() * a.length | 0];
export const E_OUT = t => 1 - Math.pow(1 - t, 3);
export const E_IO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const E_BACK = t => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
export const seeded = s => () => (s = (s * 16807) % 2147483647) / 2147483647;

// ruído 2D (value noise) para terrenos
const PERM = new Uint8Array(512); { const r = seeded(1337); const p = [...Array(256).keys()]; for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } for (let i = 0; i < 512; i++) PERM[i] = p[i & 255]; }
const hv = (x, y) => PERM[(PERM[x & 255] + y) & 511] / 255;
export function noise2(x, y) { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi; const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf); const a = hv(xi, yi), b = hv(xi + 1, yi), c = hv(xi, yi + 1), d = hv(xi + 1, yi + 1); return lerp(lerp(a, b, u), lerp(c, d, u), v); }
export function fbm2(x, y, o = 4) { let s = 0, a = .5, f = 1; for (let i = 0; i < o; i++) { s += a * noise2(x * f, y * f); f *= 2.03; a *= .5; } return s; }
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

export const G = { W: 1, H: 1, PH: 1, t: 0, dt: 0, quality: 2, pickables: [], updaters: [] };

/* ---------- céu procedural ---------- */
const skyVS = `varying vec3 vDir; void main(){ vec4 wp = modelMatrix*vec4(position,1.); vDir = wp.xyz - cameraPosition; gl_Position = projectionMatrix*viewMatrix*wp; gl_Position.z = gl_Position.w; }`;
const skyFS = `
uniform vec3 cTop, cMid, cBot, sunDir, sunCol, neb1, neb2; uniform float sunSize, stars, nebula, time, haze, glowAmt;
varying vec3 vDir;
float hash(vec3 p){ p=fract(p*0.3183099+.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float noise(vec3 x){ vec3 i=floor(x), f=fract(x); f=f*f*(3.-2.*f);
 return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
            mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z); }
float fbm(vec3 p){ float a=.5,s=0.; for(int i=0;i<5;i++){ s+=a*noise(p); p*=2.03; a*=.5;} return s; }
void main(){
 vec3 d = normalize(vDir); float h = d.y;
 vec3 col = h > 0. ? mix(cMid, cTop, pow(clamp(h,0.,1.), .55)) : mix(cMid, cBot, clamp(-h*5.,0.,1.));
 col = mix(col, cMid*1.15, haze*exp(-abs(h)*9.));
 if(nebula>0.){ float n = fbm(d*2.6+vec3(time*.004)); float n2 = fbm(d*5.5+vec3(3.1,1.7,.2)-vec3(time*.006));
   col += nebula*(neb1*pow(smoothstep(.42,.95,n),1.6)*1.4 + neb2*pow(smoothstep(.48,.98,n2),1.5)*1.2); }
 if(stars>0.){ vec3 p = d*220.; vec3 c = floor(p); float r = hash(c);
   if(r>.982){ vec3 f = fract(p)-.5; float s = smoothstep(.16,0.,length(f)); float tw = .55+.45*sin(time*(1.5+r*3.)+r*90.);
     vec3 sc = mix(vec3(.75,.85,1.), vec3(1.,.9,.75), fract(r*37.)); col += sc*s*tw*stars*(1.2+(r-.982)*60.); }
   vec3 p2 = d*70.; vec3 c2 = floor(p2); float r2 = hash(c2+7.);
   if(r2>.993){ vec3 f2 = fract(p2)-.5; float s2 = smoothstep(.2,0.,length(f2)); col += vec3(s2*stars*2.5*(.7+.3*sin(time*2.+r2*50.))); } }
 float sd = max(dot(d, normalize(sunDir)), 0.);
 col += sunCol*(pow(sd, 2400./sunSize)*9. + pow(sd, 90.)*.35*glowAmt + pow(sd, 8.)*.08*glowAmt);
 gl_FragColor = vec4(col, 1.);
}`;
export function makeSky() {
  const u = {
    cTop: { value: new THREE.Color() }, cMid: { value: new THREE.Color() }, cBot: { value: new THREE.Color() },
    sunDir: { value: new THREE.Vector3(0, .3, -1) }, sunCol: { value: new THREE.Color(1, .9, .7) }, sunSize: { value: 1 },
    neb1: { value: new THREE.Color('#7a3cff') }, neb2: { value: new THREE.Color('#ff3c9a') },
    stars: { value: 0 }, nebula: { value: 0 }, time: { value: 0 }, haze: { value: .5 }, glowAmt: { value: 1 }
  };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: skyVS, fragmentShader: skyFS, side: THREE.BackSide, depthWrite: false, fog: false });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(450, 48, 24), mat);
  mesh.renderOrder = -10; mesh.frustumCulled = false;
  return { mesh, u, mat };
}

/* ---------- textura de brilho (glow) ---------- */
let _glow;
export function glowTex() {
  if (_glow) return _glow;
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.25, 'rgba(255,255,255,.55)'); gr.addColorStop(.6, 'rgba(255,255,255,.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 128, 128); _glow = new THREE.CanvasTexture(c); _glow.colorSpace = THREE.SRGBColorSpace; return _glow;
}
export function glowSprite(color, size, opacity = 1) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false }));
  s.scale.setScalar(size); return s;
}
export function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return t;
}

/* ---------- partículas luminosas (GPU points) ---------- */
export class Sparks {
  constructor(n = 1600) {
    this.n = n; this.i = 0;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(n * 3); this.col = new Float32Array(n * 3); this.size = new Float32Array(n); this.alpha = new Float32Array(n);
    this.vel = new Float32Array(n * 3); this.life = new Float32Array(n); this.max = new Float32Array(n); this.grav = new Float32Array(n); this.drag = new Float32Array(n); this.base = new Float32Array(n); this.grow = new Float32Array(n);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { pr: { value: 1 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
      vertexShader: `attribute float size; attribute float alpha; varying vec3 vC; varying float vA; uniform float pr;
        void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*pr*(420./max(.1,-mv.z)); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `varying vec3 vC; varying float vA; void main(){ vec2 p=gl_PointCoord-.5; float d=length(p); float a=smoothstep(.5,0.,d); a=a*a;
        float cross=max(0.,1.-abs(p.x)*14.)*max(0.,1.-abs(p.y)*2.2)+max(0.,1.-abs(p.y)*14.)*max(0.,1.-abs(p.x)*2.2);
        gl_FragColor=vec4(vC*(a*1.6+cross*.8), (a+cross*.5)*vA); }`
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 5; this.geo = g;
  }
  spawn(o) {
    const i = this.i; this.i = (this.i + 1) % this.n; const c = o.color instanceof THREE.Color ? o.color : _tc.set(o.color || '#ffffff');
    this.pos[i * 3] = o.x; this.pos[i * 3 + 1] = o.y; this.pos[i * 3 + 2] = o.z;
    this.vel[i * 3] = o.vx || 0; this.vel[i * 3 + 1] = o.vy || 0; this.vel[i * 3 + 2] = o.vz || 0;
    this.col[i * 3] = c.r * (o.bright || 1); this.col[i * 3 + 1] = c.g * (o.bright || 1); this.col[i * 3 + 2] = c.b * (o.bright || 1);
    this.life[i] = this.max[i] = o.life || 1; this.base[i] = o.size || .3; this.grav[i] = o.g || 0; this.drag[i] = o.drag || 0; this.grow[i] = o.grow || 0;
  }
  burst(x, y, z, n, color, sp = 3, o = {}) { for (let k = 0; k < n; k++) { const a = rnd(TAU), b = Math.acos(rnd(-1, 1)), s = sp * rnd(.4, 1); this.spawn(Object.assign({ x, y, z, vx: Math.sin(b) * Math.cos(a) * s, vy: Math.cos(b) * s, vz: Math.sin(b) * Math.sin(a) * s, color: Array.isArray(color) ? pick(color) : color, life: rnd(.5, 1.1), size: rnd(.15, .35), drag: 2.2 }, o)); } }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.size[i] = 0; continue; }
      this.life[i] -= dt; const d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const k = Math.max(0, this.life[i] / this.max[i]);
      this.alpha[i] = Math.min(1, k * 3); this.size[i] = this.base[i] * (1 + (1 - k) * this.grow[i]);
    }
    for (const a of ['position', 'color', 'size', 'alpha']) this.geo.attributes[a].needsUpdate = true;
  }
  clear() { this.life.fill(0); }
}
const _tc = new THREE.Color();

/* ---------- linhas de velocidade / hiperespaço ---------- */
export class Streaks {
  constructor(n = 260) {
    this.n = n; const g = new THREE.BufferGeometry(); this.p = new Float32Array(n * 6); this.c = new Float32Array(n * 6);
    g.setAttribute('position', new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('color', new THREE.BufferAttribute(this.c, 3).setUsage(THREE.DynamicDrawUsage));
    this.lines = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.lines.frustumCulled = false; this.geo = g; this.s = Array.from({ length: n }, () => ({ a: rnd(TAU), r: rnd(.6, 9), z: rnd(-120, 0), h: rnd(1) }));
    this.lines.visible = false; this.amt = 0;
  }
  update(dt, cam, speed, hueShift) {
    this.lines.visible = this.amt > .01; if (!this.lines.visible) return;
    const col = new THREE.Color();
    this.s.forEach((s, i) => {
      s.z += speed * dt; if (s.z > 2) { s.z = -120; s.a = rnd(TAU); s.r = rnd(.6, 9); }
      const x = Math.cos(s.a) * s.r, y = Math.sin(s.a) * s.r, len = 2 + speed * .08;
      const o = i * 6; this.p[o] = x; this.p[o + 1] = y; this.p[o + 2] = s.z; this.p[o + 3] = x; this.p[o + 4] = y; this.p[o + 5] = s.z - len;
      col.setHSL((s.h + hueShift) % 1, .9, .7).multiplyScalar(this.amt * 1.6);
      this.c[o] = col.r; this.c[o + 1] = col.g; this.c[o + 2] = col.b; this.c[o + 3] = col.r * .1; this.c[o + 4] = col.g * .1; this.c[o + 5] = col.b * .1;
    });
    this.lines.position.copy(cam.position); this.lines.quaternion.copy(cam.quaternion);
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.color.needsUpdate = true;
  }
}

/* ---------- motor ---------- */
export function initEngine(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 1200);
  const sky = makeSky(); scene.add(sky.mesh);
  const hemi = new THREE.HemisphereLight('#bcd8ff', '#40305a', .9); scene.add(hemi);
  const sun = new THREE.DirectionalLight('#ffffff', 2.4); sun.position.set(6, 10, 6); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048); const sc = sun.shadow.camera; sc.left = -9; sc.right = 9; sc.top = 9; sc.bottom = -6; sc.near = 1; sc.far = 40;
  sun.shadow.bias = -.0004; sun.shadow.normalBias = .03; sun.shadow.radius = 4; scene.add(sun); scene.add(sun.target);
  const fill = new THREE.DirectionalLight('#ffd9f0', .5); fill.position.set(-8, 4, 8); scene.add(fill);
  scene.fog = new THREE.Fog('#000000', 30, 160);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .45, .35, .92); composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene(); const envSky = new THREE.Mesh(sky.mesh.geometry, sky.mat); envScene.add(envSky);
  const sparks = new Sparks(1800); scene.add(sparks.points);
  const streaks = new Streaks(); scene.add(streaks.lines);
  Object.assign(G, { renderer, scene, camera, sky, hemi, sun, fill, composer, bloom, pmrem, envScene, sparks, streaks });
  return G;
}
let _envRT = null;
export function refreshEnv() {
  const old = _envRT; _envRT = G.pmrem.fromScene(G.envScene, 0, .1, 1000); G.scene.environment = _envRT.texture; if (old) old.dispose();
}
export function resize(W, H, PH, pixelRatio, hfovDeg = 52) {
  G.W = W; G.H = H; G.PH = PH;
  G.renderer.setPixelRatio(pixelRatio); G.renderer.setSize(W, H, false);
  G.composer.setPixelRatio(pixelRatio); G.composer.setSize(W, H);
  G.bloom.resolution.set(W * pixelRatio * .5, H * pixelRatio * .5);
  G.sparks.mat.uniforms.pr.value = pixelRatio * H / 900;
  const cam = G.camera; const aspect = W / PH;
  const hfov = hfovDeg * Math.PI / 180; let vfov = 2 * Math.atan(Math.tan(hfov / 2) / aspect) * 180 / Math.PI; vfov = clamp(vfov, 34, 78);
  cam.fov = vfov; cam.aspect = aspect; cam.setViewOffset(W, PH, 0, 0, W, H); cam.updateProjectionMatrix();
  G.portrait = aspect < 1;
}
export function disposeTree(o) {
  o.traverse(c => {
    if (c.geometry && !c.geometry.userData.shared) c.geometry.dispose();
    if (c.material) (Array.isArray(c.material) ? c.material : [c.material]).forEach(m => { if (m.userData.shared) return; for (const k in m) { const v = m[k]; if (v && v.isTexture && !v.userData.shared) v.dispose(); } m.dispose(); });
  });
}
