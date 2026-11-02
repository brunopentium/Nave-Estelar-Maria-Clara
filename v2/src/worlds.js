// Os 8 mundos em 3D
import * as THREE from 'three';
import { G, TAU, rnd, pick, lerp, clamp, smooth, fbm2, noise2, seeded, glowSprite, canvasTex } from './engine.js';
import { M, sph, cyl, cone, rbox, RAINBOW, mkCloud, mkFish, mkButterfly, mkFlower, spiralTex, STAR_G } from './models.js';

/* ---------- utilidades ---------- */
const C = new THREE.Color(), C2 = new THREE.Color();
function terrain(h, col, o = {}) {
  const size = o.size || 170, seg = o.seg || 150; const g = new THREE.PlaneGeometry(size, size, seg, seg); g.rotateX(-Math.PI / 2); g.translate(0, 0, -size * .32);
  const p = g.attributes.position, cols = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), y = h(x, z); p.setY(i, y); col(x, z, y, C); cols[i * 3] = C.r; cols[i * 3 + 1] = C.g; cols[i * 3 + 2] = C.b; }
  g.setAttribute('color', new THREE.BufferAttribute(cols, 3)); g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: o.rough ?? .95, metalness: o.metal ?? 0 })); m.receiveShadow = true; return m;
}
const flatK = (x, z) => smooth(5, 17, Math.hypot(x * .75, (z + 1.5) * 1.1));
const hills = (amp, f = .045, off = 0) => (x, z) => flatK(x, z) * (fbm2(x * f + off, z * f + off) - .3) * amp + (fbm2(x * .6, z * .6) - .5) * .06;
const mixc = (a, b, t, out) => out.set(a).lerp(C2.set(b), clamp(t, 0, 1));
function scatter(n, r, fn, avoid = 3.2) { for (let i = 0, tries = 0; i < n && tries < n * 20; tries++) { const x = rnd(-r, r), z = rnd(-r * 1.6, r * .45); if (Math.hypot(x, z - .5) < avoid) continue; if (Math.abs(x) < 5 && z > -3) continue; fn(x, z, i); i++; } }
function windMat(color, opts = {}) {
  const m = new THREE.MeshStandardMaterial(Object.assign({ color, side: THREE.DoubleSide, roughness: .8 }, opts));
  m.onBeforeCompile = sh => { sh.uniforms.time = { value: 0 }; m.userData.u = sh.uniforms.time;
    sh.vertexShader = 'uniform float time;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec4 wp0 = instanceMatrix * vec4(0.,0.,0.,1.);
      #else
        vec4 wp0 = modelMatrix * vec4(0.,0.,0.,1.);
      #endif
      float hk = max(position.y,0.); float sw = sin(time*1.8 + wp0.x*.55 + wp0.z*.35)*.16 + sin(time*3.1 + wp0.x*1.3)*.05;
      transformed.x += sw * hk * hk * ${opts.bend || '1.0'}; transformed.z += sw * .4 * hk * hk;`); };
  G.updaters.push(t => { if (m.userData.u) m.userData.u.value = t; }); return m;
}
function grass(n, area, colors, h = .5) {
  const g = new THREE.PlaneGeometry(.08, h, 1, 4); g.translate(0, h / 2, 0); const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i); p.setX(i, p.getX(i) * (1 - y / h * .9)); }
  g.computeVertexNormals(); const mat = windMat('#ffffff', { roughness: .9 }); const im = new THREE.InstancedMesh(g, mat, n); const d = new THREE.Object3D(); const c = new THREE.Color();
  for (let i = 0; i < n; i++) { let x, z; do { x = rnd(area[0], area[1]); z = rnd(area[2], area[3]); } while (Math.abs(x) < 4.2 && z > -1.5 && z < 3 && Math.random() < .85);
    d.position.set(x, 0, z); d.rotation.y = rnd(TAU); d.scale.set(1, rnd(.6, 1.4), 1); d.updateMatrix(); im.setMatrixAt(i, d.matrix); im.setColorAt(i, c.set(pick(colors)).multiplyScalar(rnd(.75, 1.1))); }
  im.receiveShadow = true; return im;
}
function flowerField(n, area, colors) {
  const head = new THREE.InstancedMesh(new THREE.SphereGeometry(.11, 12, 8), new THREE.MeshPhysicalMaterial({ roughness: .5, sheen: 1, sheenColor: new THREE.Color('#ffffff') }), n);
  const stem = new THREE.InstancedMesh(new THREE.CylinderGeometry(.012, .015, .5, 5).translate(0, .25, 0), M.plush('#3a9c4a'), n); const d = new THREE.Object3D(), c = new THREE.Color();
  for (let i = 0; i < n; i++) { const x = rnd(area[0], area[1]), z = rnd(area[2], area[3]), s = rnd(.7, 1.3); d.position.set(x, 0, z); d.scale.set(1, s, 1); d.rotation.set(0, 0, 0); d.updateMatrix(); stem.setMatrixAt(i, d.matrix); d.position.y = .5 * s; d.scale.set(s, s * .55, s); d.updateMatrix(); head.setMatrixAt(i, d.matrix); head.setColorAt(i, c.set(pick(colors))); }
  head.castShadow = true; const g = new THREE.Group(); g.add(head, stem); return g;
}
function shootingStar() { const sp = G.sparks; const x0 = rnd(-30, 30), y0 = rnd(14, 26), z0 = -60, vx = rnd(18, 30) * (Math.random() < .5 ? -1 : 1), vy = -rnd(6, 10); for (let k = 0; k < 26; k++) setTimeout(() => sp.spawn({ x: x0 + vx * k * .025, y: y0 + vy * k * .025, z: z0, vx: vx * .05, vy: vy * .05, color: '#d9f3ff', size: 1.4 - k * .03, life: .8, bright: 2 }), k * 25); }
function skyBody(mesh, line) { mesh.userData.tap = () => G.onSkyTap && G.onSkyTap(line, mesh); G.pickables.push(mesh); return mesh; }

/* ---------- mundos ---------- */
export const WORLDS = [
{
  id: 'espaco', name: 'ESTAÇÃO ESTRELA', short: 'Estação', icon: '🌌', fname: 'Pipo', fdesc: 'o robô', kind: 'robot', face: '🤖', key: 1, disc: ['#8a7bff', '#2a1f6b'], food: 'battery', foodN: 'baterias',
  hello: 'Bip bop! Oi, Maria Clara! Eu sou o Pipo, o robô! Bem-vinda à Estação Estrela!',
  lines: ['Bip bip! Você é muito esperta!', 'Bop! Cócegas no meu circuito! Hahaha!', 'Vamos apertar os botões coloridos?', 'Eu adoro as estrelas! E você?', 'Bip! Bop! Olha a dança do robô!'],
  skyLine: 'Aquele é um planeta gigante com anéis! Parece Saturno!',
  env: { top: '#02030f', mid: '#140b3c', bot: '#05041a', sun: [.4, .5, -1], sunCol: '#000000', sunSize: 1, stars: 1.3, nebula: 1, haze: .3, glow: 0, fog: ['#0a0828', 50, 260], key: ['#d6dcff', 2.4, [5, 9, 6]], hemi: ['#7a6aff', '#1a1040', .7], exposure: 1.1, bloom: .7 },
  build(w) {
    const g = new THREE.Group();
    const grid = canvasTex(512, 512, (x, W) => { x.fillStyle = '#2a2f5e'; x.fillRect(0, 0, W, W); x.strokeStyle = '#ffffff'; x.lineWidth = 3; for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(i * W / 8, 0); x.lineTo(i * W / 8, W); x.stroke(); x.beginPath(); x.moveTo(0, i * W / 8); x.lineTo(W, i * W / 8); x.stroke(); } x.fillStyle = 'rgba(255,255,255,.06)'; for (let i = 0; i < 16; i++) x.fillRect(Math.random() * W, Math.random() * W, 40, 40); }, [6, 6]);
    const em = canvasTex(512, 512, (x, W) => { x.fillStyle = '#000'; x.fillRect(0, 0, W, W); x.strokeStyle = '#5fd8ff'; x.lineWidth = 3; for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(i * W / 8, 0); x.lineTo(i * W / 8, W); x.stroke(); x.beginPath(); x.moveTo(0, i * W / 8); x.lineTo(W, i * W / 8); x.stroke(); } }, [6, 6]);
    const plat = new THREE.Mesh(new THREE.CylinderGeometry(16, 16.6, .8, 96), new THREE.MeshStandardMaterial({ map: grid, emissiveMap: em, emissive: '#5fd8ff', emissiveIntensity: .55, metalness: .85, roughness: .32 }));
    plat.position.set(0, -.4, -3); plat.receiveShadow = true; g.add(plat);
    const ringN = 64, lights = new THREE.InstancedMesh(new THREE.SphereGeometry(.13, 10, 8), new THREE.MeshBasicMaterial({ color: '#ffffff' }), ringN); const d = new THREE.Object3D();
    for (let i = 0; i < ringN; i++) { const a = i / ringN * TAU; d.position.set(Math.cos(a) * 15.7, .05, Math.sin(a) * 15.7 - 3); d.updateMatrix(); lights.setMatrixAt(i, d.matrix); lights.setColorAt(i, C.set('#7ef9ff')); } g.add(lights);
    G.updaters.push(t => { for (let i = 0; i < ringN; i++) { const k = Math.max(0, Math.sin(i * .5 - t * 5)); lights.setColorAt(i, C.setRGB(.4 + k * 3, 1 + k * 3.5, 1.2 + k * 4)); } lights.instanceColor.needsUpdate = true; });
    // cúpula com cidade
    const city = new THREE.Group(); city.position.set(3, 0, -15); g.add(city);
    const win = canvasTex(64, 128, (x, W, H) => { x.fillStyle = '#1a1d40'; x.fillRect(0, 0, W, H); for (let r = 0; r < 12; r++) for (let c = 0; c < 4; c++) { if (Math.random() < .7) { x.fillStyle = pick(['#ffe9a0', '#9ff0ff', '#ffb3e6']); x.fillRect(c * 16 + 4, r * 10 + 3, 8, 5); } } });
    [[-2.2, 1.4, 4.5], [-.6, 1.1, 6.5], [.9, 1.3, 3.8], [2.3, 1, 5.2], [0, .9, 8]].forEach(([x, wd, h]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(wd, h, wd), new THREE.MeshStandardMaterial({ color: '#3b4196', metalness: .6, roughness: .4, emissiveMap: win, emissive: '#ffffff', emissiveIntensity: 1.4 })); b.position.set(x, h / 2, 0); b.castShadow = true; city.add(b); });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(5, 48, 24, 0, TAU, 0, Math.PI / 2), M.glass()); dome.renderOrder = 3; city.add(dome);
    const dr = new THREE.Mesh(new THREE.TorusGeometry(5, .15, 12, 64), M.metal('#c9d0ff', .25)); dr.rotation.x = Math.PI / 2; city.add(dr);
    // antena
    const ant = new THREE.Group(); ant.position.set(-10, 0, -8); g.add(ant); ant.add(cyl(M.metal('#9aa3e0', .3), .12, .2, 7, 0, 3.5, 0, 12));
    const dish = new THREE.Mesh(new THREE.SphereGeometry(1.4, 32, 16, 0, TAU, 0, Math.PI / 3), new THREE.MeshStandardMaterial({ color: '#dfe4ff', metalness: .7, roughness: .3, side: THREE.DoubleSide })); dish.position.y = 6.4; dish.rotation.x = 2.2; ant.add(dish);
    const bea = glowSprite('#ff4060', 2, 1); bea.position.y = 7.3; ant.add(bea); ant.add(sph(M.emis('#ff4060', 4), .15, 0, 7.3, 0));
    G.updaters.push(t => { dish.rotation.z = Math.sin(t * .4) * .8; bea.material.opacity = (Math.sin(t * 4) + 1) / 2; });
    // planeta com anéis
    const pl = new THREE.Group(); pl.position.set(34, 26, -120); g.add(pl);
    const st = canvasTex(256, 128, (x, W, H) => { const cs = ['#ffd8a8', '#ffb37a', '#e98a6a', '#ffe0c0', '#c86a6a', '#ffcf9a']; for (let i = 0; i < 24; i++) { x.fillStyle = pick(cs); x.fillRect(0, i * H / 24, W, H / 24 + 1); } });
    const pm = new THREE.Mesh(new THREE.SphereGeometry(16, 64, 32), new THREE.MeshStandardMaterial({ map: st, roughness: .8, emissive: '#ff9a6a', emissiveIntensity: .12 })); pl.add(skyBody(pm, w.skyLine));
    const rt = canvasTex(256, 8, (x, W) => { for (let i = 0; i < W; i++) { x.fillStyle = `rgba(255,${200 + Math.random() * 50 | 0},${160 + Math.random() * 60 | 0},${Math.random() * .7 + .2})`; x.fillRect(i, 0, 1, 8); } });
    const rg = new THREE.RingGeometry(21, 34, 128, 1); const uv = rg.attributes.uv, pp = rg.attributes.position; for (let i = 0; i < uv.count; i++) { const r = Math.hypot(pp.getX(i), pp.getY(i)); uv.setXY(i, (r - 21) / 13, .5); }
    const ring = new THREE.Mesh(rg, new THREE.MeshStandardMaterial({ map: rt, transparent: true, side: THREE.DoubleSide, roughness: .7, depthWrite: false, emissive: '#ffb07a', emissiveIntensity: .15 })); ring.rotation.set(1.25, .2, .35); pl.add(ring);
    const lg = glowSprite('#ffb27a', 80, .25); pl.add(lg);
    const moonS = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 16), M.matte('#9ad8ff', .9)); moonS.position.set(-60, 30, -150); g.add(moonS);
    // asteroides
    const an = 40, ast = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 1), M.matte('#6a6080', 1), an); const ad = [];
    for (let i = 0; i < an; i++) ad.push({ a: rnd(TAU), r: rnd(45, 90), y: rnd(6, 30), s: rnd(.5, 2.4), sp: rnd(.01, .04), rx: rnd(TAU) });
    G.updaters.push(t => { ad.forEach((o, i) => { d.position.set(Math.cos(o.a + t * o.sp) * o.r, o.y, Math.sin(o.a + t * o.sp) * o.r - 70); d.rotation.set(o.rx + t * .3, t * .2, 0); d.scale.setScalar(o.s); d.updateMatrix(); ast.setMatrixAt(i, d.matrix); }); ast.instanceMatrix.needsUpdate = true; }); g.add(ast);
    return g;
  },
  amb: [[3, 6, shootingStar]],
  tapGround(p) { G.sparks.burst(p.x, p.y + .2, p.z, 30, ['#7ef9ff', '#ffffff', '#ff8ae2'], 3.5); G.fx.ring(p, '#7ef9ff'); G.sfx.sparkle(); },
  tapSky(p) { shootingStar(); G.sparks.burst(p.x, p.y, p.z, 40, ['#ffffff', '#ffe36b', '#9ff6ff'], 4); G.sfx.sparkle(); }
},
{
  id: 'lua', name: 'LUA BRILHANTE', short: 'Lua', icon: '🌙', fname: 'Lulu', fdesc: 'a coelhinha', kind: 'bunny', face: '🐰', key: 1.122, disc: ['#f0f0ff', '#7a7aa8'], food: 'carrot', foodN: 'cenouras',
  hello: 'Oi, Maria Clara! Eu sou a Lulu, a coelhinha da Lua! Aqui a gente pula bem alto!',
  lines: ['Hop hop! Olha como eu pulo alto!', 'Na Lua tudo flutua! Que legal!', 'Você quer ser astronauta? Eu acho que sim!', 'Hihihi! Minhas orelhas fazem cócegas!'],
  skyLine: 'Aquela bolinha azul é a Terra, a nossa casa!',
  env: { top: '#000004', mid: '#04051a', bot: '#000000', sun: [-.6, .35, .2], sunCol: '#fff6e6', sunSize: 1.4, stars: 1.6, nebula: .25, haze: .1, glow: .6, fog: ['#04051a', 60, 260], key: ['#ffffff', 3.4, [-9, 6, 5]], hemi: ['#8a9aff', '#202030', .35], exposure: 1.05, bloom: .55 },
  build(w) {
    const g = new THREE.Group(); const r = seeded(77); const cr = Array.from({ length: 26 }, () => ({ x: (r() - .5) * 120, z: -r() * 110 + 8, rad: 1.5 + r() * 7 }));
    cr.push({ x: -6, z: -4, rad: 2.2 }, { x: 7, z: -2, rad: 1.8 });
    const h = (x, z) => { let y = hills(6, .05)(x, z) + (fbm2(x * .3, z * .3) - .5) * .15; for (const c of cr) { const d = Math.hypot(x - c.x, z - c.z) / c.rad; if (d < 1.6) y += d < 1 ? -(1 - d * d) * c.rad * .22 : Math.exp(-Math.pow((d - 1) / .25, 2)) * c.rad * .08; } return y * (Math.hypot(x, z - .5) < 3.5 ? .3 : 1); };
    g.add(terrain(h, (x, z, y, c) => mixc('#8c8ca6', '#d8d8ec', fbm2(x * .2, z * .2) + y * .08, c), { rough: 1 }));
    const er = new THREE.Group(); er.position.set(-36, 28, -110); g.add(er);
    const et = canvasTex(512, 256, (x, W, H) => { x.fillStyle = '#1f5fd6'; x.fillRect(0, 0, W, H); for (let i = 0; i < 2600; i++) { const px = Math.random() * W, py = Math.random() * H; const n = noise2(px * .02, py * .03) + noise2(px * .05 + 9, py * .05) * .5; if (n > .82) { x.fillStyle = n > 1.05 ? '#c9b07a' : '#3fae4f'; x.fillRect(px, py, 6, 5); } } x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, 12); x.fillRect(0, H - 12, W, 12); });
    const earth = new THREE.Mesh(new THREE.SphereGeometry(11, 64, 32), new THREE.MeshStandardMaterial({ map: et, roughness: .55, emissive: '#2a6aff', emissiveIntensity: .12 })); er.add(skyBody(earth, w.skyLine));
    const ct = canvasTex(512, 256, (x, W, H) => { for (let i = 0; i < 260; i++) { x.fillStyle = 'rgba(255,255,255,.5)'; x.beginPath(); x.ellipse(Math.random() * W, Math.random() * H, rnd(10, 40), rnd(3, 9), 0, 0, TAU); x.fill(); } });
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(11.25, 64, 32), new THREE.MeshStandardMaterial({ map: ct, transparent: true, depthWrite: false, roughness: 1 })); er.add(clouds); er.add(glowSprite('#5fb6ff', 34, .55));
    G.updaters.push(t => { earth.rotation.y = t * .05; clouds.rotation.y = t * .07; });
    // bandeira
    const fl = new THREE.Group(); fl.position.set(-4.5, 0, -5); g.add(fl); fl.add(cyl(M.metal('#e9ecff', .2), .04, .04, 3.2, 0, 1.6, 0, 10));
    const cg = new THREE.PlaneGeometry(1.6, 1, 16, 8); cg.translate(.8, 0, 0); const fm = new THREE.Mesh(cg, new THREE.MeshStandardMaterial({ map: canvasTex(256, 160, (x, W, H) => { x.fillStyle = '#ff5fa2'; x.fillRect(0, 0, W, H); x.fillStyle = '#ffe36b'; x.translate(W / 2, H / 2); x.beginPath(); for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5 - Math.PI / 2, d = i % 2 ? 22 : 50; x.lineTo(Math.cos(a) * d, Math.sin(a) * d); } x.fill(); }), side: THREE.DoubleSide, roughness: .7 }));
    fm.position.y = 2.7; fm.castShadow = true; fl.add(fm); const base = cg.attributes.position.array.slice();
    G.updaters.push(t => { const a = cg.attributes.position; for (let i = 0; i < a.count; i++) { const x = base[i * 3]; a.setZ(i, Math.sin(t * 3 - x * 3) * .12 * x); } a.needsUpdate = true; cg.computeVertexNormals(); });
    const rk = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(.3, 0), M.matte('#a4a4bc', 1), 60); const d = new THREE.Object3D();
    for (let i = 0; i < 60; i++) { let x, z; do { x = rnd(-22, 22); z = rnd(-30, 5); } while (Math.hypot(x, z - .5) < 4); d.position.set(x, h(x, z), z); d.rotation.set(rnd(3), rnd(3), 0); d.scale.setScalar(rnd(.4, 2)); d.updateMatrix(); rk.setMatrixAt(i, d.matrix); } rk.castShadow = rk.receiveShadow = true; g.add(rk);
    return g;
  },
  amb: [[2.5, 5, shootingStar]],
  tapGround(p) { for (let i = 0; i < 3; i++) G.props.bounce(pick(['rock', 'star', 'star']), p, .4); G.sfx.boing(); },
  tapSky(p) { G.sparks.burst(p.x, p.y, p.z, 40, ['#ffffff', '#dfe8ff'], 4); shootingStar(); G.sfx.sparkle(); }
},
{
  id: 'doces', name: 'PLANETA DOS DOCES', short: 'Doces', icon: '🍭', fname: 'Bolota', fdesc: 'o cachorrinho', kind: 'puppy', face: '🐶', key: .89, disc: ['#ffb3e0', '#c45a9a'], food: 'bone', foodN: 'ossinhos',
  hello: 'Au au! Oi, Maria Clara! Eu sou o Bolota! Bem-vinda ao Planeta dos Doces!',
  lines: ['Au au! Quer um pirulito?', 'Hahaha! Meu rabinho não para de balançar!', 'Au! Aquela montanha é de sorvete!', 'Lambeijo pra você, Maria Clara!'],
  skyLine: 'O sol aqui parece um caramelo derretendo! Que delícia!',
  env: { top: '#ff6fb8', mid: '#ffa8b0', bot: '#ffcfb8', sun: [.5, .16, -1], sunCol: '#ffe2b0', sunSize: 3, stars: 0, nebula: 0, haze: .9, glow: 1.3, fog: ['#f6a8c8', 50, 200], key: ['#ffe9d6', 2.2, [7, 8, 6]], hemi: ['#ffc0e0', '#b04a7a', .55], exposure: .82, bloom: .3 },
  build(w) {
    const g = new THREE.Group();
    g.add(terrain(hills(5, .05, 3), (x, z, y, c) => mixc('#e2669e', '#ffb0c8', fbm2(x * .12, z * .12) * 1.4 - .2 + y * .06, c), { rough: .55 }));
    const spr = new THREE.InstancedMesh(new THREE.CapsuleGeometry(.025, .12, 3, 6), new THREE.MeshPhysicalMaterial({ roughness: .3, clearcoat: 1 }), 500); const d = new THREE.Object3D();
    for (let i = 0; i < 500; i++) { d.position.set(rnd(-16, 16), .03, rnd(-18, 5)); d.rotation.set(Math.PI / 2, 0, rnd(TAU)); d.updateMatrix(); spr.setMatrixAt(i, d.matrix); spr.setColorAt(i, C.set(pick(['#ff4f8a', '#4dc3ff', '#ffd23f', '#7cf29a', '#ffffff', '#b48cff']))); } g.add(spr);
    const scoop = (x, z, s, c) => { const m = new THREE.Group(); m.position.set(x, 0, z); const mat = new THREE.MeshPhysicalMaterial({ color: c, roughness: .45, sheen: 1, sheenColor: new THREE.Color('#ffffff'), clearcoat: .3 }); m.add(sph(mat, s, 0, s * .2, 0, 1, .82, 1)); for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; m.add(sph(mat, s * .16, Math.cos(a) * s * .93, s * .02 - (i % 3) * s * .07, Math.sin(a) * s * .93, 1, 1.8, 1, true)); } m.add(sph(M.gloss('#ff2f4f'), s * .14, 0, s * 1.02, 0)); return m; };
    g.add(scoop(-22, -45, 11, '#ffd9e8'), scoop(4, -62, 15, '#c7f5df'), scoop(28, -48, 12, '#fff2cc'));
    const lol = (x, z, h, r, c) => { const m = new THREE.Group(); m.position.set(x, 0, z); m.add(cyl(M.gloss('#fff8ee'), .09, .09, h, 0, h / 2, 0, 12)); const disc = new THREE.Mesh(new THREE.CylinderGeometry(r, r, .3, 48), new THREE.MeshPhysicalMaterial({ map: spiralTex(c), roughness: .12, clearcoat: 1 })); disc.rotation.x = Math.PI / 2; disc.position.y = h; disc.castShadow = true; m.add(disc); G.updaters.push(t => disc.rotation.y = t * .5 * (x > 0 ? 1 : -1)); return m; };
    g.add(lol(-7, -5, 3.2, 1.2, '#ff3f7a'), lol(7.5, -8, 4, 1.5, '#2fb6ff'), lol(-3, -14, 4.5, 1.6, '#a46bff'), lol(12, -18, 5, 2, '#ff9a3c'));
    const st = canvasTex(64, 64, (x, W) => { x.fillStyle = '#fff'; x.fillRect(0, 0, W, W); x.fillStyle = '#ff2f4f'; x.fillRect(0, 0, W / 2, W); }, [12, 1]);
    const cc = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 2.5, 0), new THREE.Vector3(.2, 3.3, 0), new THREE.Vector3(.8, 3.6, 0), new THREE.Vector3(1.4, 3.2, 0), new THREE.Vector3(1.5, 2.7, 0)]);
    for (const [x, z] of [[9, -3], [-11, -9]]) { const cane = new THREE.Mesh(new THREE.TubeGeometry(cc, 64, .2, 16), new THREE.MeshPhysicalMaterial({ map: st, roughness: .15, clearcoat: 1 })); cane.position.set(x, 0, z); cane.castShadow = true; g.add(cane); }
    scatter(14, 14, (x, z) => { const c = pick(['#7cf29a', '#ff6fae', '#b48cff', '#ffd23f', '#5fd0ff']); const gd = new THREE.Mesh(new THREE.SphereGeometry(.6, 32, 16, 0, TAU, 0, Math.PI / 2), new THREE.MeshPhysicalMaterial({ color: c, roughness: .2, clearcoat: 1, sheen: 1, sheenColor: new THREE.Color('#ffffff'), transmission: 0 })); gd.position.set(x, 0, z); gd.scale.y = 1.2; gd.castShadow = true; g.add(gd); });
    const clouds = []; for (let i = 0; i < 6; i++) { const cl = mkCloud(i % 2 ? '#ffd0ee' : '#d6ecff', rnd(1.5, 2.6)); cl.position.set(rnd(-40, 40), rnd(12, 20), rnd(-60, -25)); g.add(cl); clouds.push(cl); }
    G.updaters.push((t, dt) => clouds.forEach(c => { c.position.x += dt * .6; if (c.position.x > 50) c.position.x = -50; }));
    const sunObj = new THREE.Mesh(new THREE.SphereGeometry(10, 12, 8), new THREE.MeshBasicMaterial({ visible: false })); sunObj.position.set(.5, .16, -1).normalize().multiplyScalar(300); g.add(skyBody(sunObj, w.skyLine));
    return g;
  },
  amb: [[4, 7, () => G.props.balloonRise()]],
  tapGround(p) { for (let i = 0; i < 6; i++) G.props.bounce('candy', p, 1); G.sfx.pop(); },
  tapSky(p) { for (let i = 0; i < 5; i++) G.props.bounce('candy', p, 1); G.sfx.pop(); }
},
{
  id: 'mar', name: 'FUNDO DO MAR', short: 'Mar', icon: '🐠', fname: 'Estela', fdesc: 'a estrelinha do mar', kind: 'starfish', face: '⭐', key: 1.06, disc: ['#5fe1f0', '#0a3d86'], food: 'fish', foodN: 'peixinhos', water: true,
  hello: 'Blub blub! Oi, Maria Clara! Eu sou a Estela, a estrelinha do mar!',
  lines: ['Blub blub! Toque na água para fazer bolhas!', 'Os peixinhos são meus amigos!', 'Eu brilho igual uma estrela! Hihi!', 'Vamos estourar as bolhas? Plim!'],
  skyLine: 'Olha a luz do sol entrando na água! Que lindo!',
  env: { top: '#3fc8f0', mid: '#0c62a0', bot: '#03203f', sun: [0, 1, -.15], sunCol: '#bff4ff', sunSize: 6, stars: 0, nebula: 0, haze: .8, glow: .8, fog: ['#0a4f85', 3, 42], key: ['#8fdcff', 1.5, [2, 12, 3]], hemi: ['#6fd8ff', '#06284f', .9], exposure: 1.0, bloom: .45 },
  build(w) {
    const g = new THREE.Group();
    g.add(terrain((x, z) => hills(4, .06, 9)(x, z) + Math.sin(x * 1.3 + z * .4) * .04 * smooth(2, 6, Math.hypot(x, z)), (x, z, y, c) => mixc('#8f7a52', '#c9b080', fbm2(x * .25, z * .25) * 1.3 - .1, c), { rough: .95 }));
    const caus = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { t: { value: 0 } },
      vertexShader: `varying vec2 vP; void main(){ vec4 wp=modelMatrix*vec4(position,1.); vP=wp.xz; gl_Position=projectionMatrix*viewMatrix*wp; }`,
      fragmentShader: `varying vec2 vP; uniform float t; float cau(vec2 p){ vec2 i=p; float c=1.; float k=.006; for(int n=0;n<4;n++){ float tt=t*(1.-(3.5/float(n+1))); i=p+vec2(cos(tt-i.x)+sin(tt+i.y),sin(tt-i.y)+cos(tt+i.x)); c+=1./max(length(vec2(p.x/(sin(i.x+tt)/k),p.y/(cos(i.y+tt)/k))),.001); } c/=4.; c=1.17-pow(c,1.4); return pow(abs(c),7.); }
        void main(){ float v=cau(vP*.55+vec2(30.)); v=(v==v)?smoothstep(.25,1.3,clamp(v,0.,1.3))*.55:0.; float f=1.-smoothstep(8.,30.,length(vP-vec2(0.,-4.))); gl_FragColor=vec4(vec3(.7,.95,1.)*v*.75*f, clamp(v*f,0.,1.)); }` }));
    caus.rotation.x = -Math.PI / 2; caus.position.set(0, .04, -12); g.add(caus); G.updaters.push(t => caus.material.uniforms.t.value = t * .5 + 23);
    const rayM = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { t: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `varying vec2 vUv; uniform float t; void main(){ float a=smoothstep(0.,.5,vUv.x)*smoothstep(1.,.5,vUv.x)*pow(vUv.y,1.5)*(.6+.4*sin(t+vUv.x*6.)); gl_FragColor=vec4(vec3(.85,1.,1.)*a*.35,a*.35); }` });
    const rays = []; for (let i = 0; i < 7; i++) { const r = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 26), rayM); r.position.set(-12 + i * 4, 10, -10 - (i % 3) * 5); r.rotation.z = .25; g.add(r); rays.push(r); }
    G.updaters.push(t => { rayM.uniforms.t.value = t; rays.forEach((r, i) => r.rotation.z = .25 + Math.sin(t * .4 + i) * .07); });
    const wm = windMat('#2fbf71', { roughness: .6, bend: '0.05' }); const wg = new THREE.PlaneGeometry(.35, 4, 1, 14); wg.translate(0, 2, 0);
    const weeds = new THREE.InstancedMesh(wg, wm, 70); const d = new THREE.Object3D(); const wpos = [];
    for (let i = 0; i < 70; i++) { let x, z; do { x = rnd(-16, 16); z = rnd(-22, 3); } while (Math.abs(x) < 4.5 && z > -4); d.position.set(x, 0, z); d.rotation.y = rnd(TAU); d.scale.set(1, rnd(.6, 1.6), 1); d.updateMatrix(); weeds.setMatrixAt(i, d.matrix); weeds.setColorAt(i, C.set(pick(['#2fbf71', '#25a862', '#4fd68a', '#1f9a6a']))); wpos.push([x, z]); } g.add(weeds);
    const coral = (x, z, c, s) => { const m = new THREE.Group(); m.position.set(x, 0, z); m.scale.setScalar(s); const mat = M.plush(c); const br = (p, dir, l, dep) => { const e = p.clone().add(dir.clone().multiplyScalar(l)); const cy = new THREE.Mesh(new THREE.CapsuleGeometry(.12 * (dep + 1) * .5, l, 4, 8), mat); cy.position.copy(p).lerp(e, .5); cy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize()); cy.castShadow = true; m.add(cy); if (dep > 0) for (let k = 0; k < 2; k++) br(e, dir.clone().applyAxisAngle(new THREE.Vector3(Math.random(), 0, Math.random()).normalize(), rnd(.4, .8) * (k ? 1 : -1)), l * .75, dep - 1); else m.add(sph(mat, .14, e.x, e.y, e.z, 1, 1, 1, true)); }; br(new THREE.Vector3(), new THREE.Vector3(0, 1, 0), .9, 3); return m; };
    g.add(coral(-6, -3, '#ff7aa8', 1.2), coral(6.5, -4, '#ffb35c', 1.4), coral(-9, -9, '#c58bff', 1.8), coral(10, -12, '#ff5f7a', 2), coral(2, -11, '#5fe0c8', 1.3));
    const fish = []; for (let i = 0; i < 14; i++) { const f = mkFish(pick(['#ffb02e', '#ff5fa2', '#5fd0ff', '#ffe14d', '#9b7bff', '#ff7a4a'])); f.userData.o = { r: rnd(6, 16), a: rnd(TAU), y: rnd(2, 7), sp: rnd(.12, .3) * (Math.random() < .5 ? 1 : -1), z: rnd(-18, -6) }; f.scale.setScalar(rnd(.8, 1.4)); g.add(f); fish.push(f); f.userData.tap = () => { G.sfx.giggle(); G.sparks.burst(f.position.x, f.position.y, f.position.z, 16, '#bff6ff', 2); f.userData.o.sp *= 2.5; setTimeout(() => f.userData.o.sp /= 2.5, 1500); }; }
    G.pickables.push(...fish);
    G.updaters.push((t, dt) => { fish.forEach((f, i) => { const o = f.userData.o; o.a += o.sp * dt; f.position.set(Math.cos(o.a) * o.r, o.y + Math.sin(t + i) * .3, o.z + Math.sin(o.a) * 4); const vx = -Math.sin(o.a) * o.r * o.sp, vz = Math.cos(o.a) * 4 * o.sp; f.rotation.y = Math.atan2(vz, -vx); f.userData.tail.rotation.y = Math.sin(t * 10 + i) * .5; });
      if (Math.random() < dt * 4) { const [x, z] = pick(wpos); G.sparks.spawn({ x, y: rnd(.5, 3), z, vy: rnd(.6, 1.2), vx: rnd(-.1, .1), color: '#dff8ff', size: rnd(.08, .18), life: 4 }); } });
    const sunObj = new THREE.Mesh(new THREE.SphereGeometry(20, 12, 8), new THREE.MeshBasicMaterial({ visible: false })); sunObj.position.set(0, 40, -20); g.add(skyBody(sunObj, w.skyLine));
    return g;
  },
  amb: [[6, 11, () => G.props.bubbleUp(rnd(-4, 4), -1, rnd(-1, 2))]],
  tapGround(p) { for (let i = 0; i < 5; i++) G.props.bubbleUp(p.x + rnd(-.5, .5), p.y + .3, p.z + rnd(-.3, .3)); G.sfx.bloop(); },
  tapSky(p) { for (let i = 0; i < 5; i++) G.props.bubbleUp(p.x + rnd(-.6, .6), p.y + rnd(-.4, .4), p.z); G.sfx.bloop(); }
},
{
  id: 'flores', name: 'JARDIM DAS FLORES', short: 'Flores', icon: '🌸', fname: 'Bia', fdesc: 'a abelhinha', kind: 'bee', face: '🐝', key: 1, disc: ['#ffd0ef', '#4cb85b'], food: 'honey', foodN: 'potinhos de mel',
  hello: 'Bzzz! Oi, Maria Clara! Eu sou a Bia, a abelhinha! Vamos plantar flores?',
  lines: ['Bzzz! Toque na grama para nascer uma flor!', 'As borboletas querem brincar!', 'Bzzz! Que flor mais cheirosa!', 'Você é docinha igual mel!'],
  skyLine: 'Bom dia, sol! Ele está brilhando pra você!',
  env: { top: '#2f86ff', mid: '#a6dcff', bot: '#e8f6ff', sun: [.45, .55, -.7], sunCol: '#fff4d8', sunSize: 2, stars: 0, nebula: 0, haze: .45, glow: 1, fog: ['#bfe0ff', 50, 210], key: ['#fff1dc', 2.8, [7, 10, -3]], hemi: ['#a8d6ff', '#3a6a2a', .9], exposure: .95, bloom: .3 },
  build(w) {
    const g = new THREE.Group();
    g.add(terrain(hills(9, .04, 5), (x, z, y, c) => mixc('#3f9a3f', '#8fdc5a', fbm2(x * .1, z * .1) * 1.5 - .2 + y * .03, c), { rough: .9 }));
    g.add(grass(6000, [-15, 15, -20, 5], ['#5fcf4f', '#4cb848', '#7ee060', '#3fa83f']));
    g.add(flowerField(160, [-15, 15, -20, 4], ['#ff6fa8', '#ffd23f', '#ffffff', '#b48cff', '#ff8a3c', '#5fd0ff']));
    const tree = (x, z, s) => { const t = new THREE.Group(); t.position.set(x, 0, z); t.scale.setScalar(s); t.add(cyl(M.plush('#8a5a3a'), .25, .35, 3, 0, 1.5, 0, 12)); const fm = M.plush(pick(['#3fae4a', '#4cc85a', '#2f9a44'])); [[0, 3.6, 0, 1.6], [1, 3.1, .3, 1.1], [-1, 3.2, -.2, 1.2], [.2, 4.4, -.2, 1.1], [-.4, 3, .9, 1]].forEach(([a, b, c2, r]) => t.add(sph(fm, r, a, b, c2))); return t; };
    [[-12, -12, 1.3], [13, -15, 1.5], [-20, -25, 1.8], [22, -30, 2], [5, -32, 1.7], [-8, -30, 1.6]].forEach(a => g.add(tree(...a)));
    for (const [x, z, c] of [[-5.2, -1.5, '#ff6fa8'], [5.4, -2.2, '#9b7bff'], [-3.5, -6, '#ffb340']]) { const f = mkFlower(c); f.position.set(x, 0, z); f.scale.setScalar(1.8); g.add(f); G.updaters.push(t => f.rotation.z = Math.sin(t * 1.3 + x) * .06); }
    const clouds = []; for (let i = 0; i < 6; i++) { const cl = mkCloud('#ffffff', rnd(1.6, 2.8)); cl.position.set(rnd(-50, 50), rnd(14, 22), rnd(-70, -35)); g.add(cl); clouds.push(cl); }
    G.updaters.push((t, dt) => clouds.forEach(c => { c.position.x += dt * .5; if (c.position.x > 60) c.position.x = -60; }));
    const bfs = []; for (let i = 0; i < 7; i++) { const b = mkButterfly(pick(['#ff6fa8', '#ffb340', '#5fd0ff', '#b48cff', '#ffe14d'])); b.userData.o = { cx: rnd(-8, 8), cz: rnd(-10, -2), r: rnd(1.5, 4), a: rnd(TAU), sp: rnd(.4, .8), y: rnd(1, 3.5) }; g.add(b); bfs.push(b); b.userData.tap = () => { G.sfx.giggle(); G.sparks.burst(b.position.x, b.position.y, b.position.z, 14, '#ffe9f8', 2); }; }
    G.pickables.push(...bfs);
    G.updaters.push(t => bfs.forEach((b, i) => { const o = b.userData.o; const a = o.a + t * o.sp; b.position.set(o.cx + Math.cos(a) * o.r, o.y + Math.sin(t * 2 + i) * .4, o.cz + Math.sin(a) * o.r); b.rotation.z = -a; const fl = Math.sin(t * 16 + i) * .9; b.userData.wings[0].rotation.y = fl; b.userData.wings[1].rotation.y = -fl; }));
    const sunObj = new THREE.Mesh(new THREE.SphereGeometry(18, 12, 8), new THREE.MeshBasicMaterial({ visible: false })); sunObj.position.set(.45, .55, -.7).normalize().multiplyScalar(300); g.add(skyBody(sunObj, w.skyLine));
    return g;
  },
  amb: [],
  tapGround(p) { G.props.growFlower(p); },
  tapSky(p) { G.props.butterfly(p); G.sparks.burst(p.x, p.y, p.z, 24, ['#ffb3d9', '#ffe36b', '#ffffff'], 2.5); G.sfx.chime(); }
},
{
  id: 'arcoiris', name: 'PLANETA ARCO-ÍRIS', short: 'Arco-íris', icon: '🌈', fname: 'Zuzu', fdesc: 'a unicórnio', kind: 'unicorn', face: '🦄', key: 1.19, disc: ['#ff9be0', '#7f8cff'], food: 'strawberry', foodN: 'moranguinhos',
  hello: 'Olá, Maria Clara! Eu sou a Zuzu, a unicórnio! Você encontrou o planeta das cores!',
  lines: ['Meu chifre brilha quando você sorri!', 'Vamos contar as cores do arco-íris?', 'Iiirrí! Que alegria!', 'Toque no céu para fazer corações!'],
  skyLine: 'O arco-íris tem sete cores! Vermelho, laranja, amarelo, verde, azul, anil e violeta!',
  env: { top: '#7a5cff', mid: '#ff9fdc', bot: '#ffd6f0', sun: [-.4, .45, -1], sunCol: '#fff0ff', sunSize: 2.5, stars: .25, nebula: .15, haze: .8, glow: 1.2, fog: ['#d8a8e8', 50, 200], key: ['#fff0ff', 2.2, [6, 9, 6]], hemi: ['#f0c8ff', '#3a8a78', .55], exposure: .82, bloom: .35 },
  build(w) {
    const g = new THREE.Group();
    g.add(terrain(hills(6, .05, 11), (x, z, y, c) => mixc('#3fb08a', '#8fdcb4', fbm2(x * .15, z * .15) * 1.4 - .2, c), { rough: .7 }));
    g.add(grass(3500, [-15, 15, -20, 5], ['#4fc89a', '#ff8fc8', '#8fd860', '#6fb8ff'], .4));
    const rb = new THREE.Group(); rb.position.set(0, -4, -75); g.add(rb);
    RAINBOW.forEach((c, i) => { const m = new THREE.Mesh(new THREE.TorusGeometry(48 - i * 1.7, .85, 12, 120, Math.PI), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(1.15), transparent: true, opacity: .9, fog: false })); rb.add(m); });
    const isl = []; [[-18, 9, -40], [20, 12, -48], [-30, 16, -70], [34, 18, -80]].forEach(([x, y, z], i) => { const s = new THREE.Group(); s.position.set(x, y, z); s.add(cone(M.plush('#b48cff'), 3, 4, 0, -2, 0, 7)); s.children[0].rotation.x = Math.PI; s.add(cyl(M.plush('#9ff2cf'), 3.1, 3.1, .5, 0, .1, 0, 24)); s.add(sph(M.plush('#ffb3e0'), 1.2, .5, 1.3, 0)); s.add(cyl(M.plush('#a0703a'), .15, .2, 1, .5, .6, 0)); g.add(s); isl.push(s); });
    G.updaters.push(t => isl.forEach((s, i) => s.position.y += Math.sin(t * .6 + i) * .004));
    const crys = (x, z, c, s) => { const m = new THREE.Group(); m.position.set(x, 0, z); m.scale.setScalar(s); const mat = new THREE.MeshPhysicalMaterial({ color: c, roughness: .05, metalness: .1, clearcoat: 1, iridescence: 1, iridescenceIOR: 1.8, flatShading: true, emissive: c, emissiveIntensity: .25 });
      for (let i = 0; i < 5; i++) { const h = rnd(1, 2.4); const o = new THREE.Mesh(new THREE.OctahedronGeometry(.4, 0), mat); o.scale.set(1, h * 1.6, 1); o.position.set(rnd(-.5, .5), h * .55, rnd(-.5, .5)); o.rotation.set(rnd(-.3, .3), rnd(3), rnd(-.3, .3)); o.castShadow = true; m.add(o); } const gl = glowSprite(c, 4, .5); gl.position.y = 1.2; m.add(gl); return m; };
    g.add(crys(-6.5, -3, '#7fe3ff', 1), crys(7, -5, '#ff9be0', 1.2), crys(-10, -12, '#c39bff', 1.6), crys(12, -15, '#ffe36b', 1.4));
    const cl = mkCloud('#ffffff', 2.4); cl.position.set(14, 15, -40); g.add(cl);
    for (const s of [-1, 1]) { const e = new THREE.Group(); e.position.set(s * .5, .1, .95); e.add(sph(M.eye(), .14, 0, 0, 0, 1, 1.3, .5)); e.add(sph(M.emis('#ffffff', 2.5), .05, -.04, .06, .06, 1, 1, 1, true)); cl.add(e); }
    const csm = new THREE.Mesh(new THREE.TorusGeometry(.2, .04, 8, 16, Math.PI), M.matte('#6a4a8a', .6)); csm.rotation.z = Math.PI; csm.position.set(0, -.15, .98); cl.add(csm);
    cl.traverse(o => { if (o.isMesh) o.userData.tap = () => G.onSkyTap(w.skyLine, cl); }); G.pickables.push(cl);
    G.updaters.push(t => cl.position.y = 15 + Math.sin(t * .8) * .4);
    const others = []; for (let i = 0; i < 4; i++) { const c2 = mkCloud(pick(['#ffffff', '#ffe0f6', '#e8e0ff']), rnd(1.5, 2.4)); c2.position.set(rnd(-45, 45), rnd(12, 20), rnd(-70, -35)); g.add(c2); others.push(c2); }
    G.updaters.push((t, dt) => { others.forEach(c => { c.position.x += dt * .5; if (c.position.x > 55) c.position.x = -55; }); if (Math.random() < dt * 6) G.sparks.spawn({ x: rnd(-12, 12), y: rnd(.5, 7), z: rnd(-12, 2), vy: .3, color: pick(RAINBOW), size: rnd(.15, .3), life: 1.5 }); });
    return g;
  },
  amb: [[5, 9, () => G.props.balloonRise()]],
  tapGround(p) { G.fx.rainbowRing(p); for (let i = 0; i < 5; i++) G.props.floatHeart(p); G.sfx.magic(); },
  tapSky(p) { G.fx.rainbowRing(p); for (let i = 0; i < 6; i++) G.props.floatHeart(p); G.sfx.magic(); }
},
{
  id: 'gelo', name: 'PLANETA GELADO', short: 'Gelo', icon: '❄️', fname: 'Pingo', fdesc: 'o pinguim', kind: 'penguin', face: '🐧', key: .94, disc: ['#e6f6ff', '#4a90d6'], food: 'fish', foodN: 'peixinhos',
  hello: 'Oi, Maria Clara! Eu sou o Pingo, o pinguim! Brrr, aqui é geladinho!',
  lines: ['Brrr! Que friozinho gostoso!', 'Toque na neve para fazer um boneco!', 'Olha as luzes coloridas no céu! É a aurora!', 'Eu adoro escorregar na barriga! Uiii!'],
  skyLine: 'Essas luzes dançando no céu se chamam aurora. Parece mágica!',
  env: { top: '#010612', mid: '#0a2246', bot: '#12345a', sun: [-.5, .45, -1], sunCol: '#cfe0ff', sunSize: 2, stars: 1.4, nebula: .2, haze: .5, glow: .3, fog: ['#0c2244', 35, 170], key: ['#a8c4ff', 1.5, [-6, 10, 4]], hemi: ['#4a70d0', '#14203a', .6], exposure: 1.0, bloom: .5 },
  build(w) {
    const g = new THREE.Group();
    g.add(terrain(hills(7, .045, 21), (x, z, y, c) => mixc('#8aa8d0', '#d4e4f6', fbm2(x * .2, z * .2) * 1.6 - .1 + y * .05, c), { rough: .5 }));
    const auroraM = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false, uniforms: { t: { value: 0 } },
      vertexShader: `varying vec2 vUv; uniform float t; void main(){ vUv=uv; vec3 p=position; p.z+=sin(p.x*.05+t*.3)*12.+sin(p.x*.13-t*.5)*4.; p.y+=sin(p.x*.08+t*.4)*3.; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }`,
      fragmentShader: `varying vec2 vUv; uniform float t; void main(){ float band=pow(sin(vUv.x*60.+t*.8+sin(vUv.x*13.+t)*2.)*.5+.5,3.); float v=vUv.y; float a=smoothstep(0.,.15,v)*pow(1.-v,1.6)*(.45+.55*band);
        vec3 c=mix(vec3(.15,1.,.6),vec3(.6,.3,1.),smoothstep(.3,1.,v)+.3*sin(vUv.x*8.+t*.2)); gl_FragColor=vec4(c*a*1.6,a); }` });
    for (let i = 0; i < 3; i++) { const a = new THREE.Mesh(new THREE.PlaneGeometry(220, 34, 220, 1), auroraM); a.position.set(i * 10 - 10, 34 + i * 6, -110 - i * 20); g.add(a); }
    G.updaters.push(t => auroraM.uniforms.t.value = t);
    const moon = new THREE.Mesh(new THREE.SphereGeometry(7, 48, 24), new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#dfe8ff', emissiveIntensity: .9, roughness: 1 })); moon.position.set(-.5, .45, -1).normalize().multiplyScalar(160); g.add(skyBody(moon, w.skyLine)); const mg = glowSprite('#cfe0ff', 34, .28); mg.position.copy(moon.position); g.add(mg);
    const ice = new THREE.MeshPhysicalMaterial({ color: '#d8f0ff', roughness: .12, metalness: 0, clearcoat: 1, flatShading: true, sheen: .5, sheenColor: new THREE.Color('#9fd8ff') });
    [[-30, -55, 14, 22], [-8, -70, 18, 30], [18, -60, 15, 24], [40, -75, 20, 32], [-48, -80, 16, 26]].forEach(([x, z, r, h]) => { const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7, 3), ice); m.position.set(x, h / 2 - 2, z); m.rotation.y = rnd(3); g.add(m); });
    const pine = (x, z, s) => { const t = new THREE.Group(); t.position.set(x, 0, z); t.scale.setScalar(s); t.add(cyl(M.plush('#6b4a3a'), .15, .2, .8, 0, .4, 0, 8)); for (let i = 0; i < 4; i++) { const r = 1.3 - i * .28, y = .9 + i * .75; t.add(cone(M.plush('#2a6a50'), r, 1.3, 0, y, 0, 10)); t.add(cone(M.plush('#f4fbff'), r * .55, .55, 0, y + .45, 0, 10)); } return t; };
    scatter(16, 18, (x, z) => g.add(pine(x, z, rnd(1, 2.2))), 6);
    const ig = new THREE.Group(); ig.position.set(5.5, 0, -6); g.add(ig);
    const bt = canvasTex(256, 128, (x, W, H) => { x.fillStyle = '#f4fbff'; x.fillRect(0, 0, W, H); x.strokeStyle = '#b8d4ee'; x.lineWidth = 3; for (let r = 0; r < 6; r++) { x.beginPath(); x.moveTo(0, r * H / 6); x.lineTo(W, r * H / 6); x.stroke(); for (let c = 0; c < 10; c++) { const xx = c * W / 10 + (r % 2) * W / 20; x.beginPath(); x.moveTo(xx, r * H / 6); x.lineTo(xx, (r + 1) * H / 6); x.stroke(); } } });
    ig.add(new THREE.Mesh(new THREE.SphereGeometry(2, 40, 20, 0, TAU, 0, Math.PI / 2), new THREE.MeshPhysicalMaterial({ map: bt, roughness: .5, sheen: .6 }))); ig.children[0].castShadow = true;
    const tun = new THREE.Mesh(new THREE.CylinderGeometry(.8, .8, 1.2, 24, 1, true, 0, Math.PI), new THREE.MeshPhysicalMaterial({ map: bt, roughness: .5, side: THREE.DoubleSide })); tun.rotation.set(Math.PI / 2, 0, Math.PI / 2); tun.position.set(0, 0, 2); ig.add(tun);
    const door = new THREE.Mesh(new THREE.CircleGeometry(.7, 24, 0, Math.PI), new THREE.MeshStandardMaterial({ color: '#000', emissive: '#ffb84a', emissiveIntensity: 1.2 })); door.position.set(0, 0, 2.55); ig.add(door); const dg = glowSprite('#ffb84a', 3, .7); dg.position.set(0, .4, 2.7); ig.add(dg);
    G.updaters.push((t, dt) => { for (let k = 0; k < 3; k++) if (Math.random() < .9) G.sparks.spawn({ x: rnd(-16, 16), y: rnd(9, 12), z: rnd(-14, 4), vy: -rnd(.8, 1.4), vx: rnd(-.2, .2), color: '#ffffff', size: rnd(.08, .16), life: 9, bright: .9 }); if (Math.random() < dt * 4) G.sparks.spawn({ x: rnd(-10, 10), y: .05, z: rnd(-10, 3), color: '#ffffff', size: rnd(.2, .35), life: .5, bright: 2 }); });
    return g;
  },
  amb: [[7, 12, () => G.props.slider()], [4, 8, shootingStar]],
  tapGround(p) { G.props.snowman(p); },
  tapSky(p) { G.sparks.burst(p.x, p.y, p.z, 40, ['#ffffff', '#cfefff'], 3.5); G.sfx.chime(); }
},
{
  id: 'dinos', name: 'VALE DOS DINOSSAUROS', short: 'Dinos', icon: '🦕', fname: 'Dino', fdesc: 'o dinossauro', kind: 'dino', face: '🦖', key: .84, disc: ['#9be37a', '#e0743a'], food: 'melon', foodN: 'melancias',
  hello: 'Roooar! Calma, é um rugido de amigo! Eu sou o Dino! Bem-vinda ao Vale dos Dinossauros!',
  lines: ['Roooar! Esse é o meu rugido fofinho!', 'Toque no chão para cair um ovinho!', 'O vulcão daqui só solta corações!', 'Tum! Tum! Tum! Olha eu pisando forte!'],
  skyLine: 'O sol daqui é bem quentinho e alaranjado!',
  env: { top: '#e85a6a', mid: '#ffa66b', bot: '#ffcf96', sun: [.35, .09, -1], sunCol: '#ffb070', sunSize: 3, stars: 0, nebula: 0, haze: .8, glow: 1, fog: ['#f0a07a', 45, 190], key: ['#ffc490', 2.6, [7, 6, 8]], hemi: ['#ffd6b0', '#2f4a24', .9], exposure: .95, bloom: .4 },
  build(w) {
    const g = new THREE.Group();
    g.add(terrain((x, z) => hills(8, .04, 31)(x, z) + smooth(40, 70, -z) * fbm2(x * .03, z * .03) * 18, (x, z, y, c) => mixc('#2f7a32', '#74b84a', fbm2(x * .12, z * .12) * 1.5 - .2, c).lerp(C2.set('#8a6a5a'), clamp((y - 6) / 10, 0, 1)), { rough: .95 }));
    g.add(grass(4500, [-15, 15, -20, 5], ['#3f8a34', '#56a63e', '#2f7a2e', '#6cb444'], .55));
    const vol = new THREE.Group(); vol.position.set(-4, 0, -62); g.add(vol);
    const vg = new THREE.LatheGeometry([[0.1, 18], [4, 17.6], [6, 16], [10, 9], [17, 2], [22, 0]].map(([r, y]) => new THREE.Vector2(r, y)), 64);
    const vm = new THREE.Mesh(vg, new THREE.MeshStandardMaterial({ color: '#7a5060', roughness: .95, flatShading: false })); vol.add(vm);
    const lava = new THREE.Mesh(new THREE.CircleGeometry(4, 32), new THREE.MeshStandardMaterial({ color: '#000', emissive: '#ff5a1f', emissiveIntensity: 3 })); lava.rotation.x = -Math.PI / 2; lava.position.y = 17.4; vol.add(lava);
    const lg = glowSprite('#ff7a3d', 26, .8); lg.position.y = 18; vol.add(lg);
    for (const a of [-.5, .4, 1.4]) { const c = new THREE.CatmullRomCurve3(Array.from({ length: 6 }, (_, i) => { const r = 4 + i * 2.6, y = 17.5 - i * 3.1; return new THREE.Vector3(Math.sin(a + i * .08) * r, y, Math.cos(a + i * .08) * r); })); const tb = new THREE.Mesh(new THREE.TubeGeometry(c, 40, .45, 8), new THREE.MeshStandardMaterial({ color: '#000', emissive: '#ff6a2a', emissiveIntensity: 2.4 })); vol.add(tb); }
    const smokeM = new THREE.SpriteMaterial({ map: G.glowTexture, color: '#e8dce8', transparent: true, opacity: .5, depthWrite: false });
    const smoke = Array.from({ length: 14 }, (_, i) => { const s = new THREE.Sprite(smokeM.clone()); s.userData.k = i / 14; vol.add(s); return s; });
    G.updaters.push((t, dt) => { lg.material.opacity = .65 + Math.sin(t * 3) * .15; smoke.forEach(s => { const k = (s.userData.k + t * .05) % 1; s.position.set(Math.sin(k * 6 + s.userData.k * 9) * 2 + k * 6, 18 + k * 22, 0); s.scale.setScalar(4 + k * 14); s.material.opacity = (1 - k) * .45 * Math.min(1, k * 8); }); });
    G.volcanoTop = new THREE.Vector3(-4, 19, -62);
    const palm = (x, z, s, lean) => { const p = new THREE.Group(); p.position.set(x, 0, z); p.scale.setScalar(s); const c = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(lean * .3, 2.5, 0), new THREE.Vector3(lean, 5, 0));
      const rt = canvasTex(32, 128, (x2, W, H) => { x2.fillStyle = '#9a6a3a'; x2.fillRect(0, 0, W, H); x2.fillStyle = '#6a4424'; for (let i = 0; i < 16; i++) x2.fillRect(0, i * 8, W, 2); }, [1, 4]);
      const tr = new THREE.Mesh(new THREE.TubeGeometry(c, 24, .22, 10), new THREE.MeshStandardMaterial({ map: rt, roughness: .9 })); tr.castShadow = true; p.add(tr);
      const top = new THREE.Group(); top.position.set(lean, 5, 0); p.add(top); const lm = M.plush('#3faa4a');
      for (let i = 0; i < 8; i++) { const lf = new THREE.Group(); lf.rotation.y = i / 8 * TAU; const leaf = sph(lm, 1, 1.4, -.3, 0, 1.5, .06, .3); leaf.rotation.z = -.45; lf.add(leaf); top.add(lf); }
      for (let i = 0; i < 3; i++) top.add(sph(M.plush('#6a4424'), .22, Math.cos(i * 2) * .25, -.25, Math.sin(i * 2) * .25));
      G.updaters.push(t => top.rotation.z = Math.sin(t * .9 + x) * .05); return p; };
    [[-8, -3, 1.1, -1], [9, -5, 1.3, 1.2], [-13, -12, 1.6, .8], [15, -14, 1.5, -1], [-4, -18, 1.8, .6]].forEach(a => g.add(palm(...a)));
    scatter(12, 14, (x, z) => { const f = new THREE.Group(); f.position.set(x, 0, z); const fm = M.plush('#2f8a3a'); for (let i = 0; i < 7; i++) { const l = sph(fm, .8, 0, .2, 0, .25, .05, 1); l.position.set(Math.cos(i) * .5, .3, Math.sin(i) * .5); l.rotation.set(-.5, -i, 0); f.add(l); } g.add(f); });
    const dinosFar = []; for (let i = 0; i < 2; i++) { const d = new THREE.Group(); const m = M.plush('#5a8a6a'); d.add(sph(m, 2, 0, 3, 0, 1.6, .9, .9)); const neck = new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(new THREE.Vector3(-2.5, 3.5, 0), new THREE.Vector3(-4, 6, 0), new THREE.Vector3(-4.5, 8, 0)), 12, .5, 8), m); d.add(neck); d.add(sph(m, .8, -4.7, 8.2, 0, 1.4, .8, .8)); for (const [a, b] of [[-1.5, .6], [1.5, .6], [-1.5, -.6], [1.5, -.6]]) d.add(cyl(m, .45, .45, 2.4, a, 1.2, b, 8)); d.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(new THREE.Vector3(3, 3, 0), new THREE.Vector3(6, 2, 0), new THREE.Vector3(8, .5, 0)), 12, .4, 8), m)); d.position.set(i ? 30 : -35, 0, -45 - i * 10); d.scale.setScalar(.9); d.userData.sp = i ? -.8 : .7; if (i) d.rotation.y = Math.PI; g.add(d); dinosFar.push(d); }
    G.updaters.push((t, dt) => dinosFar.forEach(d => { d.position.x += d.userData.sp * dt; if (Math.abs(d.position.x) > 60) d.userData.sp *= -1, d.rotation.y += Math.PI; d.position.y = Math.abs(Math.sin(t * 1.5)) * .2; }));
    const sunObj = new THREE.Mesh(new THREE.SphereGeometry(20, 12, 8), new THREE.MeshBasicMaterial({ visible: false })); sunObj.position.set(.35, .09, -1).normalize().multiplyScalar(300); g.add(skyBody(sunObj, w.skyLine));
    return g;
  },
  amb: [[5, 8, () => { const p = G.volcanoTop; for (let i = 0; i < 2; i++) G.props.floatHeart(p, 6); }]],
  tapGround(p) { G.props.egg(p); },
  tapSky(p) { G.props.egg(new THREE.Vector3(p.x, 0, clamp(p.z, -3, 2))); }
}
];
