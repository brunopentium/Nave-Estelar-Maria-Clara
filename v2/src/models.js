// Modelos 3D: nave com piloto, 8 amigos, objetos interativos
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { TAU, lerp, rnd, pick, glowSprite, canvasTex } from './engine.js';

export const RAINBOW = ['#ff4d5e', '#ff9a3c', '#ffe14d', '#4fe07a', '#4fb8ff', '#5a6bff', '#b46bff'];
const MC = new Map();
function cache(k, make) { let m = MC.get(k); if (!m) { m = make(); m.userData.shared = true; MC.set(k, m); } return m; }
const sheenOf = c => new THREE.Color(c).lerp(new THREE.Color('#ffffff'), .6);
export const M = {
  plush: c => cache('pl' + c, () => new THREE.MeshPhysicalMaterial({ color: c, roughness: .58, sheen: .9, sheenRoughness: .45, sheenColor: sheenOf(c) })),
  gloss: c => cache('gl' + c, () => new THREE.MeshPhysicalMaterial({ color: c, roughness: .15, clearcoat: 1, clearcoatRoughness: .05 })),
  metal: (c, r = .25) => cache('mt' + c + r, () => new THREE.MeshStandardMaterial({ color: c, metalness: 1, roughness: r })),
  matte: (c, r = .9) => cache('mm' + c + r, () => new THREE.MeshStandardMaterial({ color: c, roughness: r })),
  emis: (c, i = 2) => cache('em' + c + i, () => new THREE.MeshStandardMaterial({ color: '#000000', emissive: c, emissiveIntensity: i })),
  eye: () => cache('eye', () => new THREE.MeshPhysicalMaterial({ color: '#12132a', roughness: .04, clearcoat: 1, clearcoatRoughness: 0 })),
  gold: () => cache('gold', () => new THREE.MeshStandardMaterial({ color: '#ffcf4a', metalness: 1, roughness: .18, emissive: '#7a4a00', emissiveIntensity: .35 })),
  glass: () => cache('glass', () => new THREE.MeshPhysicalMaterial({ color: '#cfefff', roughness: .02, metalness: 0, transparent: true, opacity: .28, clearcoat: 1, envMapIntensity: 2.5, depthWrite: false }))
};
const shared = g => { g.userData.shared = true; return g; };
export const SPH = shared(new THREE.SphereGeometry(1, 40, 28));
const SPH_LO = shared(new THREE.SphereGeometry(1, 16, 12));
export function sph(mat, r, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, lo) { const m = new THREE.Mesh(lo ? SPH_LO : SPH, mat); m.scale.set(r * sx, r * sy, r * sz); m.position.set(x, y, z); m.castShadow = true; return m; }
export function cyl(mat, rt, rb, h, x = 0, y = 0, z = 0, seg = 24) { const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat); m.position.set(x, y, z); m.castShadow = true; return m; }
export function cone(mat, r, h, x = 0, y = 0, z = 0, seg = 24) { const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat); m.position.set(x, y, z); m.castShadow = true; return m; }
export function rbox(mat, w, h, d, r, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), mat); m.position.set(x, y, z); m.castShadow = true; return m; }
function hangGroup(x, y, z, children) { const g = new THREE.Group(); g.position.set(x, y, z); children.forEach(c => g.add(c)); return g; }

/* ---------- formas ---------- */
export function starShape(R, r) { const s = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5 + Math.PI / 2, d = i % 2 ? r : R, x = Math.cos(a) * d, y = Math.sin(a) * d; i ? s.lineTo(x, y) : s.moveTo(x, y); } s.closePath(); return s; }
function heartShape(k = 1) { const s = new THREE.Shape(); s.moveTo(0, -.45 * k); s.bezierCurveTo(-.95 * k, .1 * k, -.45 * k, .78 * k, 0, .32 * k); s.bezierCurveTo(.45 * k, .78 * k, .95 * k, .1 * k, 0, -.45 * k); return s; }
export const STAR_G = shared(new THREE.ExtrudeGeometry(starShape(.5, .23), { depth: .14, bevelEnabled: true, bevelThickness: .07, bevelSize: .06, bevelSegments: 3 }).center());
export const HEART_G = shared(new THREE.ExtrudeGeometry(heartShape(.55), { depth: .16, bevelEnabled: true, bevelThickness: .08, bevelSize: .07, bevelSegments: 3, curveSegments: 18 }).center());

/* ---------- rosto ---------- */
export function makeFace(parent, r, o = {}) {
  const ex = o.ex ?? .34, ey = o.ey ?? .14, er = o.er ?? .17, my = o.my ?? -.24;
  const zOn = (x, y) => o.flat ? o.flat : Math.sqrt(Math.max(0, 1 - x * x - y * y)) * r;
  const eyes = [];
  for (const s of [-1, 1]) {
    const g = new THREE.Group(); g.position.set(s * ex * r, ey * r, zOn(ex, ey) * .97);
    if (!o.flat) { g.rotation.y = s * Math.asin(ex) * .9; g.rotation.x = -Math.asin(ey) * .9; }
    const e = sph(M.eye(), r * er, 0, 0, 0, 1, 1.28, .5);
    const h1 = sph(M.emis('#ffffff', 2.5), r * er * .32, -r * er * .3, r * er * .45, r * er * .42, 1, 1, 1, true); h1.castShadow = false;
    const h2 = sph(M.emis('#ffffff', 2.5), r * er * .15, r * er * .3, -r * er * .4, r * er * .44, 1, 1, 1, true); h2.castShadow = false;
    g.add(e, h1, h2); parent.add(g); eyes.push(g);
    const ck = sph(M.plush('#ff8fb0'), r * .12, s * r * (ex + .25), (ey - .3) * r, zOn(ex + .25, ey - .3) * .95, 1, .6, .3, true);
    ck.rotation.y = s * .7; parent.add(ck);
  }
  const mz = o.mz ?? zOn(0, my) * .99, myy = o.myAbs ?? my * r;
  const smile = new THREE.Mesh(new THREE.TorusGeometry(r * .12, r * .026, 8, 20, Math.PI), M.matte('#4a1a38', .6));
  smile.rotation.z = Math.PI; smile.position.set(0, myy + r * .06, mz); if (!o.flat) smile.rotation.x = -.25; parent.add(smile);
  const open = sph(M.gloss('#7a1f3f'), r * .11, 0, myy, mz, 1, .85, .45); open.visible = false; open.userData.sy = open.scale.y; parent.add(open);
  const tongue = new THREE.Mesh(SPH_LO, M.plush('#ff7d9c')); tongue.scale.set(.6, .35, .5); tongue.position.set(0, -.45, .45); open.add(tongue);
  return { eyes, smile, open };
}

/* ---------- amigos ---------- */
const BUILD = {
  robot(F) {
    const b = F.bod; const body = rbox(M.gloss('#7ddbeb'), .95, .85, .7, .2, 0, .78, 0); b.add(body);
    for (const s of [-1, 1]) b.add(rbox(M.metal('#5b74c4', .35), .26, .42, .3, .1, s * .22, .2, 0));
    const hm = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#ff4fa0', emissiveIntensity: 1.5 });
    const heart = new THREE.Mesh(HEART_G, hm); heart.scale.setScalar(.38); heart.position.set(0, .8, .37); b.add(heart);
    const head = new THREE.Group(); head.position.set(0, 1.6, 0); b.add(head); F.head = head;
    head.add(rbox(M.gloss('#b5f7ef'), 1.15, .95, .85, .26));
    head.add(rbox(M.gloss('#18224a'), .95, .7, .08, .12, 0, 0, .41));
    const ce = M.emis('#7ef9ff', 3);
    for (const s of [-1, 1]) { const e = new THREE.Group(); e.position.set(s * .2, .08, .46); e.add(rbox(ce, .15, .24, .04, .06)); head.add(e); F.eyes.push(e); head.add(rbox(M.emis('#ff7aa8', 1.5), .1, .05, .03, .02, s * .33, -.1, .46)); }
    const sm = new THREE.Mesh(new THREE.TorusGeometry(.11, .022, 8, 20, Math.PI), ce); sm.rotation.z = Math.PI; sm.position.set(0, -.1, .46); head.add(sm); F.smile = sm;
    const op = rbox(ce, .22, .08, .03, .03, 0, -.16, .46); op.visible = false; op.userData.sy = 1; head.add(op); F.open = op;
    head.add(cyl(M.metal('#dfe9ff', .3), .03, .03, .3, 0, .62, 0));
    const bulbM = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#ffe36b', emissiveIntensity: 3 }); head.add(sph(bulbM, .09, 0, .82, 0));
    const gl = glowSprite('#ffe36b', .7, .8); gl.position.set(0, .82, 0); head.add(gl);
    const arm = s => { const g = new THREE.Group(); g.position.set(s * .56, 1.05, 0); const a = cyl(M.metal('#8fd8ef', .3), .07, .07, .42, 0, -.21, 0); g.add(a, sph(M.gloss('#d6f3ff'), .11, 0, -.45, 0)); g.userData.dir = s; b.add(g); return g; };
    F.armL = arm(-1); F.armR = arm(1); F.headR = .5;
    F.upd = (t) => { hm.emissive.setHSL((t * .15) % 1, .9, .6); bulbM.emissiveIntensity = 2 + Math.sin(t * 5) * 1.5; gl.material.opacity = .5 + Math.sin(t * 5) * .3; };
  },
  bunny(F) {
    const b = F.bod, W = M.plush('#f7f4ff'), P = M.plush('#ffc4dc');
    b.add(sph(W, .46, 0, .56, 0, 1, 1.08, .95), sph(M.plush('#ffe9f2'), .3, 0, .52, .25, 1, 1.15, .55), sph(W, .13, 0, .45, -.44, 1, 1, 1, true));
    for (const s of [-1, 1]) b.add(sph(W, .17, s * .22, .08, .14, 1, .55, 1.4));
    const head = new THREE.Group(); head.position.set(0, 1.32, 0); b.add(head); F.head = head;
    head.add(sph(W, .46)); Object.assign(F, makeFace(head, .46, { my: -.3 })); head.add(sph(M.gloss('#ff8fb6'), .055, 0, -.07, .45));
    F.ears = [];
    for (const s of [-1, 1]) { const g = new THREE.Group(); g.position.set(s * .17, .36, -.03); g.rotation.z = -s * .18; g.add(sph(W, .13, 0, .42, 0, 1, 3.3, .65), sph(P, .08, 0, .42, .06, 1, 3, .35)); head.add(g); F.ears.push(g); }
    const bw = M.gloss('#ff5fa2'); for (const s of [-1, 1]) { const c = cone(bw, .07, .16, .17 + s * .09, .42, .05); c.rotation.z = s * Math.PI / 2; head.add(c); } head.add(sph(bw, .045, .17, .42, .05));
    const arm = s => { const g = new THREE.Group(); g.position.set(s * .38, .82, .08); g.add(sph(W, .1, 0, -.14, 0, 1, 1.8, 1)); g.userData.dir = s; b.add(g); return g; };
    F.armL = arm(-1); F.armR = arm(1);
    F.upd = t => F.ears.forEach((e, i) => e.rotation.z = (i ? -1 : 1) * (.18 + Math.sin(t * 3 + i) * .08));
  },
  puppy(F) {
    const b = F.bod, T = M.plush('#eebc86'), C = M.plush('#fff0d6'), Br = M.plush('#8f5e48');
    b.add(sph(T, .47, 0, .56, 0, 1, 1.06, .95), sph(C, .3, 0, .52, .25, 1, 1.15, .55));
    for (const s of [-1, 1]) b.add(sph(T, .17, s * .22, .08, .14, 1, .55, 1.4));
    const tail = new THREE.Group(); tail.position.set(0, .6, -.42); const tc = cyl(T, .05, .07, .35, 0, .16, 0); tail.add(tc); tail.rotation.x = -.6; b.add(tail);
    const col = new THREE.Mesh(new THREE.TorusGeometry(.3, .055, 12, 36), M.gloss('#ff3f6e')); col.rotation.x = Math.PI / 2; col.position.y = .98; b.add(col); b.add(sph(M.gold(), .065, 0, .92, .33));
    const head = new THREE.Group(); head.position.set(0, 1.4, 0); b.add(head); F.head = head; head.add(sph(T, .5));
    head.add(sph(C, .22, 0, -.14, .38, 1.25, .85, .9));
    Object.assign(F, makeFace(head, .5, { ey: .2, my: -.3, mz: .55, myAbs: -.27 }));
    head.add(sph(M.gloss('#2a1a24'), .075, 0, -.05, .58, 1.2, .9, .9));
    F.ears = [];
    for (const s of [-1, 1]) { const g = new THREE.Group(); g.position.set(s * .38, .3, 0); g.add(sph(Br, .16, s * .04, -.24, 0, .78, 1.9, .5)); head.add(g); F.ears.push(g); }
    const ht = canvasTex(64, 128, (x, w, h) => { for (let i = 0; i < 6; i++) { x.fillStyle = i % 2 ? '#ffe36b' : '#6fc8ff'; x.fillRect(0, i * h / 6, w, h / 6); } });
    const hat = cone(new THREE.MeshPhysicalMaterial({ map: ht, roughness: .4, clearcoat: .6 }), .17, .42, .12, .62, 0); hat.rotation.z = -.28; head.add(hat); head.add(sph(M.plush('#ff5fa2'), .065, .18, .83, 0));
    const arm = s => { const g = new THREE.Group(); g.position.set(s * .38, .82, .08); g.add(sph(T, .1, 0, -.14, 0, 1, 1.8, 1)); g.userData.dir = s; b.add(g); return g; };
    F.armL = arm(-1); F.armR = arm(1);
    F.upd = (t, s) => { tail.rotation.z = Math.sin(t * 14) * .6; F.ears.forEach((e, i) => e.rotation.z = (i ? -1 : 1) * (.15 + Math.sin(t * 4) * .1 + (s.dance ? Math.sin(t * 9) * .25 : 0))); };
  },
  starfish(F) {
    const b = F.bod; const st = new THREE.Group(); st.position.set(0, .86, 0); b.add(st); F.head = st;
    const shp = new THREE.Shape(); const N = 60; for (let i = 0; i <= N; i++) { const a = i / N * TAU + Math.PI / 2; const k = Math.pow(Math.abs(Math.cos(a * 2.5 - Math.PI * 1.25)), 2.2); const d = .42 + .48 * k; const x = Math.cos(a) * d, y = Math.sin(a) * d; i ? shp.lineTo(x, y) : shp.moveTo(x, y); }
    const g = new THREE.ExtrudeGeometry(shp, { depth: .2, bevelEnabled: true, bevelThickness: .16, bevelSize: .12, bevelSegments: 5, curveSegments: 6 }); g.center();
    const sm = new THREE.MeshPhysicalMaterial({ color: '#ffcf63', roughness: .55, sheen: 1, sheenColor: new THREE.Color('#ffe9b0'), sheenRoughness: .4 });
    st.add(new THREE.Mesh(g, sm)); st.children[0].castShadow = true;
    const sp = M.plush('#ff9fa0'); [[-.5, -.1], [.5, -.08], [-.3, -.55], [.3, -.55], [0, .55], [-.2, .2], [.25, .25]].forEach(([x, y]) => st.add(sph(sp, .045, x, y, .27, 1, 1, .4, true)));
    Object.assign(F, makeFace(st, .5, { flat: .27, ey: .15, my: -.22, er: .2 }));
    const bw = M.gloss('#ff5fa2'); for (const s of [-1, 1]) { const c = cone(bw, .07, .15, .22 + s * .08, .5, .2); c.rotation.z = s * Math.PI / 2; st.add(c); }
    F.upd = (t, s) => { st.rotation.z = Math.sin(t * 1.6) * .07 + (s.wave ? Math.sin(t * 10) * .15 : 0); };
  },
  bee(F) {
    const b = F.bod;
    const stripe = canvasTex(64, 256, (x, w, h) => { x.fillStyle = '#ffd23f'; x.fillRect(0, 0, w, h); x.fillStyle = '#2d2018'; [.36, .54, .72].forEach(v => x.fillRect(0, v * h, w, h * .09)); });
    const bm = new THREE.MeshPhysicalMaterial({ map: stripe, roughness: .55, sheen: .8, sheenColor: new THREE.Color('#fff2b0') });
    const hov = new THREE.Group(); b.add(hov);
    const body = sph(bm, .42, 0, .72, 0, 1, 1.05, .95); body.rotation.x = .25; hov.add(body);
    hov.add(cone(M.gloss('#2d2018'), .07, .16, 0, .26, -.08)); hov.children[1].rotation.x = Math.PI;
    const head = new THREE.Group(); head.position.set(0, 1.42, .05); hov.add(head); F.head = head;
    head.add(sph(M.plush('#ffdf5a'), .42)); Object.assign(F, makeFace(head, .42, { my: -.3 }));
    for (const s of [-1, 1]) { const c = new THREE.QuadraticBezierCurve3(new THREE.Vector3(s * .12, .36, 0), new THREE.Vector3(s * .18, .62, .08), new THREE.Vector3(s * .32, .7, .12)); const tb = new THREE.Mesh(new THREE.TubeGeometry(c, 12, .022, 6), M.matte('#2d2018', .6)); head.add(tb); head.add(sph(M.gloss('#ff6fae'), .07, s * .32, .7, .12)); }
    const wm = new THREE.MeshPhysicalMaterial({ color: '#e8f6ff', transparent: true, opacity: .55, roughness: .1, iridescence: 1, iridescenceIOR: 1.6, side: THREE.DoubleSide, depthWrite: false });
    F.wings = [];
    for (const s of [-1, 1]) { const g = new THREE.Group(); g.position.set(s * .25, 1.0, -.25); const w = new THREE.Mesh(new THREE.CircleGeometry(.4, 32), wm); w.scale.set(1, .6, 1); w.position.x = s * .36; w.rotation.y = s * .4; g.add(w); hov.add(g); F.wings.push(g); }
    const arm = s => { const g = new THREE.Group(); g.position.set(s * .36, .95, .12); g.add(sph(M.gloss('#2d2018'), .07, 0, -.13, 0, 1, 1.9, 1)); g.userData.dir = s; hov.add(g); return g; };
    F.armL = arm(-1); F.armR = arm(1);
    F.upd = t => { hov.position.y = .22 + Math.sin(t * 3) * .07; F.wings.forEach((w, i) => w.rotation.z = (i ? -1 : 1) * (.25 + Math.sin(t * 38) * .5)); };
  },
  unicorn(F) {
    const b = F.bod, W = M.plush('#f6f0ff'), Pk = M.plush('#ffd9ec');
    b.add(sph(W, .45, 0, .66, -.05, 1.12, .9, 1));
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { b.add(cyl(W, .085, .085, .42, sx * .22, .24, sz * .16 - .05)); b.add(cyl(M.gloss('#b48cff'), .1, .1, .09, sx * .22, .045, sz * .16 - .05)); }
    for (let i = 0; i < 6; i++) b.add(sph(M.plush(RAINBOW[i]), .1 - i * .008, 0, .75 - i * .07, -.55 - i * .05, 1, 1, 1, true));
    const head = new THREE.Group(); head.position.set(0, 1.38, .05); b.add(head); F.head = head;
    head.add(sph(W, .46)); head.add(sph(Pk, .21, 0, -.2, .36, 1.25, .85, .95));
    Object.assign(F, makeFace(head, .46, { ey: .16, my: -.3, mz: .53, myAbs: -.3 }));
    for (const s of [-1, 1]) { const e = cone(W, .09, .22, s * .26, .4, -.04); e.rotation.z = -s * .35; head.add(e); head.add(sph(M.matte('#d483ad', .6), .025, s * .09, -.18, .55, 1, 1.3, 1, true)); }
    const horn = cone(M.gold(), .075, .5, 0, .62, .14, 32); horn.rotation.x = .3; head.add(horn);
    const hg = glowSprite('#fff3b0', .9, .7); hg.position.set(0, .88, .21); head.add(hg);
    [[0, .46, -.06], [-.18, .4, -.2], [-.3, .25, -.3], [-.35, .05, -.32], [-.33, -.15, -.3], [.12, .44, .04], [.22, .38, -.12]].forEach(([x, y, z], i) => head.add(sph(M.plush(RAINBOW[i % 7]), .13, x, y, z, 1, 1, 1, true)));
    const arm = s => { const g = new THREE.Group(); g.position.set(s * .3, .8, .2); g.add(sph(W, .09, 0, -.12, 0, 1, 1.6, 1)); g.userData.dir = s; b.add(g); return g; };
    F.armL = arm(-1); F.armR = arm(1);
    F.upd = t => { hg.material.opacity = .5 + Math.sin(t * 4) * .3; };
  },
  penguin(F) {
    const b = F.bod, N = M.plush('#26304d'), Wh = M.plush('#f6fbff'), O = M.gloss('#ff9f2e');
    b.add(sph(N, .52, 0, .8, 0, 1, 1.45, .95), sph(Wh, .4, 0, .72, .2, 1, 1.32, .66));
    for (const s of [-1, 1]) b.add(sph(O, .16, s * .18, .05, .2, 1, .45, 1.5));
    const head = new THREE.Group(); head.position.set(0, 1.26, 0); b.add(head); F.head = head;
    for (const s of [-1, 1]) head.add(sph(Wh, .2, s * .15, .04, .34, 1, 1.1, .6));
    Object.assign(F, makeFace(head, .44, { ey: .1, my: -.33, er: .19 }));
    const bk = cone(O, .08, .2, 0, -.08, .5); bk.rotation.x = Math.PI / 2; head.add(bk);
    const sc = new THREE.Mesh(new THREE.TorusGeometry(.4, .075, 12, 36), M.plush('#ff4f6a')); sc.rotation.x = Math.PI / 2; sc.position.y = 1.04; sc.scale.set(1, 1, 1); b.add(sc);
    const tailS = rbox(M.plush('#ff4f6a'), .14, .38, .06, .03, .2, .86, .38); tailS.rotation.z = .15; b.add(tailS);
    const bean = new THREE.Mesh(new THREE.SphereGeometry(.37, 32, 16, 0, TAU, 0, Math.PI / 2), M.plush('#4aa8ff')); bean.position.y = .24; bean.castShadow = true; head.add(bean);
    const band = new THREE.Mesh(new THREE.TorusGeometry(.37, .06, 10, 36), M.plush('#ffffff')); band.rotation.x = Math.PI / 2; band.position.y = .25; head.add(band); head.add(sph(Wh, .1, 0, .63, 0));
    const arm = s => { const g = new THREE.Group(); g.position.set(s * .48, 1.05, 0); g.add(sph(N, .12, 0, -.28, 0, .55, 2.5, 1)); g.userData.dir = s; b.add(g); return g; };
    F.armL = arm(-1); F.armR = arm(1);
  },
  dino(F) {
    const b = F.bod, Gm = M.plush('#6fd17f'), Bl = M.plush('#dcf7b8'), Or = M.gloss('#ffb347');
    b.add(sph(Gm, .5, 0, .64, 0, 1, 1.1, 1), sph(Bl, .34, 0, .6, .26, 1, 1.2, .6));
    const tail = new THREE.Group(); tail.position.set(0, .5, -.35); b.add(tail);
    [[0, 0, 0, .3], [-.05, -.08, -.3, .24], [-.1, -.14, -.56, .18], [-.12, -.17, -.78, .12]].forEach(([x, y, z, r]) => tail.add(sph(Gm, r, x, y, z)));
    [[0, 1.05, -.28], [0, .82, -.46], [0, .55, -.52], [-.05, .38, -.82]].forEach(([x, y, z], i) => { const c = cone(Or, .09 - i * .01, .22, x, y, z); c.rotation.x = -.7; b.add(c); });
    for (const s of [-1, 1]) b.add(sph(Gm, .18, s * .23, .08, .14, 1, .55, 1.4));
    const head = new THREE.Group(); head.position.set(0, 1.45, .05); b.add(head); F.head = head;
    head.add(sph(Gm, .48, 0, 0, 0, 1.05, .95, 1)); head.add(sph(Gm, .3, 0, -.14, .3, 1.1, .8, 1));
    [[-.22, .43, -.12], [0, .48, -.1], [.22, .43, -.12]].forEach(([x, y, z]) => head.add(cone(Or, .08, .2, x, y, z)));
    Object.assign(F, makeFace(head, .48, { ey: .22, my: -.3, mz: .55, myAbs: -.25 }));
    for (const s of [-1, 1]) head.add(sph(M.matte('#2f7a45', .7), .025, s * .07, -.1, .57, 1, 1, 1, true));
    const arm = s => { const g = new THREE.Group(); g.position.set(s * .42, .88, .15); g.add(sph(Gm, .09, 0, -.12, 0, 1, 1.7, 1)); g.userData.dir = s; b.add(g); return g; };
    F.armL = arm(-1); F.armR = arm(1);
    F.upd = t => { tail.rotation.y = Math.sin(t * 2.5) * .35; };
  }
};
export function makeFriend(kind) {
  const root = new THREE.Group(), bod = new THREE.Group(); root.add(bod);
  const F = { kind, root, bod, head: null, eyes: [], smile: null, open: null, armL: null, armR: null };
  BUILD[kind](F);
  root.traverse(c => { if (c.isMesh && !c.material.transparent) c.castShadow = true; });
  const hit = new THREE.Mesh(new THREE.CylinderGeometry(.75, .75, 2.3, 8), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = 1.1; root.add(hit); F.hit = hit;
  return F;
}
const BPM = 118;
export function animateFriend(F, t, s) {
  F.eyes.forEach(e => { e.scale.y = s.blink ? .12 : (s.joy ? .5 : 1); });
  const talking = s.talk > .05 || s.eat > 0 || s.joy;
  if (F.smile) { F.smile.visible = !talking; F.open.visible = talking; if (talking) F.open.scale.y = F.open.userData.sy * (.35 + (s.eat > 0 ? Math.abs(Math.sin(t * 25)) : s.joy ? .8 : s.talk) * 1.0); }
  if (F.head) { F.head.rotation.y = lerp(F.head.rotation.y, s.lx * .5, .12); F.head.rotation.x = lerp(F.head.rotation.x, -s.ly * .3, .12); }
  const beat = Math.sin(t * Math.PI * BPM / 60);
  if (F.armR) { const tg = s.wave ? 2.6 + Math.sin(t * 12) * .35 : s.dance ? 1.2 + beat * .9 : .15 + Math.sin(t * 1.5) * .05; F.armR.rotation.z = lerp(F.armR.rotation.z, tg, .2); }
  if (F.armL) { const tg = s.dance ? -1.2 + beat * .9 : -.15 - Math.sin(t * 1.5) * .05; F.armL.rotation.z = lerp(F.armL.rotation.z, tg, .2); }
  F.root.position.y = s.jumpY + Math.abs(beat) * .2 * s.dance;
  F.root.rotation.z = beat * .12 * s.dance;
  const br = Math.sin(t * 2.2) * .015;
  F.bod.scale.set(1 + s.squash * .45 - br * .5, 1 - s.squash * .45 + br, 1 + s.squash * .45 - br * .5);
  if (F.upd) F.upd(t, s);
}

/* ---------- nave ---------- */
export const PALS = [
  { n: 'BRANCA E ROSA', body: '#f4f7ff', wing: '#ff5fa2', acc: '#5fd0ff' }, { n: 'AZUL', body: '#3d7dff', wing: '#bfe0ff', acc: '#ffe14d' },
  { n: 'VERDE', body: '#22c06b', wing: '#d9ffe9', acc: '#ffe14d' }, { n: 'AMARELA', body: '#ffc61f', wing: '#ff6f3c', acc: '#5a6bff' },
  { n: 'ROXA', body: '#8a55ff', wing: '#ffd0f5', acc: '#7ef9ff' }, { n: 'LARANJA', body: '#ff7a1f', wing: '#fff1d6', acc: '#3dd9ff' },
  { n: 'VERMELHA', body: '#ff2f48', wing: '#ffffff', acc: '#ffe14d' }, { n: 'COR-DE-ROSA', body: '#ff6fbf', wing: '#fff0fa', acc: '#7a5cff' },
  { n: 'DOURADA', body: '#e8b23a', wing: '#fff7d6', acc: '#ff4f9a', metal: true }
];
export function makeShip() {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const paint = new THREE.MeshPhysicalMaterial({ color: '#f4f7ff', metalness: .25, roughness: .22, clearcoat: 1, clearcoatRoughness: .04 });
  const wingM = new THREE.MeshPhysicalMaterial({ color: '#ff5fa2', metalness: .3, roughness: .25, clearcoat: 1, clearcoatRoughness: .05 });
  const accM = new THREE.MeshPhysicalMaterial({ color: '#5fd0ff', metalness: .4, roughness: .2, clearcoat: 1 });
  const prof = [[0, -1.35], [.4, -1.32], [.56, -1.05], [.64, -.5], [.63, .1], [.56, .6], [.44, 1.0], [.26, 1.35], [.08, 1.55], [0, 1.6]];
  const curve = new THREE.SplineCurve(prof.map(([r, y]) => new THREE.Vector2(r, y))); const pts = curve.getPoints(40); pts[0].x = 0; pts[pts.length - 1].x = 0;
  const fg = new THREE.LatheGeometry(pts, 64); fg.rotateZ(-Math.PI / 2); fg.scale(1, .92, 1);
  const fus = new THREE.Mesh(fg, paint); body.add(fus);
  for (const x of [.7, -.85]) { const r = new THREE.Mesh(new THREE.TorusGeometry(x > 0 ? .565 : .6, .045, 12, 64), accM); r.rotation.y = Math.PI / 2; r.position.x = x; r.scale.set(1, .92, 1); body.add(r); }
  const ws = new THREE.Shape(); ws.moveTo(.55, 0); ws.lineTo(-.55, 0); ws.quadraticCurveTo(-1.0, .6, -1.25, 1.35); ws.lineTo(-.85, 1.42); ws.quadraticCurveTo(-.2, .7, .55, 0);
  const wg = new THREE.ExtrudeGeometry(ws, { depth: .07, bevelEnabled: true, bevelThickness: .035, bevelSize: .04, bevelSegments: 3 }); wg.rotateX(Math.PI / 2);
  for (const s of [-1, 1]) { const w = new THREE.Mesh(wg, wingM); w.position.set(-.15, -.18, s * .35); if (s < 0) w.scale.z = -1; body.add(w); }
  const fs = new THREE.Shape(); fs.moveTo(-.45, 0); fs.lineTo(-1.25, .95); fs.lineTo(-.95, 1.0); fs.quadraticCurveTo(-.5, .45, .1, .2); fs.lineTo(-.45, 0);
  const fin = new THREE.Mesh(new THREE.ExtrudeGeometry(fs, { depth: .06, bevelEnabled: true, bevelThickness: .03, bevelSize: .03, bevelSegments: 2 }), wingM); fin.position.set(-.1, .3, -.03); body.add(fin);
  const noz = new THREE.Mesh(new THREE.CylinderGeometry(.3, .4, .38, 40, 1, true), M.metal('#5a6070', .3)); noz.material.side = THREE.DoubleSide; noz.rotation.z = Math.PI / 2; noz.position.x = -1.45; body.add(noz);
  const core = new THREE.Mesh(new THREE.CircleGeometry(.3, 32), new THREE.MeshStandardMaterial({ color: '#000', emissive: '#ffb36b', emissiveIntensity: 4 })); core.rotation.y = -Math.PI / 2; core.position.x = -1.4; body.add(core);
  const flameMat = (c1, c2) => new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { t: { value: 0 }, c1: { value: new THREE.Color(c1) }, c2: { value: new THREE.Color(c2) }, amp: { value: 1 } },
    vertexShader: `varying vec2 vUv; uniform float t; void main(){ vUv=uv; vec3 p=position; p.xz*=1.+.12*sin(t*40.+position.y*9.); gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }`,
    fragmentShader: `varying vec2 vUv; uniform vec3 c1,c2; uniform float t,amp; void main(){ float k=vUv.y; float n=.75+.25*sin(t*50.+vUv.x*30.); vec3 c=mix(c2,c1,k); float a=pow(k,1.3)*n*amp; gl_FragColor=vec4(c*3.*a,a); }` });
  const flame = new THREE.Mesh(new THREE.ConeGeometry(.3, 1.6, 32, 1, true), flameMat('#fff6c0', '#ff5a1f')); flame.rotation.z = Math.PI / 2; flame.position.x = -2.4; body.add(flame);
  const flame2 = new THREE.Mesh(new THREE.ConeGeometry(.16, 1.0, 24, 1, true), flameMat('#ffffff', '#7ad7ff')); flame2.rotation.z = Math.PI / 2; flame2.position.x = -2.05; body.add(flame2);
  const fl = new THREE.PointLight('#ff8a3c', 6, 6, 2); fl.position.x = -2; body.add(fl);
  const navR = sph(M.emis('#ff3050', 4), .06, -1.4, -.2, -1.75, 1, 1, 1, true), navG = sph(M.emis('#30ff8a', 4), .06, -1.4, -.2, 1.75, 1, 1, 1, true), bea = sph(M.emis('#ffffff', 5), .05, -1.3, 1.32, 0, 1, 1, 1, true);
  body.add(navR, navG, bea); const navGl = [navR, navG, bea].map(n => { const s = glowSprite(n === navR ? '#ff3050' : n === navG ? '#30ff8a' : '#ffffff', .6, .9); s.position.copy(n.position); body.add(s); return s; });
  // cabine + piloto
  const pilot = new THREE.Group(); pilot.position.set(.42, .42, 0); pilot.rotation.y = .5; body.add(pilot);
  const skin = M.plush('#f6c7a2'), hair = M.plush('#5e3a31');
  pilot.add(sph(skin, .21, 0, .05, 0));
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(.232, 32, 16, 0, TAU, 0, Math.PI * .5), hair); hairCap.rotation.x = -.55; hairCap.position.set(0, .07, -.02); pilot.add(hairCap);
  pilot.add(sph(hair, .225, 0, .02, -.04, 1, 1, .95)); for (const s of [-1, 1]) { pilot.add(sph(hair, .1, s * .22, .14, -.04)); const bw = M.gloss('#ff4f9a'); for (const q of [-1, 1]) { const c = cone(bw, .045, .1, s * .22 + q * .055, .26, -.02); c.rotation.z = q * Math.PI / 2; pilot.add(c); } pilot.add(sph(bw, .03, s * .22, .26, -.02, 1, 1, 1, true)); }
  const pf = makeFace(pilot, .21, { ey: .05, my: -.32, er: .15 });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(.5, 48, 24, 0, TAU, 0, Math.PI / 2), M.glass()); dome.scale.set(1.15, 1, 1); dome.position.set(.38, .3, 0); dome.renderOrder = 3; body.add(dome);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(.5, .04, 12, 48), M.metal('#d9e2ff', .2)); rim.rotation.x = Math.PI / 2; rim.scale.set(1.15, 1, 1); rim.position.set(.38, .3, 0); body.add(rim);
  // nível 2: aletas e faixa de luz
  const lv2 = new THREE.Group(); body.add(lv2);
  const stripM = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#7ef9ff', emissiveIntensity: 3 });
  const strip = new THREE.Mesh(new THREE.TorusGeometry(.62, .025, 8, 64), stripM); strip.rotation.y = Math.PI / 2; strip.position.x = -.25; strip.scale.set(1, .92, 1); lv2.add(strip);
  for (const s of [-1, 1]) { const f2 = new THREE.Mesh(new THREE.ExtrudeGeometry(fs, { depth: .05, bevelEnabled: true, bevelThickness: .02, bevelSize: .02 }), wingM); f2.scale.setScalar(.45); f2.position.set(-.6, -.15, s * 1.55); lv2.add(f2); }
  // nível 4: coroa
  const crown = new THREE.Group(); crown.position.set(.38, .82, 0); body.add(crown);
  crown.add(new THREE.Mesh(new THREE.CylinderGeometry(.2, .22, .1, 32, 1, true), M.gold())); crown.children[0].material.side = THREE.DoubleSide;
  for (let i = 0; i < 5; i++) { const a = i / 5 * TAU; crown.add(cone(M.gold(), .05, .16, Math.cos(a) * .2, .12, Math.sin(a) * .2)); crown.add(sph(M.gloss(RAINBOW[i]), .028, Math.cos(a) * .215, .02, Math.sin(a) * .215, 1, 1, 1, true)); }
  // nível 5: estrelinha amiga e aura
  const buddy = new THREE.Mesh(STAR_G, new THREE.MeshStandardMaterial({ color: '#ffd54a', metalness: .6, roughness: .2, emissive: '#ffb000', emissiveIntensity: 1.2 })); buddy.scale.setScalar(.45); root.add(buddy);
  const bglow = glowSprite('#ffe9a0', 1.2, .9); root.add(bglow);
  const aura = glowSprite('#ffe9b0', 6, .35); aura.position.x = -.2; root.add(aura);
  const hit = new THREE.Mesh(new THREE.SphereGeometry(1.7, 8, 6), new THREE.MeshBasicMaterial({ visible: false })); hit.scale.set(1.3, .8, .9); root.add(hit);
  body.traverse(c => { if (c.isMesh && !c.material.transparent && !(c.material instanceof THREE.ShaderMaterial)) c.castShadow = true; });
  body.rotation.y = -.42;
  const S = { root, body, paint, wingM, accM, flame, flame2, fl, pilot: pf, hit, level: 1,
    setPaint(p) { paint.color.set(p.body); paint.metalness = p.metal ? .85 : .25; paint.roughness = p.metal ? .2 : .22; wingM.color.set(p.wing); accM.color.set(p.acc); },
    setLevel(L) { this.level = L; lv2.visible = L >= 2; crown.visible = L >= 4; buddy.visible = bglow.visible = aura.visible = L >= 5; },
    upd(t, turbo, happy) {
      const amp = 1 + turbo * 1.6; flame.material.uniforms.t.value = t; flame2.material.uniforms.t.value = t;
      flame.scale.set(1, amp * (1 + Math.sin(t * 45) * .06), 1); flame.position.x = -1.6 - .8 * amp; flame2.scale.set(1, amp, 1); flame2.position.x = -1.55 - .5 * amp;
      fl.intensity = 5 + Math.sin(t * 40) * 1.5 + turbo * 8;
      const bl = Math.sin(t * 4) > .2; navGl[0].visible = navGl[1].visible = bl; navGl[2].visible = Math.sin(t * 6) > .6;
      stripM.emissive.setHSL((t * .25) % 1, .9, .6);
      pf.eyes.forEach(e => e.scale.y = (t % 3.7) < .13 ? .12 : 1);
      pf.smile.visible = !happy; pf.open.visible = happy; if (happy) pf.open.scale.y = pf.open.userData.sy * .9;
      const a = t * 2.2; buddy.position.set(Math.cos(a) * 2.4, .4 + Math.sin(a * 2) * .3, Math.sin(a) * 1.4); buddy.rotation.set(t, t * 1.5, 0); bglow.position.copy(buddy.position);
      aura.material.opacity = .25 + Math.sin(t * 3) * .1;
    }
  };
  S.setLevel(1); return S;
}

/* ---------- rastro arco-íris ---------- */
export class Trail {
  constructor(N = 40) {
    this.N = N; this.pts = []; const g = new THREE.BufferGeometry(); const B = 7;
    this.pos = new Float32Array(B * N * 2 * 3); this.col = new Float32Array(B * N * 2 * 3); const idx = [];
    for (let b = 0; b < B; b++) for (let k = 0; k < N - 1; k++) { const o = b * N * 2 + k * 2; idx.push(o, o + 1, o + 2, o + 1, o + 3, o + 2); }
    g.setIndex(idx); g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false; this.geo = g; this.cols = RAINBOW.map(c => new THREE.Color(c));
  }
  push(p) { this.pts.unshift(p.clone()); if (this.pts.length > this.N) this.pts.pop(); }
  update(visible) {
    this.mesh.visible = visible && this.pts.length > 2; if (!this.mesh.visible) return; const N = this.N, w = .085;
    for (let b = 0; b < 7; b++) for (let k = 0; k < N; k++) {
      const p = this.pts[Math.min(k, this.pts.length - 1)], o = (b * N * 2 + k * 2) * 3, off = (b - 3) * w * 1.05 + Math.sin(k * .35) * .05;
      this.pos[o] = p.x; this.pos[o + 1] = p.y + off - w / 2; this.pos[o + 2] = p.z; this.pos[o + 3] = p.x; this.pos[o + 4] = p.y + off + w / 2; this.pos[o + 5] = p.z;
      const f = Math.pow(1 - k / N, 1.4) * 1.3, c = this.cols[b];
      for (const q of [0, 3]) { this.col[o + q] = c.r * f; this.col[o + q + 1] = c.g * f; this.col[o + q + 2] = c.b * f; }
    }
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.color.needsUpdate = true; this.geo.computeBoundingSphere();
  }
}

/* ---------- objetos ---------- */
export function mkStar(glowOn = true) { const g = new THREE.Group(); const m = new THREE.Mesh(STAR_G, new THREE.MeshStandardMaterial({ color: '#ffd54a', metalness: .7, roughness: .18, emissive: '#ffae00', emissiveIntensity: .9 })); m.castShadow = true; g.add(m); if (glowOn) g.add(glowSprite('#ffe27a', 2.2, .55)); return g; }
export function mkHeart(c) { const m = new THREE.Mesh(HEART_G, M.gloss(c)); m.castShadow = true; return m; }
export function mkBalloon(c) {
  const g = new THREE.Group(); const mat = new THREE.MeshPhysicalMaterial({ color: c, roughness: .12, clearcoat: 1, clearcoatRoughness: .03, sheen: .3 });
  g.add(sph(mat, .42, 0, 0, 0, 1, 1.18, 1)); g.add(cone(mat, .07, .1, 0, -.52, 0)); g.children[1].rotation.x = Math.PI;
  const sg = new THREE.BufferGeometry().setFromPoints(Array.from({ length: 12 }, (_, i) => new THREE.Vector3(Math.sin(i * .7) * .04, -.56 - i * .1, 0)));
  g.add(new THREE.Line(sg, new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: .7 }))); g.userData.mat = mat; return g;
}
let _bubM; export function bubbleMat() {
  return _bubM || (_bubM = Object.assign(new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { time: { value: 0 } },
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `varying vec3 vN; varying vec3 vV; uniform float time; void main(){ float f=pow(1.-max(dot(vN,vV),0.),2.2); vec3 c=.5+.5*cos(6.28*(f*1.4+vec3(0.,.33,.67)+time*.1)); float h=pow(max(dot(reflect(-vV,vN),normalize(vec3(-.4,.7,.6))),0.),40.);
      gl_FragColor=vec4(mix(vec3(.75,.92,1.),c,.6)*(.25+f*1.3)+h*2., .06+f*.75+h); }` }), { userData: { shared: true } }));
}
export function mkBubble(r) { const m = new THREE.Mesh(SPH, bubbleMat()); m.scale.setScalar(r); m.renderOrder = 4; return m; }
export function mkCandy() {
  const k = Math.random(); const g = new THREE.Group(); const c = pick(['#ff4f7a', '#4dc3ff', '#ffd23f', '#7cf29a', '#b48cff']);
  if (k < .4) { const m = M.gloss(c); g.add(sph(m, .22, 0, 0, 0, 1.3, 1, 1)); for (const s of [-1, 1]) { const q = cone(m, .14, .2, s * .36, 0, 0); q.rotation.z = -s * Math.PI / 2; g.add(q); } }
  else if (k < .75) { g.add(new THREE.Mesh(new THREE.TorusGeometry(.2, .1, 16, 32), M.plush('#e0a060'))); const ic = new THREE.Mesh(new THREE.TorusGeometry(.2, .105, 16, 32, Math.PI * 2), M.gloss(c)); ic.scale.set(1, 1, .55); ic.position.z = .045; g.add(ic); g.rotation.x = -1; }
  else { g.add(cyl(M.matte('#ffffff', .5), .025, .025, .5, 0, -.3, 0)); const d = new THREE.Mesh(new THREE.CylinderGeometry(.24, .24, .07, 32), new THREE.MeshPhysicalMaterial({ map: spiralTex(c), roughness: .15, clearcoat: 1 })); d.rotation.x = Math.PI / 2; g.add(d); }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; }); return g;
}
const _spir = {}; export function spiralTex(c) { return _spir[c] || (_spir[c] = Object.assign(canvasTex(256, 256, (x, w) => { x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, w); x.translate(w / 2, w / 2); x.strokeStyle = c; x.lineWidth = 22; x.beginPath(); for (let a = 0; a < 20; a += .1) { const d = a * 6.3; x.lineTo(Math.cos(a) * d, Math.sin(a) * d); } x.stroke(); }), { userData: { shared: true } })); }
export function mkFlower(c) {
  const g = new THREE.Group(); const stem = cyl(M.plush('#3aa856'), .025, .03, 1, 0, .5, 0, 8); g.add(stem);
  const head = new THREE.Group(); head.position.y = 1; g.add(head); const pm = M.plush(c);
  for (let i = 0; i < 7; i++) { const a = i / 7 * TAU; const p = sph(pm, .12, Math.cos(a) * .15, 0, Math.sin(a) * .15, 1.2, .35, .7, true); p.rotation.y = -a; head.add(p); }
  head.add(sph(M.plush('#ffcf3a'), .09, 0, .03, 0, 1, .6, 1, true)); head.rotation.x = .7;
  const lf = sph(M.plush('#4cc85a'), .1, .08, .35, 0, 1.6, .25, .7, true); lf.rotation.z = -.5; g.add(lf);
  g.userData.head = head; g.userData.stem = stem; return g;
}
export function mkEgg() { const g = new THREE.Group(); g.add(sph(M.gloss('#fff3dc'), .3, 0, .38, 0, .85, 1.12, .85)); [[.1, .52, .2], [-.12, .4, .22], [.04, .25, .25], [-.06, .6, .17], [.2, .32, .13]].forEach(([x, y, z]) => g.add(sph(M.gloss('#8fdc6c'), .055, x, y, z, 1, 1, .4, true))); return g; }
export function mkSnowman() {
  const g = new THREE.Group(), sn = new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: .55, sheen: 1, sheenColor: new THREE.Color('#cfe8ff') });
  g.add(sph(sn, .42, 0, .4, 0), sph(sn, .31, 0, 1.0, 0), sph(sn, .23, 0, 1.45, 0));
  for (const s of [-1, 1]) g.add(sph(M.gloss('#1a1a24'), .035, s * .08, 1.52, .2, 1, 1, 1, true)); const n = cone(M.gloss('#ff8a2a'), .04, .22, 0, 1.45, .3); n.rotation.x = Math.PI / 2; g.add(n);
  for (let i = 0; i < 3; i++) g.add(sph(M.gloss('#1a1a24'), .035, 0, .95 + i * .12 - .1, .3 - Math.abs(i - 1) * .02, 1, 1, 1, true));
  const sc = new THREE.Mesh(new THREE.TorusGeometry(.24, .05, 10, 30), M.plush('#ff3f6e')); sc.rotation.x = Math.PI / 2; sc.position.y = 1.25; g.add(sc);
  g.add(cyl(M.gloss('#222233'), .17, .17, .25, 0, 1.75, 0), cyl(M.gloss('#222233'), .27, .27, .03, 0, 1.63, 0));
  g.traverse(o => { if (o.isMesh) o.castShadow = true; }); return g;
}
export function mkGift() {
  const g = new THREE.Group(); g.add(rbox(M.gloss('#ff4f7a'), .7, .55, .7, .04, 0, .28, 0)); g.add(rbox(M.gloss('#ff6f95'), .76, .14, .76, .04, 0, .6, 0));
  const r = M.gold(); g.add(rbox(r, .12, .7, .78, .02, 0, .35, 0), rbox(r, .78, .7, .12, .02, 0, .35, 0));
  for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.TorusGeometry(.12, .04, 8, 20), r); l.position.set(s * .1, .78, 0); l.rotation.y = Math.PI / 2; l.rotation.x = s * .4; g.add(l); } return g;
}
export function mkWhale() {
  const g = new THREE.Group(), bl = new THREE.MeshPhysicalMaterial({ color: '#4a7dff', roughness: .3, clearcoat: .8, sheen: .5, sheenColor: new THREE.Color('#9fd0ff') });
  g.add(sph(bl, 1, 0, 0, 0, 2.3, 1, 1.05), sph(M.plush('#cfe6ff'), .85, .2, -.35, 0, 2.0, .6, .9));
  const ts = new THREE.Shape(); ts.moveTo(0, 0); ts.quadraticCurveTo(-.6, .9, -.2, 1.3); ts.quadraticCurveTo(.1, .6, 0, 0); ts.quadraticCurveTo(-.6, -.9, -.2, -1.3); ts.quadraticCurveTo(.1, -.6, 0, 0);
  const tail = new THREE.Mesh(new THREE.ExtrudeGeometry(ts, { depth: .12, bevelEnabled: true, bevelThickness: .05, bevelSize: .05 }), bl); tail.rotation.x = Math.PI / 2; tail.position.set(2.2, .1, -.06); tail.rotation.z = Math.PI; g.add(tail);
  for (const s of [-1, 1]) { g.add(sph(bl, .35, -.4, -.5, s * .85, 1.6, .25, 1)); const e = new THREE.Group(); e.position.set(-1.55, .15, s * .62); e.add(sph(M.eye(), .1, 0, 0, 0, 1, 1.2, .6)); e.add(sph(M.emis('#ffffff', 2.5), .035, -.03, .04, .04 * s, 1, 1, 1, true)); g.add(e); }
  const sm = new THREE.Mesh(new THREE.TorusGeometry(.4, .03, 8, 24, Math.PI * .6), M.matte('#1d2a66', .6)); sm.position.set(-1.85, -.1, 0); sm.rotation.set(0, Math.PI / 2, Math.PI * 1.2); g.add(sm);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; }); g.userData.tail = tail; return g;
}
export function mkUfo() {
  const g = new THREE.Group(); const pr = [[0, -.3], [.5, -.28], [1.2, -.12], [1.5, 0], [1.2, .14], [.6, .22], [0, .24]];
  const lg = new THREE.LatheGeometry(pr.map(([x, y]) => new THREE.Vector2(x, y)), 64); g.add(new THREE.Mesh(lg, new THREE.MeshStandardMaterial({ color: '#dfe6ff', metalness: .9, roughness: .18 })));
  const dome = new THREE.Mesh(new THREE.SphereGeometry(.72, 40, 20, 0, TAU, 0, Math.PI / 2), M.glass()); dome.position.y = .2; dome.renderOrder = 3; g.add(dome);
  const lights = []; for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; const l = sph(new THREE.MeshStandardMaterial({ color: '#000', emissive: '#ffffff', emissiveIntensity: 3 }), .07, Math.cos(a) * 1.35, .02, Math.sin(a) * 1.35, 1, 1, 1, true); g.add(l); lights.push(l); }
  const under = glowSprite('#7ef9ff', 2.5, .8); under.position.y = -.35; g.add(under);
  const seat = new THREE.Group(); seat.position.y = .22; g.add(seat);
  g.userData = { lights, seat, dome }; g.traverse(o => { if (o.isMesh && !o.material.transparent) o.castShadow = true; }); return g;
}
export function mkBeam() {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(.35, 1.4, 1, 40, 1, true), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { t: { value: 0 }, a: { value: 1 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `varying vec2 vUv; uniform float t,a; void main(){ float s=.6+.4*sin(vUv.y*40.-t*8.); gl_FragColor=vec4(vec3(1.,.97,.6)*s*.9*a*(.3+vUv.y*.7), .35*a*s*(.3+vUv.y*.7)); }` }));
  m.geometry.translate(0, -.5, 0); return m;
}
export function mkCake() {
  const g = new THREE.Group(); g.add(cyl(M.plush('#ffd1e6'), .8, .8, .5, 0, .25, 0, 48), cyl(M.plush('#fff4fb'), .6, .6, .4, 0, .7, 0, 48));
  const dr = new THREE.Mesh(new THREE.TorusGeometry(.8, .06, 10, 60), M.gloss('#ff6fae')); dr.rotation.x = Math.PI / 2; dr.position.y = .5; g.add(dr);
  const flames = [];
  for (let i = 0; i < 4; i++) { const a = i / 4 * TAU + .4; const x = Math.cos(a) * .35, z = Math.sin(a) * .35; g.add(cyl(M.gloss(RAINBOW[i * 2]), .035, .035, .3, x, 1.05, z, 12)); const f = glowSprite('#ffc35a', .45, 1); f.position.set(x, 1.28, z); g.add(f); flames.push(f); g.add(sph(M.emis('#ffd27a', 4), .04, x, 1.25, z, 1, 1.6, 1, true)); }
  for (let i = 0; i < 18; i++) { const a = rnd(TAU); g.add(sph(M.gloss(pick(RAINBOW)), .04, Math.cos(a) * .79, rnd(.08, .45), Math.sin(a) * .79, 1, 1, 1, true)); }
  g.userData.flames = flames; g.traverse(o => { if (o.isMesh) o.castShadow = true; }); return g;
}
const _bwT = {}; function wingTex(c) { return _bwT[c] || (_bwT[c] = Object.assign(canvasTex(128, 128, (x, w) => { const gr = x.createRadialGradient(20, 64, 5, 40, 64, 110); gr.addColorStop(0, '#ffffff'); gr.addColorStop(.35, c); gr.addColorStop(1, '#2a1a4a'); x.fillStyle = gr; x.beginPath(); x.ellipse(64, 64, 62, 60, 0, 0, TAU); x.fill(); x.fillStyle = 'rgba(255,255,255,.7)'; [[80, 40], [90, 80], [60, 95]].forEach(([a, b]) => { x.beginPath(); x.arc(a, b, 8, 0, TAU); x.fill(); }); }), { userData: { shared: true } })); }
export function mkButterfly(c) {
  const g = new THREE.Group(); const wm = new THREE.MeshStandardMaterial({ map: wingTex(c), transparent: true, side: THREE.DoubleSide, roughness: .4, alphaTest: .1 });
  const wings = []; for (const s of [-1, 1]) { const w = new THREE.Group(); const p = new THREE.Mesh(new THREE.PlaneGeometry(.5, .5), wm); p.position.x = s * .26; p.scale.x = s; w.add(p); g.add(w); wings.push(w); }
  g.add(sph(M.plush('#2a1a3a'), .04, 0, 0, 0, 1, 1, 4.5, true)); g.userData.wings = wings; g.rotation.x = -Math.PI / 2.4; return g;
}
export function mkFish(c) {
  const g = new THREE.Group(); const m = new THREE.MeshPhysicalMaterial({ color: c, roughness: .25, clearcoat: 1, sheen: .5, sheenColor: new THREE.Color('#ffffff') });
  g.add(sph(m, .3, 0, 0, 0, 1.4, .9, .55)); const t = cone(m, .2, .3, .5, 0, 0); t.rotation.z = Math.PI / 2; t.scale.set(1, 1, .3); g.add(t);
  const f = cone(m, .1, .2, 0, .28, 0); f.scale.set(1, 1, .3); g.add(f);
  for (const s of [-1, 1]) { const e = sph(M.eye(), .05, -.25, .06, s * .14, 1, 1, .6, true); g.add(e); }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; }); g.userData.tail = t; return g;
}
export function mkFood(kind) {
  const g = new THREE.Group();
  switch (kind) {
    case 'battery': g.add(cyl(M.gloss('#2fd06f'), .16, .16, .5, 0, 0, 0, 24), cyl(M.metal('#dddddd', .2), .07, .07, .08, 0, .29, 0), cyl(M.gloss('#1d1d2a'), .165, .165, .14, 0, -.18, 0, 24)); g.add(rbox(M.emis('#ffffff', 2), .06, .16, .02, .01, 0, .05, .16)); break;
    case 'carrot': { const c = cone(M.plush('#ff8a2a'), .15, .55, 0, 0, 0); c.rotation.x = Math.PI; g.add(c); for (let i = 0; i < 3; i++) { const l = sph(M.plush('#3fbf5f'), .05, (i - 1) * .05, .36, 0, 1, 3, 1, true); l.rotation.z = (i - 1) * .4; g.add(l); } break; }
    case 'bone': g.add(cyl(M.plush('#fff6e6'), .07, .07, .5, 0, 0, 0)); g.children[0].rotation.z = Math.PI / 2; for (const s of [-1, 1]) for (const q of [-1, 1]) g.add(sph(M.plush('#fff6e6'), .09, s * .27, q * .07, 0)); break;
    case 'fish': { const f = mkFish('#7ad0ff'); f.scale.setScalar(.7); g.add(f); break; }
    case 'honey': g.add(sph(M.gloss('#ffb627'), .22, 0, 0, 0, 1, .95, 1)); g.add(cyl(M.plush('#fff1c8'), .14, .17, .07, 0, .2, 0)); g.add(cyl(M.matte('#9a6a3a', .6), .015, .015, .4, .08, .3, 0, 8)); break;
    case 'strawberry': { const s = sph(M.gloss('#ff2f52'), .2, 0, 0, 0, 1, 1.25, 1); g.add(s); for (let i = 0; i < 12; i++) { const a = rnd(TAU), y = rnd(-.15, .15); g.add(sph(M.emis('#ffe36b', .5), .015, Math.cos(a) * .19 * Math.sqrt(1 - y * y * 20), y, Math.sin(a) * .19, 1, 1, 1, true)); } for (let i = 0; i < 5; i++) { const l = cone(M.plush('#3fbf5f'), .05, .14, Math.cos(i) * .08, .26, Math.sin(i) * .08); l.rotation.z = Math.cos(i) * 1.2; g.add(l); } break; }
    case 'melon': { const w = new THREE.Mesh(new THREE.CylinderGeometry(.35, .35, .14, 32, 1, false, 0, Math.PI * .5), M.gloss('#ff4f6a')); w.rotation.x = Math.PI / 2; g.add(w); const r = new THREE.Mesh(new THREE.CylinderGeometry(.37, .37, .15, 32, 1, true, 0, Math.PI * .5), M.gloss('#2fae4f')); r.rotation.x = Math.PI / 2; g.add(r); break; }
    default: g.add(sph(M.gloss('#ff3f4f'), .2));
  }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; }); return g;
}
export function mkRock(c = '#9a9ab8') { const m = new THREE.Mesh(new THREE.DodecahedronGeometry(.2, 0), M.matte(c, 1)); m.castShadow = true; return m; }
export function mkDisco() {
  const g = new THREE.Group(); const b = new THREE.Mesh(new THREE.IcosahedronGeometry(.55, 2), new THREE.MeshStandardMaterial({ color: '#ffffff', metalness: .9, roughness: .12, flatShading: true, emissive: '#6a6aa0', emissiveIntensity: .6 }));
  g.add(b); const gl = glowSprite('#ffffff', 2.4, .5); g.add(gl); const line = cyl(M.metal('#cccccc', .3), .015, .015, 6, 0, 3.4, 0, 6); g.add(line); return g;
}
export function mkCloud(c = '#ffffff', s = 1) {
  const g = new THREE.Group(); const m = new THREE.MeshPhysicalMaterial({ color: c, roughness: .9, sheen: 1, sheenColor: new THREE.Color('#ffffff'), sheenRoughness: .6 });
  [[0, 0, 0, 1], [1, -.2, .1, .8], [-1, -.25, 0, .75], [.4, .45, -.1, .7], [-.5, .35, .1, .65], [1.7, -.4, 0, .5], [-1.7, -.45, 0, .5]].forEach(([x, y, z, r]) => g.add(sph(m, r, x, y, z, 1, .85, .9)));
  g.scale.setScalar(s); g.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } }); return g;
}
