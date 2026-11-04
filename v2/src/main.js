// Nave Estelar 2 — jogo principal
import * as THREE from 'three';
import { G, initEngine, resize, refreshEnv, disposeTree, glowTex, glowSprite, TAU, clamp, lerp, rnd, pick, E_OUT, E_IO, E_BACK } from './engine.js';
import { makeFriend, animateFriend, makeShip, PALS, Trail, RAINBOW, mkStar, mkHeart, mkBalloon, mkCandy, mkBubble, bubbleMat, mkFlower, mkEgg, mkSnowman, mkGift, mkWhale, mkUfo, mkBeam, mkCake, mkButterfly, mkFood, mkRock, mkDisco, HEART_G, STAR_G, M, SPH } from './models.js';
import { WORLDS } from './worlds.js';
import { A, ac, osc, nz, sfx, musicStart, musicStop, ambientPad, suspendAll, say, hush } from './audio.js';

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const PASS = '8015';
const BALC = [{ n: 'VERMELHO', c: '#ff2f45' }, { n: 'AZUL', c: '#2f7dff' }, { n: 'AMARELO', c: '#ffd21f' }, { n: 'VERDE', c: '#22c96a' }, { n: 'ROSA', c: '#ff6fc0' }, { n: 'ROXO', c: '#8f5bff' }, { n: 'LARANJA', c: '#ff8418' }];
const NUM = ['', 'UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS'];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ---------- progresso ---------- */
const SKEY = 'naveEstelar2';
const save = { stars: 0, pal: 0, world: 0, visited: {} };
try { Object.assign(save, JSON.parse(localStorage.getItem(SKEY) || '{}')); } catch (e) { }
const persist = () => { try { localStorage.setItem(SKEY, JSON.stringify(save)); } catch (e) { } };
const LEVELS = [0, 6, 16, 30, 50];
const levelOf = s => { let l = 1; LEVELS.forEach((v, i) => { if (s >= v) l = i + 1; }); return l; };
const LEVEL_MSG = ['', '', 'Uau! A sua nave evoluiu! Ganhou aletas e luzes coloridas!', 'Incrível! Agora a nave deixa um rastro de arco-íris!', 'Que demais! A nave ganhou uma coroa de rainha!', 'Nave LENDÁRIA! Agora ela tem uma estrelinha amiga!'];

/* ---------- estado ---------- */
const st = { world: clamp(save.world | 0, 0, 7), t: 0, started: false, kid: false, night: false, nightK: 0, music: false, musicEnd: 0, danceK: 0, weather: null, weatherT: 0, weatherIdx: -1, warp: null, shake: 0, turbo: 0, mission: null, missionType: 0, talkUntil: 0, talkWho: '', lastInput: 0, friendTaps: 0, look: new THREE.Vector2(), lookT: -9, visitor: null, lastSurprise: -1, evolving: null, level: levelOf(save.stars), photos: [], photoReq: false, idleN: 0, envNight: 0 };
const fr = { jy: 0, jv: 0, sq: 0, blink: 0, bt: 2, wave: 0, eat: 0, joy: 0, lx: 0, ly: 0, lift: 0 };
const ship = { enter: 1, loop: 0 };
const HP = new THREE.Vector3(-2.3, 2.15, .3), FP = new THREE.Vector3(1.95, 0, .5), CAM = { y: 2.5, z: 9.2, ly: 1.95 };

/* ---------- motor ---------- */
const canvas = $('#c'); initEngine(canvas); G.glowTexture = glowTex();
const { scene, camera, sky, sun, hemi, sparks, streaks } = G;
let baseFov = 50, quality = 2, TOP = 120;
const S = makeShip(); scene.add(S.root); S.root.scale.setScalar(.82); S.setLevel(st.level); S.setPaint(PALS[save.pal % PALS.length]);
const trail = new Trail(44); scene.add(trail.mesh);
const shield = mkBubble(2.2); shield.scale.set(2.3, 1.6, 1.8); shield.visible = false; scene.add(shield);
const head = new THREE.SpotLight('#fff3d0', 0, 24, .5, .6, 1.2); scene.add(head, head.target);
const disco = mkDisco(); disco.visible = false; scene.add(disco);
const spots = [0, 1, 2].map(i => { const s = new THREE.SpotLight(RAINBOW[i * 2], 0, 30, .32, .5, 1); scene.add(s, s.target); return s; });
const beams = spots.map((s, i) => { const b = new THREE.Mesh(new THREE.ConeGeometry(1.1, 1, 32, 1, true).translate(0, -.5, 0).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: RAINBOW[i * 2], transparent: true, opacity: .14, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); b.visible = false; scene.add(b); return b; });
const propRoot = new THREE.Group(); scene.add(propRoot);
let friend = null, cur = { w: null, group: null }, dayEnv = null, nightEnv = null;

function layout() {
  const W = innerWidth, H = innerHeight, dock = $('#dock').getBoundingClientRect(); const PH = Math.max(220, H - (dock.height || 0));
  const dpr = window.devicePixelRatio || 1; const pr = quality === 2 ? Math.min(dpr, 1.75) : quality === 1 ? Math.min(dpr, 1.3) : 1;
  const port = W / PH < 1;
  if (port) { HP.set(-1.2, 3.6, .3); FP.set(1.15, 0, .7); Object.assign(CAM, { y: 2.4, z: 7.7, ly: 2.3 }); } else { HP.set(-2.6, 2.1, .3); FP.set(2.2, 0, .5); Object.assign(CAM, { y: 2.5, z: 9.2, ly: 1.95 }); }
  if (friend) friend.root.position.copy(FP);
  resize(W, H, PH, pr, port ? 58 : 52); baseFov = camera.fov; const hud = $('#hud'); TOP = hud.offsetTop + hud.offsetHeight + 80;
}

/* ---------- ambiente dia/noite ---------- */
const col = h => new THREE.Color(h);
function makeEnv(e, night) {
  const k = night ? 1 : 0, dk = (c, to, a) => col(c).lerp(col(to), a * k);
  return { top: dk(e.top, '#02030c', .86), mid: dk(e.mid, '#070b26', .82), bot: dk(e.bot, '#03040f', .82), sunCol: col(e.sunCol).multiplyScalar(night ? .15 : 1), sunDir: new THREE.Vector3(...e.sun).normalize(), sunSize: e.sunSize,
    stars: night ? Math.max(e.stars, 1.3) : e.stars, nebula: night ? Math.max(e.nebula, .35) : e.nebula, haze: e.haze * (night ? .5 : 1), glow: e.glow * (night ? .25 : 1),
    fog: dk(e.fog[0], '#060818', .82), keyCol: night ? col('#8fa8ff') : col(e.key[0]), keyI: e.key[1] * (night ? .32 : 1), keyPos: new THREE.Vector3(...e.key[2]).normalize().multiplyScalar(16),
    hs: night ? col(e.hemi[0]).lerp(col('#2a3a7a'), .7) : col(e.hemi[0]), hg: col(e.hemi[1]).multiplyScalar(night ? .4 : 1), hi: e.hemi[2] * (night ? .5 : 1), exposure: e.exposure, bloom: e.bloom + (night ? .2 : 0) };
}
function applyEnv(k) {
  const a = dayEnv, b = nightEnv, u = sky.u, L = (x, y) => lerp(x, y, k);
  u.cTop.value.copy(a.top).lerp(b.top, k); u.cMid.value.copy(a.mid).lerp(b.mid, k); u.cBot.value.copy(a.bot).lerp(b.bot, k); u.sunCol.value.copy(a.sunCol).lerp(b.sunCol, k); u.sunDir.value.copy(a.sunDir);
  u.sunSize.value = a.sunSize; u.stars.value = L(a.stars, b.stars); u.nebula.value = L(a.nebula, b.nebula); u.haze.value = L(a.haze, b.haze); u.glowAmt.value = L(a.glow, b.glow);
  scene.fog.color.copy(a.fog).lerp(b.fog, k); sun.color.copy(a.keyCol).lerp(b.keyCol, k); sun.intensity = L(a.keyI, b.keyI); sun.position.copy(a.keyPos);
  hemi.color.copy(a.hs).lerp(b.hs, k); hemi.groundColor.copy(a.hg).lerp(b.hg, k); hemi.intensity = L(a.hi, b.hi);
  G.renderer.toneMappingExposure = a.exposure; G.bloom.strength = L(a.bloom, b.bloom);
}

/* ---------- objetos dinâmicos ---------- */
let PR = [];
function addProp(o, opt = {}) { const p = Object.assign({ o, v: new THREE.Vector3(), t: 0, life: 6, g: 0, bounce: 0, floor: 0, spin: new THREE.Vector3(), s0: o.scale.x, fadeOut: true }, opt); propRoot.add(o); if (p.tap) o.userData.tap = h => p.tap(p, h); PR.push(p); return p; }
function killProp(p) { if (p.dead) return; p.dead = true; propRoot.remove(p.o); disposeTree(p.o); }
function clearProps(keepTag) { PR.forEach(p => { if (!keepTag || p.tag !== keepTag) killProp(p); }); PR = PR.filter(p => !p.dead); }
function updProps(dt) {
  for (const p of PR) {
    if (p.dead) continue; p.t += dt;
    if (p.upd) { if (p.upd(p, dt) === false) { killProp(p); continue; } }
    else { p.v.y -= p.g * dt; p.o.position.addScaledVector(p.v, dt); if (p.bounce && p.o.position.y < p.floor) { p.o.position.y = p.floor; p.v.y = Math.abs(p.v.y) > .8 ? -p.v.y * p.bounce : 0; p.v.x *= .85; p.v.z *= .85; if (p.onBounce && Math.abs(p.v.y) > .8) p.onBounce(p); } p.o.rotation.x += p.spin.x * dt; p.o.rotation.y += p.spin.y * dt; p.o.rotation.z += p.spin.z * dt; }
    if (p.life - p.t < .4 && p.fadeOut) p.o.scale.setScalar(p.s0 * Math.max(.01, (p.life - p.t) / .4));
    if (p.t > p.life) killProp(p);
  }
  PR = PR.filter(p => !p.dead);
}
const count = tag => PR.filter(p => p.tag === tag && !p.dead).length;
function popAt(pos, color) { sparks.burst(pos.x, pos.y, pos.z, 26, color, 3.2); G.fx.ring(pos, color); sfx.pop(); }
G.sfx = sfx; A.onDur = d => { st.talkUntil = st.t + d + .1; };
G.fx = {
  ring(p, c = '#ffffff') { const m = new THREE.Mesh(new THREE.TorusGeometry(1, .035, 8, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(2), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); m.position.copy(p); m.position.y += .05; m.rotation.x = -Math.PI / 2; m.scale.setScalar(.1);
    addProp(m, { life: .7, fadeOut: false, upd: (q) => { const k = q.t / .7; m.scale.setScalar(.1 + k * 1.6); m.material.opacity = 1 - k; } }); },
  rainbowRing(p) { RAINBOW.forEach((c, i) => { const m = new THREE.Mesh(new THREE.TorusGeometry(1, .06, 8, 64), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(1.6), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); m.position.copy(p); m.lookAt(camera.position);
    addProp(m, { life: 1.1, fadeOut: false, upd: q => { const k = Math.max(0, q.t - i * .05) / 1; m.scale.setScalar(.1 + k * (1.6 - i * .12)); m.material.opacity = 1 - k; } }); }); }
};
G.props = {
  bounce(kind, p, spread = 1) {
    const o = kind === 'rock' ? mkRock() : kind === 'star' ? mkStar(false) : mkCandy(); if (kind === 'star') o.scale.setScalar(.45); if (kind === 'rock') o.scale.setScalar(rnd(.8, 1.5));
    o.position.set(p.x, Math.max(p.y, 0) + .4, p.z); const low = WORLDS[st.world].id === 'lua';
    addProp(o, { v: new THREE.Vector3(rnd(-1.6, 1.6) * spread, rnd(4, 7), rnd(-1, 1.2) * spread), g: low ? 3.2 : 13, bounce: .62, floor: .2, life: low ? 7 : 4.5, spin: new THREE.Vector3(rnd(-4, 4), rnd(-4, 4), rnd(-4, 4)), onBounce: () => osc(rnd(300, 500), 0, .12, 'sine', .08, rnd(600, 900)) });
  },
  balloonRise(c) { const o = mkBalloon(c || pick(BALC).c); o.position.set(rnd(-6, 6), -1, rnd(-4, 1)); const bx = o.position.x;
    addProp(o, { life: 14, upd: q => { q.o.position.y += .9 * G.dt; q.o.position.x = bx + Math.sin(q.t * 1.3) * .3; q.o.rotation.z = Math.sin(q.t * 1.3) * .1; }, tap: q => { popAt(q.o.position, q.o.userData.mat.color.getStyle()); confettiAt(q.o.position, 30); killProp(q); } }); },
  bubbleUp(x, y, z) { const r = rnd(.15, .38), o = mkBubble(r); o.position.set(x, y, z); const vy = rnd(.6, 1.1), ph = rnd(TAU);
    addProp(o, { life: 10, upd: q => { q.o.position.y += vy * G.dt; q.o.position.x += Math.sin(q.t * 2 + ph) * .3 * G.dt; q.o.scale.setScalar(r * Math.min(1, q.t * 5)); }, tap: q => { popAt(q.o.position, '#dff8ff'); killProp(q); }, fadeOut: false }); },
  growFlower(p) {
    const fl = PR.filter(q => q.tag === 'flower' && !q.dead); if (fl.length >= 12) killProp(fl[0]);
    const o = mkFlower(pick(['#ff6fa8', '#ffb340', '#9b7bff', '#ff4f6a', '#4dc3ff', '#ffffff', '#ffe14d'])); o.position.set(p.x, 0, p.z); o.rotation.y = rnd(TAU); sfx.grow();
    addProp(o, { tag: 'flower', life: 1e9, fadeOut: false, upd: q => { const k = E_BACK(clamp(q.t / .8, 0, 1)); q.o.scale.set(1.3, Math.max(.01, k * 1.3), 1.3); q.o.userData.head.scale.setScalar(Math.max(.01, E_BACK(clamp((q.t - .4) / .5, 0, 1)))); q.o.rotation.z = Math.sin(st.t * 1.5 + q.o.position.x) * .05; if (!q.pp && q.t > .6) { q.pp = 1; const h = q.o.localToWorld(new THREE.Vector3(0, 1, 0)); sparks.burst(h.x, h.y, h.z, 18, ['#fff9c0', '#ffffff'], 2); osc(1320, 0, .25, 'triangle', .08); } } });
  },
  butterfly(p) { const o = mkButterfly(pick(['#ff6fa8', '#ffb340', '#5fd0ff', '#b48cff'])); o.position.copy(p); const v = new THREE.Vector3(rnd(-1.5, 1.5), rnd(.5, 1.2), rnd(-1, .5));
    addProp(o, { life: 6, upd: q => { q.o.position.addScaledVector(v, G.dt); q.o.position.y += Math.sin(q.t * 4) * .01; const f = Math.sin(q.t * 18) * .9; q.o.userData.wings[0].rotation.y = f; q.o.userData.wings[1].rotation.y = -f; } }); },
  floatHeart(p, s = 1) { const o = mkHeart(pick(['#ff4f8a', '#ff7ab8', '#b46bff', '#ff4f5e', '#ffb3d9'])); o.scale.setScalar(.45 * s); o.position.copy(p); const v = new THREE.Vector3(rnd(-1.2, 1.2) * s, rnd(1.5, 2.6) * s, rnd(-.6, .6) * s);
    addProp(o, { life: 2.6, upd: q => { q.o.position.addScaledVector(v, G.dt); v.multiplyScalar(1 - G.dt * .6); q.o.rotation.y += G.dt * 3; } }); },
  snowman(p) { if (count('snow') >= 4) { G.sparks.burst(p.x, .5, p.z, 30, '#ffffff', 3); sfx.chime(); return; } const o = mkSnowman(); o.position.set(p.x, 0, p.z); o.rotation.y = rnd(-.5, .5); sfx.boing(); sparks.burst(p.x, .4, p.z, 40, '#ffffff', 3.5, { g: 4 });
    addProp(o, { tag: 'snow', life: 1e9, fadeOut: false, w: 0, upd: q => { q.o.scale.setScalar(Math.max(.01, E_BACK(clamp(q.t * 1.8, 0, 1)))); if (q.w > 0) { q.w -= G.dt; q.o.rotation.z = Math.sin(q.w * 30) * .15; } }, tap: q => { q.w = .6; sfx.giggle(); msg('Brrr! O boneco de neve deu oi!', '⛄'); sparks.burst(q.o.position.x, 1.6, q.o.position.z, 20, '#ffffff', 2); } }); },
  egg(p) { if (count('egg') >= 5) { sparks.burst(p.x, .5, p.z, 20, '#fff07a', 2.5); return; } const o = mkEgg(); o.position.set(p.x, 5, clamp(p.z, -6, 2.5)); sfx.whoosh?.();
    addProp(o, { tag: 'egg', life: 1e9, fadeOut: false, st: 0, vy: 0, upd: q => { const dt = G.dt;
      if (q.st === 0) { q.vy -= 18 * dt; q.o.position.y += q.vy * dt; if (q.o.position.y <= 0) { q.o.position.y = 0; q.st = 1; q.t0 = q.t; osc(200, 0, .15, 'sine', .2, 120); sparks.burst(q.o.position.x, .1, q.o.position.z, 12, '#e8d8b0', 1.5); } }
      else if (q.st === 1) { const k = q.t - q.t0; q.o.rotation.z = Math.sin(k * 30) * .25 * Math.min(1, k); if (k > 1.3) { q.st = 2; q.t0 = q.t; sfx.crack(); sparks.burst(q.o.position.x, .4, q.o.position.z, 30, ['#fff6df', '#9be37a'], 3); q.o.visible = false; const b = makeFriend('dino'); b.root.scale.setScalar(.32); b.root.position.copy(q.o.position); propRoot.add(b.root); q.baby = b; q.dir = Math.random() < .5 ? -1 : 1; msg(pick(['Nasceu um dinossaurinho!', 'Olha que fofinho!', 'Bem-vindo, bebezinho!']), '🥚'); } }
      else { const k = q.t - q.t0, b = q.baby; b.root.scale.setScalar(.32 * Math.min(1, k * 3)); animateFriend(b, st.t, { blink: 0, joy: k < 1, talk: 0, eat: 0, lx: 0, ly: 0, wave: k < 1, dance: 0, jumpY: Math.abs(Math.sin(k * 7)) * .25, squash: 0 }); if (k > 1.2) { b.root.position.x += q.dir * 1.6 * G.dt; b.root.rotation.y = q.dir * Math.PI / 2; } if (k > 5) { propRoot.remove(b.root); disposeTree(b.root); return false; } } } }); },
  slider() { const b = makeFriend('penguin'); b.root.scale.setScalar(.38); const L = Math.random() < .5; b.root.position.set(L ? -16 : 16, .2, rnd(-6, -2)); b.root.rotation.set(-Math.PI / 2 + .2, 0, L ? -Math.PI / 2 : Math.PI / 2);
    addProp(b.root, { life: 9, fadeOut: false, upd: q => { q.o.position.x += (L ? 4 : -4) * G.dt; if (Math.random() < .4) sparks.spawn({ x: q.o.position.x, y: .15, z: q.o.position.z, vy: rnd(.3, 1), color: '#ffffff', size: .15, life: .5 }); animateFriend(b, st.t, { blink: 0, joy: true, talk: 0, eat: 0, lx: 0, ly: 0, wave: 0, dance: 0, jumpY: 0, squash: 0 }); if (Math.abs(q.o.position.x) > 18) return false; } }); }
};
function confettiAt(p, n = 60, sp = 4) { sparks.burst(p.x, p.y, p.z, n, RAINBOW.concat(['#ffffff']), sp, { g: 2.5, drag: 1.4, life: 1.6 }); }

/* ---------- interface ---------- */
let msgTm = 0;
function msg(text, face, o = {}) {
  const b = $('#bub'); $('#bubFace').textContent = face || '💬'; $('#bubT').textContent = text; const sw = $('#bubSw'); if (o.sw) { sw.style.background = o.sw; sw.hidden = false; } else sw.hidden = true;
  b.classList.remove('pop', 'dim'); void b.offsetWidth; b.classList.add('pop', 'show'); clearTimeout(msgTm); msgTm = setTimeout(() => b.classList.add('dim'), Math.max(4500, text.length * 90));
  st.talkWho = o.who || (cur.w && face === cur.w.face ? 'friend' : 'other'); st.talkUntil = st.t + clamp(text.length * .065, 1, 6); say(text);
}
function card(title, sub, icon, small) { const c = $('#card'); c.querySelector('.ci').textContent = icon || ''; c.querySelector('.ct').textContent = title; c.querySelector('.cs').textContent = sub || ''; c.classList.toggle('small', !!small); c.classList.remove('show'); void c.offsetWidth; c.classList.add('show'); }
function flash(color = '#ffffff', ms = 700) { const f = $('#flash'); f.style.background = color; f.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms, easing: 'ease-out' }); }
function toScreen(v) { const p = v.clone().project(camera); return { x: (p.x + 1) / 2 * G.W, y: (1 - p.y) / 2 * G.H }; }
function award(n, at) { const s = at && at.isVector3 ? toScreen(at) : (at || { x: G.W / 2, y: G.PH / 2 }); for (let i = 0; i < n; i++) setTimeout(() => flyStar(s.x + rnd(-14, 14), s.y + rnd(-10, 10)), i * 150); }
function flyStar(x, y) { const el = document.createElement('div'); el.className = 'fly'; el.textContent = '⭐'; document.body.appendChild(el); const r = $('#starIco').getBoundingClientRect(), tx = r.left + r.width / 2, ty = r.top + r.height / 2;
  const an = el.animate([{ transform: `translate(${x}px,${y}px) scale(.4)`, opacity: 0 }, { transform: `translate(${x + (tx - x) * .15}px,${y - 90}px) scale(1.7) rotate(90deg)`, opacity: 1, offset: .3 }, { transform: `translate(${tx}px,${ty}px) scale(.7) rotate(360deg)`, opacity: 1 }], { duration: 950, easing: 'cubic-bezier(.45,0,.25,1)' });
  an.onfinish = () => { el.remove(); gainStar(); }; }
function gainStar() { save.stars++; persist(); updHUD(); const p = $('#starPill'); p.classList.remove('bump'); void p.offsetWidth; p.classList.add('bump'); sfx.star(save.stars % 12); }
function updHUD() { $('#starN').textContent = save.stars; const l = st.level; $('#lvlN').textContent = l; const a = LEVELS[l - 1], b = LEVELS[l]; $('#lvlBar').style.width = (b === undefined ? 100 : clamp((save.stars - a) / (b - a) * 100, 0, 100)) + '%'; }
let TM = []; const later = (s, fn) => TM.push({ t: st.t + s, fn });
function updTM() { if (!TM.length) return; const due = TM.filter(x => x.t <= st.t); if (!due.length) return; TM = TM.filter(x => x.t > st.t); due.forEach(x => { try { x.fn(); } catch (e) { console.error(e); } }); }

/* ---------- mundo ---------- */
let AMB = [];
function enterWorld(i) {
  const w = WORLDS[i]; st.world = i; save.world = i; persist();
  if (cur.group) { scene.remove(cur.group); disposeTree(cur.group); }
  if (friend) { scene.remove(friend.root); disposeTree(friend.root); }
  clearProps(); G.updaters = []; G.pickables = []; st.mission = null; st.visitor = null; st.weather = null; rain.clear(); sparks.clear();
  const grp = w.build(w); scene.add(grp); cur = { w, group: grp };
  friend = makeFriend(w.kind); friend.root.position.copy(FP); friend.root.rotation.y = -.3; scene.add(friend.root); friend.hit.userData.tap = () => tapFriend();
  dayEnv = makeEnv(w.env, false); nightEnv = makeEnv(w.env, true); applyEnv(st.nightK); refreshEnv(); st.envNight = st.nightK;
  scene.fog.near = w.env.fog[1]; scene.fog.far = w.env.fog[2];
  A.key = w.key; ambientPad(st.started, w.key);
  AMB = (w.amb || []).map(([a, b, fn]) => ({ a, b, fn, t: rnd(a * .3, b * .6) }));
  ship.enter = 0; trail.pts = []; shield.visible = !!w.water;
  $('#where span').textContent = `${w.icon} ${(G.W < 560 ? w.short : w.name).toUpperCase()}`;
  card(w.name, `${w.fname}, ${w.fdesc}`, w.icon);
  later(1, () => { msg(w.hello, w.face); fr.wave = 3; fr.jv = 5.5; });
  if (!save.visited[w.id]) { save.visited[w.id] = 1; persist(); later(3, () => award(2, friendHead())); }
}
G.onSkyTap = (line, mesh) => { msg(line, cur.w.face); sfx.chime(); const s0 = mesh.scale.clone(); const t0 = st.t; const id = setInterval(() => { const k = st.t - t0; mesh.scale.copy(s0).multiplyScalar(1 + Math.sin(k * 20) * .06 * Math.max(0, 1 - k)); if (k > 1) { mesh.scale.copy(s0); clearInterval(id); } }, 16); };
const friendHead = () => FP.clone().add(new THREE.Vector3(0, 1.5 + fr.jy, .3));

/* ---------- nave ---------- */
function shipPose(out) {
  const t = st.t; let x = HP.x, y = HP.y + Math.sin(t * 2) * .12, z = HP.z, rz = Math.sin(t * 1.4) * .05, rx = Math.sin(t * 1.1) * .08, sc = .82;
  if (st.warp && st.warp.t < 1.9) { const p = clamp(st.warp.t / .9, 0, 1); x += Math.pow(p, 2.4) * 22; y += p * 1.2; rz += .12 * p; }
  else if (ship.enter < 1) { const p = E_OUT(ship.enter); x = lerp(-16, x, p); y = lerp(y + 3, y, p); z = lerp(-4, z, p); rz += lerp(-.3, 0, p); }
  if (st.turbo > 0) { const T = 1.9 - st.turbo; if (T < .75) x += Math.pow(T / .75, 2) * 20; else x = lerp(-18, HP.x, E_OUT((T - .75) / 1.15)); rx += Math.sin(T * 9) * .3; }
  if (ship.loop > 0) { const p = 1 - ship.loop / 1; rz += E_IO(p) * TAU; y += Math.sin(p * Math.PI) * 1.4; }
  if (st.evolving) { const e = st.evolving.t, k = e < .7 ? E_OUT(e / .7) : e > 2.7 ? 1 - E_IO(clamp((e - 2.7) / .7, 0, 1)) : 1; x = lerp(x, 0, k); y = lerp(y, 3.1, k); z = lerp(z, 2.6, k); sc *= 1 + k * .25; if (e > .6 && e < 2.7) rx += E_IO((e - .6) / 2.1) * TAU * 3; }
  out.position.set(x, y, z); out.rotation.set(rx, 0, rz); out.scale.setScalar(sc);
}
function tapShip() { if (st.turbo > 0 || ship.loop > 0 || st.evolving) return; ship.loop = 1; sfx.boing(); osc(660, .2, .12, 'square', .04); sparks.burst(S.root.position.x, S.root.position.y, S.root.position.z, 30, ['#ffe36b', '#ffffff'], 3); msg(pick(['Iuhuuu! Cambalhota!', 'Que divertido!', 'Uiii! A nave deu uma pirueta!']), '👧'); }
S.hit.userData.tap = () => tapShip();
function tapFriend() { const w = cur.w; fr.jv = 6.5; fr.joy = 1.1; sfx.giggle(); const h = friendHead(); for (let i = 0; i < 4; i++) G.props.floatHeart(h, .8); msg(w.lines[st.friendTaps % w.lines.length], w.face); st.friendTaps++; if (st.friendTaps % 4 === 0) award(1, h); }

/* ---------- chuva 3D (clima) ---------- */
class Rain {
  constructor() { this.pools = {}; this.items = []; }
  pool(kind) { if (this.pools[kind]) return this.pools[kind]; let geo, mat;
    if (kind === 'stars') { geo = STAR_G; mat = new THREE.MeshStandardMaterial({ color: '#ffd54a', metalness: .7, roughness: .2, emissive: '#ffa800', emissiveIntensity: .8 }); }
    else if (kind === 'hearts') { geo = HEART_G; mat = new THREE.MeshPhysicalMaterial({ roughness: .15, clearcoat: 1 }); }
    else if (kind === 'petals') { geo = SPH; mat = new THREE.MeshPhysicalMaterial({ roughness: .5, sheen: 1, side: THREE.DoubleSide }); }
    else { geo = SPH; mat = new THREE.MeshPhysicalMaterial({ roughness: .15, clearcoat: 1 }); }
    const im = new THREE.InstancedMesh(geo, mat, 140); im.count = 0; im.castShadow = true; im.frustumCulled = false; scene.add(im); this.pools[kind] = im; return im; }
  spawn(kind, colors, scale) { this.pool(kind); this.items.push({ kind, x: rnd(-9, 9), y: rnd(9, 12), z: rnd(-6, 3), vy: rnd(1.6, 2.6), rx: rnd(TAU), ry: rnd(TAU), sx: rnd(-2, 2), sy: rnd(-3, 3), s: scale * rnd(.7, 1.2), c: new THREE.Color(pick(colors)), sway: rnd(TAU) }); }
  update(dt) { const d = new THREE.Object3D(); const cnt = {}; for (const k in this.pools) cnt[k] = 0;
    this.items = this.items.filter(it => { it.y -= it.vy * dt; it.rx += it.sx * dt; it.ry += it.sy * dt; it.x += Math.sin(st.t * 1.5 + it.sway) * .4 * dt; if (it.y < -.5) return false; const im = this.pools[it.kind], i = cnt[it.kind]++; if (i >= 140) return false;
      d.position.set(it.x, it.y, it.z); d.rotation.set(it.rx, it.ry, 0); d.scale.setScalar(it.s); if (it.kind === 'petals') d.scale.set(it.s, it.s * .25, it.s * .8); if (it.kind === 'candy') d.scale.set(it.s * 1.2, it.s, it.s); d.updateMatrix(); im.setMatrixAt(i, d.matrix); im.setColorAt(i, it.c); return true; });
    for (const k in this.pools) { const im = this.pools[k]; im.count = cnt[k]; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; } }
  clear() { this.items = []; for (const k in this.pools) this.pools[k].count = 0; }
}
const rain = new Rain();
let wAcc = 0;
const rate = (dt, r, fn) => { wAcc += dt * r; while (wAcc >= 1) { wAcc--; fn(); } };
const WEATHER = [
  { n: 'CHUVA DE ESTRELAS', say: 'Olha! Chuva de estrelas!', f: '🌠', spawn: dt => rate(dt, 9, () => rain.spawn('stars', ['#ffffff'], .5)) },
  { n: 'CHUVA DE CORAÇÕES', say: 'Chuva de corações! Quanto amor!', f: '💖', spawn: dt => rate(dt, 9, () => rain.spawn('hearts', ['#ff4f8a', '#ff7ab8', '#b46bff', '#ff4f5e', '#4fb8ff'], .55)) },
  { n: 'NEVE MÁGICA', say: 'Está nevando! Olha os floquinhos!', f: '❄️', spawn: dt => { for (let i = 0; i < 4; i++) sparks.spawn({ x: rnd(-12, 12), y: rnd(8, 11), z: rnd(-8, 4), vy: -rnd(.7, 1.3), vx: rnd(-.3, .3), color: '#ffffff', size: rnd(.12, .22), life: 9 }); } },
  { n: 'ARCO-ÍRIS GIGANTE', say: 'Uau! Um arco-íris gigante no céu!', f: '🌈', start() { bigRainbow(true); }, end() { bigRainbow(false); }, spawn: dt => { if (Math.random() < dt * 10) sparks.spawn({ x: rnd(-10, 10), y: rnd(1, 8), z: rnd(-8, 2), color: pick(RAINBOW), size: rnd(.2, .35), life: 1.2, bright: 1.5 }); } },
  { n: 'CHUVA DE DOCES', say: 'Chuva de doces! Hummm!', f: '🍭', spawn: dt => rate(dt, 9, () => rain.spawn('candy', ['#ff4f8a', '#4dc3ff', '#ffd23f', '#7cf29a', '#b48cff'], .22)) },
  { n: 'CHUVA DE METEOROS', say: 'Chuva de meteoros! Zuuum!', f: '☄️', spawn: dt => { if (Math.random() < dt * 5) meteor(); } },
  { n: 'CHUVA DE BOLHAS', say: 'Bolhas por todo lado! Estoure elas!', f: '🫧', spawn: dt => rate(dt, 2.6, () => G.props.bubbleUp(rnd(-5, 5), -.5, rnd(-2, 2.5))) },
  { n: 'CHUVA DE FLORES', say: 'Chuva de flores! Que cheirinho bom!', f: '🌸', spawn: dt => rate(dt, 12, () => rain.spawn('petals', ['#ff9fd0', '#ffffff', '#ffd6ec', '#ffb3c8', '#ffe68a'], .14)) }
];
function meteor() { const x0 = rnd(-6, 14), y0 = rnd(10, 14), z0 = rnd(-10, -2), vx = -rnd(10, 14), vy = -rnd(7, 10); for (let k = 0; k < 18; k++) setTimeout(() => sparks.spawn({ x: x0 + vx * k * .03, y: y0 + vy * k * .03, z: z0, vx: vx * .05, vy: vy * .05, color: pick(['#ffe9a8', '#ffc4f0', '#bff6ff']), size: .55 - k * .02, life: .7, bright: 2 }), k * 22); }
let rbGroup = null;
function bigRainbow(on) {
  if (on) { if (rbGroup) return; rbGroup = new THREE.Group(); rbGroup.position.set(0, -1, -14); RAINBOW.forEach((c, i) => { const m = new THREE.Mesh(new THREE.TorusGeometry(13 - i * .55, .28, 10, 96, Math.PI), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(1.3), transparent: true, opacity: 0, fog: false, depthWrite: false })); rbGroup.add(m); }); scene.add(rbGroup); rbGroup.userData.k = 0; rbGroup.userData.on = true; }
  else if (rbGroup) rbGroup.userData.on = false;
}
function nextWeather() { if (st.weather && st.weather.end) st.weather.end(); st.weatherIdx = (st.weatherIdx + 1) % WEATHER.length; st.weather = WEATHER[st.weatherIdx]; st.weatherT = 8; if (st.weather.start) st.weather.start(); sfx.magic(); card(st.weather.n, '', st.weather.f, true); msg(st.weather.say, '🌦️'); }

/* ---------- visitante ---------- */
function callFriend() {
  if (st.visitor) return; let i; do { i = Math.random() * WORLDS.length | 0; } while (i === st.world); const v = WORLDS[i]; sfx.ring(); msg('Trim trim! Chegou visita!', '📞');
  later(1.5, () => msg(`Oi, Maria Clara! Eu sou ${/^o /.test(v.fdesc) ? 'o' : 'a'} ${v.fname}, ${v.fdesc}! Vim te dar um abraço!`, v.face, { who: 'visitor' }));
  const u = mkUfo(); const vf = makeFriend(v.kind); vf.root.scale.setScalar(.36); vf.root.position.y = -.05; u.userData.seat.add(vf.root); u.scale.setScalar(.95);
  const tgt = new THREE.Vector3(G.portrait ? .2 : -.2, G.portrait ? 3.4 : 3.6, 2.2); u.position.set(-14, 9, -4); let spin = 0;
  st.visitor = addProp(u, { life: 10, fadeOut: false, tap: () => { spin = .9; sfx.giggle(); for (let k = 0; k < 4; k++) G.props.floatHeart(u.position.clone().add(new THREE.Vector3(0, .6, 0)), .7); msg('Hihihi! Que cócegas!', v.face, { who: 'visitor' }); },
    upd: q => { const t = q.t, dt = G.dt; if (t < 1.6) u.position.lerpVectors(new THREE.Vector3(-14, 9, -4), tgt, E_OUT(t / 1.6)); else if (t < 8) { u.position.set(tgt.x + Math.sin(t * 1.2) * .8, tgt.y + Math.sin(t * 2) * .2, tgt.z); if (Math.random() < dt * 2) G.props.floatHeart(u.position.clone().add(new THREE.Vector3(0, .5, 0)), .6); } else { u.position.x += 12 * dt; u.position.y += 5 * dt; }
      if (spin > 0) spin -= dt; u.rotation.y += dt * (spin > 0 ? 12 : 1.2); u.rotation.z = Math.sin(t * 2) * .06; u.rotation.x = .38; u.userData.lights.forEach((l, k) => l.material.emissive.setHSL((t * .4 + k / 10) % 1, 1, .6));
      animateFriend(vf, st.t, { blink: (st.t % 3.3) < .12, joy: spin > 0, talk: st.talkWho === 'visitor' && st.t < st.talkUntil ? .5 + .5 * Math.sin(st.t * 22) : 0, eat: 0, lx: 0, ly: 0, wave: true, dance: st.danceK, jumpY: 0, squash: 0 });
      vf.root.rotation.y = -u.rotation.y; if (t > 9.5) { st.visitor = null; return false; } } });
}

/* ---------- missões ---------- */
function visibleHalfW(z) { const d = camera.position.z - z; const hf = 2 * Math.atan(Math.tan(baseFov * Math.PI / 360) * camera.aspect); return Math.tan(hf / 2) * d; }
function placeTargets(n) { const out = []; let tries = 0; while (out.length < n && tries < 400) { tries++; const z = rnd(.5, 2.5), hw = visibleHalfW(z) * .82; const v = new THREE.Vector3(rnd(-hw, hw), rnd(1.1, 5), z); const s = toScreen(v);
  if (s.y < TOP + 20 || s.y > G.PH - 50 || s.x < 40 || s.x > G.W - 40) continue; if (out.some(o => { const q = toScreen(o); return Math.hypot(q.x - s.x, q.y - s.y) < 95; })) continue; out.push(v); } while (out.length < n) out.push(new THREE.Vector3(rnd(-2, 2), rnd(2, 4), 1)); return out; }
function cancelMission() { if (st.mission) { st.mission = null; PR.filter(p => p.tag === 'm').forEach(killProp); } }
function startMission() {
  if (st.mission) { const m = st.mission; msg(m.again, m.face, m.o || {}); return; }
  const type = ['stars', 'colors', 'feed'][st.missionType++ % 3], w = cur.w, m = { type, n: 0, face: w.face }; st.mission = m; sfx.magic();
  if (type === 'stars') { m.need = 5; m.again = 'Encontre as 5 estrelas! Toque nelas!'; m.face = '⭐'; card('MISSÃO', 'Ache 5 estrelas!', '⭐', true); msg('Missão das estrelas! Encontre as 5 estrelas escondidas!', '⭐');
    placeTargets(5).forEach((pos, i) => { const o = mkStar(); o.position.copy(pos); o.scale.setScalar(.01);
      addProp(o, { tag: 'm', life: 1e9, fadeOut: false, upd: q => { const k = q.t - .5 - i * .18; q.o.scale.setScalar(Math.max(.01, .95 * E_BACK(clamp(k * 2.5, 0, 1)))); q.o.rotation.y = Math.sin(st.t * 1.6 + i) * .55; q.o.rotation.z = Math.sin(st.t * 1.1 + i) * .2; q.o.position.y = pos.y + Math.sin(st.t * 2 + i) * .12; },
        tap: q => { if (q.t < .6) return; killProp(q); m.n++; sparks.burst(pos.x, pos.y, pos.z, 50, ['#ffe36b', '#ffffff', '#ffb000'], 4); G.fx.ring(q.o.position, '#ffe36b'); sfx.ding(m.n); award(1, q.o.position); if (m.n >= m.need) later(.9, () => { if (st.mission === m) completeMission(); }); else msg(`${NUM[m.n]}!`, '⭐'); } }); }); }
  else if (type === 'colors') { m.need = 3; card('MISSÃO', 'Cores dos balões!', '🎈', true); colorsRound(m); }
  else { m.need = 3; m.again = `Toque na comidinha para me dar ${w.foodN}!`; card('MISSÃO', `Alimente ${w.fname}!`, '🍽️', true); msg(`Estou com fome! Toque na comidinha para me dar 3 ${w.foodN}!`, w.face); fr.wave = 2;
    placeTargets(3).forEach((pos, i) => { const o = mkFood(w.food); o.position.copy(pos); o.scale.setScalar(.01); const gl = glowSprite('#ffffff', 1.6, .35); o.add(gl);
      addProp(o, { tag: 'm', life: 1e9, fadeOut: false, fly: -1, upd: q => { if (q.fly < 0) { q.o.scale.setScalar(Math.max(.01, 1.4 * E_BACK(clamp((q.t - .4 - i * .2) * 2.5, 0, 1)))); q.o.rotation.y = st.t * 1.2 + i; q.o.position.y = pos.y + Math.sin(st.t * 2.5 + i) * .12; return; }
          q.fly += G.dt; const p = Math.min(1, q.fly / .7), mouth = friendHead().add(new THREE.Vector3(0, -.2, .4)); q.o.position.lerpVectors(pos, mouth, E_IO(p)); q.o.position.y += Math.sin(p * Math.PI) * 1.6; q.o.scale.setScalar(1.4 * (1 - p * .6));
          if (p >= 1) { fr.eat = .8; sfx.chomp(); m.n++; for (let k = 0; k < 3; k++) G.props.floatHeart(mouth, .7); award(1, mouth); if (m.n >= m.need) later(1, () => { if (st.mission === m) completeMission(); }); else msg(`${NUM[m.n]}! Nham nham!`, w.face); return false; } },
        tap: q => { if (q.fly >= 0 || q.t < .5) return; q.fly = 0; osc(500, 0, .3, 'triangle', .08, 900); } }); }); }
}
function colorsRound(m) {
  const cols = shuffle(BALC).slice(0, 4), target = pick(cols); m.target = target; m.again = `Toque no balão ${target.n}!`; m.face = '🎈'; m.o = { sw: target.c }; msg(`Toque no balão ${target.n}!`, '🎈', { sw: target.c });
  const z = 1.6, hw = visibleHalfW(z) * .72; let y = 3.3; for (let tr = 0; tr < 20; tr++) { const s = toScreen(new THREE.Vector3(0, y, z)); if (s.y < TOP + 60) y -= .2; else if (s.y > G.PH * .62) y += .2; else break; }
  cols.forEach((c, i) => { const o = mkBalloon(c.c); const base = new THREE.Vector3(lerp(-hw, hw, i / 3), y, z); o.position.copy(base); o.scale.setScalar(.01);
    addProp(o, { tag: 'm', life: 1e9, fadeOut: false, wig: 0, leave: false, upd: q => { const k = q.t - i * .12; if (q.leave) { q.o.position.y += 5 * G.dt; return q.o.position.y < 14; } q.o.scale.setScalar(Math.max(.01, 1.15 * E_BACK(clamp(k * 2.5, 0, 1)))); q.o.position.set(base.x + (q.wig > 0 ? Math.sin(q.wig * 40) * .12 : 0), base.y + Math.sin(st.t * 2 + i) * .1, base.z); if (q.wig > 0) q.wig -= G.dt; },
      tap: q => { if (st.mission !== m || q.leave || q.t < .4) return; if (c === target) { killProp(q); popAt(q.o.position, c.c); confettiAt(q.o.position, 40); m.n++; award(1, q.o.position); msg(`Isso! Esse é o ${target.n}!`, '🎈', { sw: target.c }); PR.forEach(p => { if (p.tag === 'm') p.leave = true; }); later(1.5, () => { if (st.mission !== m) return; PR.filter(p => p.tag === 'm').forEach(killProp); if (m.n >= m.need) completeMission(); else colorsRound(m); }); }
        else { q.wig = .5; sfx.wrong(); msg(`Esse é o ${c.n}. Cadê o ${target.n}?`, '🎈', { sw: target.c }); } } }); });
}
function completeMission() { const w = cur.w; st.mission = null; PR.filter(p => p.tag === 'm').forEach(killProp); card('MISSÃO COMPLETA!', 'Você conseguiu!', '🏆'); sfx.fanfare(); st.shake = .25; for (let i = 0; i < 4; i++) later(i * .35, () => firework(rnd(-5, 5), rnd(5, 8), rnd(-6, -2)));
  award(3, { x: G.W / 2, y: G.PH * .45 }); fr.jv = 7; fr.joy = 1.5; later(.3, () => msg(pick(['Parabéns, Maria Clara! Você é demais!', 'Uhuuul! Missão completa!', 'Que incrível! Você conseguiu!']), w.face)); }

/* ---------- surpresas ---------- */
function firework(x, y, z) { sfx.boom(); const h = rnd(1); const c = new THREE.Color(); for (let i = 0; i < 90; i++) { const a = rnd(TAU), b = Math.acos(rnd(-1, 1)), s = rnd(4.5, 6.5); c.setHSL((h + rnd(-.06, .06) + 1) % 1, 1, .6); sparks.spawn({ x, y, z, vx: Math.sin(b) * Math.cos(a) * s, vy: Math.cos(b) * s, vz: Math.sin(b) * Math.sin(a) * s, color: c, size: rnd(.25, .4), life: rnd(1.2, 1.9), g: 2.2, drag: 1.6, bright: 2 }); } st.shake = Math.max(st.shake, .12); }
function rocket(x) { sfx.launch(); const z = rnd(-8, -3), ty = rnd(5, 9); let y = 0; const id = setInterval(() => { y += .35; sparks.spawn({ x: x + rnd(-.05, .05), y, z, vy: -1, color: '#ffe9a8', size: .3, life: .5, bright: 2 }); if (y >= ty) { clearInterval(id); firework(x, y, z); } }, 16); }
const SURPRISES = [
  () => { msg('Olha! Uma baleia que voa pelo céu!', '🐋'); sfx.whale(); const o = mkWhale(); o.scale.setScalar(1.15); o.position.set(20, 6.5, -7); let acc = 0;
    addProp(o, { life: 26, fadeOut: false, upd: q => { q.o.position.x -= 1.7 * G.dt; q.o.position.y = 6.5 + Math.sin(q.t * .9) * .5; q.o.rotation.z = Math.sin(q.t * .9) * .06; o.userData.tail.rotation.y = Math.sin(q.t * 3) * .3; acc += G.dt; if (acc > 1.4) { acc = 0; const p = q.o.localToWorld(new THREE.Vector3(-.4, 1, 0)); for (let i = 0; i < 26; i++) sparks.spawn({ x: p.x, y: p.y, z: p.z, vx: rnd(-1, 1), vy: rnd(3, 5), vz: rnd(-1, 1), color: pick(['#bff6ff', '#ffffff', '#7ef9ff']), size: rnd(.15, .3), life: 1.4, g: 5 }); sfx.bloop(); } return q.o.position.x > -22; },
      tap: q => { sfx.giggle(); sfx.whale(); sparks.burst(q.o.position.x, q.o.position.y + 1, q.o.position.z, 40, '#bff6ff', 4); } }); },
  () => { msg('Fogos de artifício! Que lindo!', '🎆'); for (let i = 0; i < 10; i++) later(i * .42, () => rocket(rnd(-7, 7))); },
  () => { msg('Um disco voador! Ele quer levar o amigo para passear!', '🛸'); const u = mkUfo(); u.position.set(-15, 8, -3); const bm = mkBeam(); bm.visible = false; u.add(bm); sfx.hum();
    addProp(u, { life: 9, fadeOut: false, upd: q => { const t = q.t, top = new THREE.Vector3(FP.x, 5.6, FP.z); if (t < 1.4) u.position.lerpVectors(new THREE.Vector3(-15, 8, -3), top, E_OUT(t / 1.4)); else if (t < 5.4) { u.position.copy(top); bm.visible = true; bm.scale.set(1, 5.5, 1); bm.material.uniforms.t.value = t; fr.lift = Math.sin(clamp((t - 1.6) / 3.6, 0, 1) * Math.PI) * 1.8; if (!q.g && t > 2) { q.g = 1; sfx.giggle(); msg('Uiii! Estou voando!', cur.w.face); } } else { bm.visible = false; fr.lift = 0; u.position.x += 12 * G.dt; u.position.y += 4 * G.dt; if (!q.gift) { q.gift = 1; gift(new THREE.Vector3(FP.x - 1.2, 5, FP.z + .6)); } }
      u.rotation.y += G.dt * 2; u.userData.lights.forEach((l, k) => l.material.emissive.setHSL((t * .5 + k / 10) % 1, 1, .6)); } }); },
  () => { msg('Festa de balões! Estoure todos!', '🎈'); for (let i = 0; i < 18; i++) later(i * .12, () => G.props.balloonRise()); },
  () => { msg('Um cometa gigante! Faça um pedido!', '☄️'); sfx.turbo(); st.shake = .4; const head = glowSprite('#ffffff', 5, 1); head.position.set(-22, 12, -16);
    addProp(head, { life: 5, fadeOut: false, upd: q => { q.o.position.x += 11 * G.dt; q.o.position.y -= 2.4 * G.dt; for (let i = 0; i < 6; i++) sparks.spawn({ x: q.o.position.x + rnd(-.4, .4), y: q.o.position.y + rnd(-.4, .4), z: q.o.position.z, vx: -rnd(1, 4), vy: rnd(-.5, .8), color: pick(['#ffffff', '#bff6ff', '#ffe9a8', '#ffc4f0']), size: rnd(.4, .9), life: 1.4, bright: 1.6 }); return q.o.position.x < 24; } }); },
  () => { msg('Hora da festa! Viva a Maria Clara!', '🎂'); sfx.birthday(); const o = mkCake(); o.position.set(0, 0, 2.2); o.scale.setScalar(.01);
    addProp(o, { life: 5, fadeOut: true, upd: q => { q.o.scale.setScalar(Math.max(.01, 1.1 * E_BACK(clamp(q.t * 1.6, 0, 1)))); q.o.rotation.y = Math.sin(q.t) * .3; o.userData.flames.forEach((f, i) => f.scale.setScalar(.45 + Math.sin(st.t * 20 + i) * .08)); } });
    for (let k = 0; k < 6; k++) later(k * .25, () => { for (const s of [-1, 1]) for (let i = 0; i < 26; i++) sparks.spawn({ x: s * 6, y: 0, z: 1, vx: -s * rnd(2, 4.5), vy: rnd(6, 9), vz: rnd(-1, 1), color: pick(RAINBOW), size: rnd(.2, .35), life: 2, g: 6, drag: .6, bright: 1.5 }); }); },
  () => { msg('Um arco-íris mágico apareceu!', '🌈'); sfx.magic(); bigRainbow(true); later(7, () => bigRainbow(false)); for (let i = 0; i < 12; i++) later(i * .3, () => G.fx.rainbowRing(new THREE.Vector3(rnd(-4, 4), rnd(2, 5), rnd(-2, 1)))); },
  () => { msg('Uma nuvem de borboletas!', '🦋'); for (let i = 0; i < 16; i++) { const o = mkButterfly(pick(['#ff6fa8', '#ffb340', '#5fd0ff', '#b48cff', '#ffe14d'])); const a0 = i / 16 * TAU, r = rnd(1.5, 3.2), yy = rnd(.8, 3.6);
    addProp(o, { life: 9, upd: q => { const a = a0 + q.t * 1.1; q.o.position.set(FP.x + Math.cos(a) * r, yy + Math.sin(q.t * 2 + i) * .4, FP.z + Math.sin(a) * r * .6); q.o.rotation.z = -a; const f = Math.sin(q.t * 18 + i) * .9; o.userData.wings[0].rotation.y = f; o.userData.wings[1].rotation.y = -f; } }); } sfx.chime(); }
];
function gift(p) { const o = mkGift(); o.position.copy(p); addProp(o, { life: 3.4, fadeOut: false, vy: 0, upd: q => { if (!q.land) { q.vy -= 14 * G.dt; q.o.position.y += q.vy * G.dt; if (q.o.position.y <= 0) { q.o.position.y = 0; q.land = q.t; sfx.boing(); } } else { const k = q.t - q.land; q.o.rotation.z = Math.sin(k * 30) * .1; if (k > .9) { sfx.fanfare(); confettiAt(q.o.position.clone().add(new THREE.Vector3(0, .6, 0)), 100, 5); for (let i = 0; i < 5; i++) G.props.bounce('star', q.o.position, 1); msg('Era um presente! Cheio de estrelas!', '🎁'); return false; } } } }); }
function surprise() { let i; do { i = Math.random() * SURPRISES.length | 0; } while (i === st.lastSurprise); st.lastSurprise = i; card('SURPRESA!', '', '🎁', true); SURPRISES[i](); }

/* ---------- ações dos botões ---------- */
function openMap() { $('#planets').innerHTML = WORLDS.map((w, i) => `<button class="pl${i === st.world ? ' cur' : ''}" data-w="${i}"><span class="d" style="background:radial-gradient(circle at 32% 28%,rgba(255,255,255,.7) 0,rgba(255,255,255,0) 36%),radial-gradient(circle at 70% 75%,rgba(0,0,0,.35),rgba(0,0,0,0) 55%),linear-gradient(145deg,${w.disc[0]},${w.disc[1]})">${w.icon}</span>${save.visited[w.id] ? '<span class="v">⭐</span>' : ''}<span>${i === st.world ? '📍 ' : ''}${w.short}</span></button>`).join(''); $('#map').classList.add('show'); sfx.magic(); msg('Para qual planeta vamos, Maria Clara?', '🗺️'); }
function warpTo(i) { if (st.warp || st.evolving) return; if (i === st.world) { msg('Já estamos aqui! Que tal outro planeta?', cur.w.face); return; } cancelMission(); st.warp = { t: 0, to: i, done: false }; sfx.warp(); st.shake = .3; msg(pick(['Segura firme! Lá vamos nós!', 'Contagem: três, dois, um... já!', 'Rumo às estrelas!']), '🚀'); }
function doTurbo() { if (st.turbo > 0) return; st.turbo = 1.9; st.shake = .7; sfx.turbo(); card('TURBO!', '', '⚡', true); msg(pick(['Turbo! Zuuuum!', 'Segura firme! Turbôôô!', 'Mais rápido que um cometa!']), '🚀'); }
function toggleNight() { st.night = !st.night; const b = $('[data-a=noite]'); b.querySelector('.i').textContent = st.night ? '☀️' : '🌙'; b.querySelector('.l').textContent = st.night ? 'DIA' : 'NOITE'; b.classList.toggle('on', st.night); sfx.magic(); msg(st.night ? 'Boa noite! Olha os vagalumes brilhando!' : 'Bom dia, Maria Clara! O sol voltou!', cur.w.face); }
function toggleMusic(auto) { st.music = !st.music; $('[data-a=musica]').classList.toggle('on', st.music); if (st.music) { musicStart(); st.musicEnd = st.t + 30; msg('Hora de dançar! Todo mundo dançando!', cur.w.face); } else { musicStop(); if (!auto) msg('A festa acabou! Que dança linda!', cur.w.face); } }
function paint() { save.pal = (save.pal + 1) % PALS.length; persist(); const pal = PALS[save.pal]; S.setPaint(pal); sfx.splash(); const p = S.root.position; sparks.burst(p.x, p.y, p.z, 60, [pal.body, pal.wing, pal.acc], 5, { g: 3 }); ship.loop = 1; msg(`Agora a nave é ${pal.n.toLowerCase()}!`, '🎨', { sw: pal.body }); }
function photo() { sfx.shutter(); st.photoReq = true; msg(pick(['Xiiis! Que foto linda!', 'Sorria! Click!', 'Essa foto ficou incrível!']), '📸'); }
function showPolaroid(url) { const w = cur.w; st.photos.unshift(url); if (st.photos.length > 24) st.photos.pop(); const p = $('#pola'); p.querySelector('img').src = url; p.querySelector('span').textContent = `Maria Clara · ${w.icon} ${w.short}`; p.classList.remove('go'); void p.offsetWidth; p.classList.add('go'); }
const ACTIONS = { viajar: openMap, turbo: doTurbo, noite: toggleNight, musica: () => toggleMusic(false), clima: nextWeather, amigo: callFriend, missao: startMission, surpresa: surprise, pintar: paint, foto: photo };

/* ---------- evolução ---------- */
function startEvo(l) { st.evolving = { t: 0, l, done: false }; sfx.evolve(); msg('Olha! O que está acontecendo com a nave?', '✨'); ship.loop = 0; st.turbo = 0; }
function updEvo(dt) { const e = st.evolving; e.t += dt; const p = S.root.position;
  if (e.t < 1.7) for (let i = 0; i < 4; i++) { const a = rnd(TAU), b = rnd(-1, 1), r = rnd(2.5, 4); sparks.spawn({ x: p.x + Math.cos(a) * r, y: p.y + b * r * .6, z: p.z + Math.sin(a) * r, vx: -Math.cos(a) * r * 1.5, vy: -b * r * .9, vz: -Math.sin(a) * r * 1.5, color: pick(['#ffffff', '#ffe36b', '#7ef9ff', '#ff8ae2']), size: rnd(.2, .35), life: .65, bright: 2 }); }
  if (e.t > 1.7 && !e.done) { e.done = true; st.level = e.l; S.setLevel(e.l); updHUD(); flash('#ffffff', 900); st.shake = .5; confettiAt(p, 160, 7); card(`NÍVEL ${e.l}!`, 'SUA NAVE EVOLUIU!', '🚀'); sfx.fanfare(); later(.5, () => msg(LEVEL_MSG[e.l] || 'A nave evoluiu!', '👧')); }
  if (e.t > 3.5) st.evolving = null; }

/* ---------- toque ---------- */
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
function input(x, y) {
  st.lastInput = st.t; st.look.set(x, y); st.lookT = st.t;
  ndc.set(x / G.W * 2 - 1, -(y / G.H) * 2 + 1); ray.setFromCamera(ndc, camera);
  if (st.warp || st.evolving) { const p = ray.ray.at(8, new THREE.Vector3()); sparks.burst(p.x, p.y, p.z, 14, '#ffffff', 2); return; }
  const list = [...PR.filter(p => p.o.userData.tap).map(p => p.o), friend.hit, S.hit, ...G.pickables];
  const hits = ray.intersectObjects(list, true);
  for (const h of hits) { let o = h.object; while (o && !o.userData.tap) o = o.parent; if (o) { o.userData.tap(h); return; } }
  if (st.music) { const p = ray.ray.at(7, new THREE.Vector3()); for (let i = 0; i < 4; i++) sparks.spawn({ x: p.x, y: p.y, z: p.z, vx: rnd(-1, 1), vy: rnd(1, 2.5), color: pick(RAINBOW), size: .4, life: 1.2, bright: 1.6 }); }
  const gp = ray.ray.intersectPlane(groundPlane, new THREE.Vector3());
  if (gp && gp.distanceTo(camera.position) < 26 && gp.z > -16) cur.w.tapGround(gp); else cur.w.tapSky(ray.ray.at(11, new THREE.Vector3()));
}
canvas.addEventListener('pointerdown', e => { e.preventDefault(); if (!st.started) return; ac(); input(e.clientX, e.clientY); }, { passive: false });

/* ---------- loop ---------- */
const IDLE = ['Toque em mim!', 'Vamos apertar um botão colorido?', 'Que tal uma missão? Aperte a estrela!', 'Toque no céu! Tem surpresas!', 'Aperte a música para a gente dançar!', 'Vamos visitar outro planeta? Aperte o foguete!'];
const tmpV = new THREE.Vector3(), camBase = new THREE.Vector3(0, 2.4, 9.6), lookAtV = new THREE.Vector3(0, 2.05, 0);
let frames = 0, ftAcc = 0, qCheck = 0;
function update(dt) {
  st.t += dt; G.t = st.t; G.dt = dt; updTM();
  st.nightK = lerp(st.nightK, st.night ? 1 : 0, 1 - Math.pow(.04, dt)); st.danceK = lerp(st.danceK, st.music ? 1 : 0, 1 - Math.pow(.05, dt));
  if (dayEnv) { applyEnv(st.nightK); if (Math.abs(st.nightK - st.envNight) > .3 || (Math.abs(st.nightK - (st.night ? 1 : 0)) < .02 && Math.abs(st.envNight - (st.night ? 1 : 0)) > .05)) { refreshEnv(); st.envNight = st.nightK; } }
  sky.u.time.value = st.t; bubbleMat().uniforms.time.value = st.t;
  if (st.music && st.t > st.musicEnd) toggleMusic(true);
  st.shake = Math.max(0, st.shake - dt * 1.5);
  if (ship.enter < 1) ship.enter = Math.min(1, ship.enter + dt / 1.3); if (ship.loop > 0) ship.loop = Math.max(0, ship.loop - dt);
  if (st.turbo > 0) st.turbo = Math.max(0, st.turbo - dt);
  shipPose(S.root); S.upd(st.t, st.turbo > 0 || (st.warp && st.warp.t < 1.9) ? 1 : 0, ship.loop > 0 || st.turbo > 0 || st.music || !!st.warp || !!st.evolving);
  shield.position.copy(S.root.position); shield.visible = !!(cur.w && cur.w.water) && !st.warp;
  const eng = S.root.localToWorld(tmpV.set(-1.7, 0, 0)); if (S.level >= 3) trail.push(eng); trail.update(S.level >= 3 && st.started && !(st.warp && st.warp.t > .8 && st.warp.t < 2.2));
  if (st.turbo > 0 || (st.warp && st.warp.t < .9)) for (let i = 0; i < 3; i++) sparks.spawn({ x: eng.x, y: eng.y + rnd(-.15, .15), z: eng.z + rnd(-.15, .15), vx: -rnd(6, 12), color: pick(['#ffe36b', '#ff9d2e', '#ffffff']), size: rnd(.2, .4), life: .4, bright: 2 });
  // farol à noite
  head.intensity = st.nightK * 70; head.position.copy(S.root.position).add(tmpV.set(1, 0, .2)); head.target.position.copy(S.root.position).add(tmpV.set(6, -2.5, 1));
  // amigo
  if (friend) {
    fr.bt -= dt; if (fr.bt <= 0) { fr.blink = .13; fr.bt = rnd(2, 5); } fr.blink -= dt; fr.wave -= dt; fr.eat -= dt; fr.joy -= dt;
    if (fr.jy > 0 || fr.jv !== 0) { fr.jv -= 24 * dt; fr.jy += fr.jv * dt; if (fr.jy <= 0) { fr.jy = 0; fr.jv = 0; fr.sq = .22; } } fr.sq = Math.max(0, fr.sq - dt * 1.3);
    const lk = st.t - st.lookT < 2.5; const tx = lk ? (st.look.x / G.W) * 2 - 1 : (st.visitor ? 0 : -.6), ty = lk ? (st.look.y / G.H) * 2 - 1 : (st.visitor ? -.8 : -.2);
    fr.lx = lerp(fr.lx, clamp(tx * 1.4 - .3, -1, 1), .1); fr.ly = lerp(fr.ly, clamp(ty, -1, 1), .1);
    animateFriend(friend, st.t, { blink: fr.blink > 0, joy: fr.joy > 0, talk: st.talkWho === 'friend' && st.t < st.talkUntil ? .5 + .5 * Math.sin(st.t * 22) : 0, eat: fr.eat > 0 ? fr.eat : 0, lx: fr.lx, ly: fr.ly, wave: fr.wave > 0, dance: st.danceK, jumpY: fr.jy * .5 + fr.lift, squash: fr.sq });
  }
  // noite: vagalumes
  if (st.nightK > .05 && Math.random() < st.nightK * .8) sparks.spawn({ x: rnd(-9, 9), y: rnd(.4, 4.5), z: rnd(-8, 3), vx: rnd(-.3, .3), vy: rnd(-.1, .3), vz: rnd(-.2, .2), color: cur.w ? (cur.w.water ? '#7ffcff' : '#e9ff7a') : '#e9ff7a', size: rnd(.12, .22), life: rnd(2, 3.5), bright: 2.2 });
  // música
  const dk = st.danceK; disco.visible = dk > .02; if (disco.visible) { disco.position.set(0, lerp(10, 6.2, E_OUT(dk)), -.5); disco.rotation.y += dt * 1.5; }
  spots.forEach((s, i) => { s.intensity = dk * 28; s.position.copy(disco.position); const a = st.t * (.9 + i * .3) + i * 2.1; s.target.position.set(Math.cos(a) * 4, 0, Math.sin(a) * 2.5); s.color.setHSL((st.t * .2 + i / 3) % 1, 1, .55);
    const b = beams[i]; b.visible = dk > .02; if (b.visible) { b.position.copy(s.position); b.lookAt(s.target.position); const d = s.position.distanceTo(s.target.position); b.scale.set(1.5, 1.5, d); b.material.color.copy(s.color); b.material.opacity = .07 * dk; } });
  if (dk > .3 && Math.random() < dt * 3) { const h = friendHead(); sparks.spawn({ x: h.x + rnd(-.6, .6), y: h.y + .5, z: h.z, vy: 1.5, vx: rnd(-.5, .5), color: pick(RAINBOW), size: .35, life: 1.4, bright: 1.6 }); }
  // viagem
  if (st.warp) { const w = st.warp; w.t += dt; const on = w.t > .25 && w.t < 2.5; streaks.amt = on ? Math.min(1, (w.t - .25) * 2, (2.6 - w.t) * 2) : 0; streaks.update(dt, camera, 40 + w.t * 50, st.t * .1);
    const tunnel = w.t > .9 && w.t < 1.9; if (cur.group) cur.group.visible = !tunnel; if (friend) friend.root.visible = !tunnel; sky.mesh.visible = !tunnel; S.root.visible = !tunnel; scene.background = tunnel ? new THREE.Color('#04020f') : null;
    if (w.t >= 1.9 && !w.done) { w.done = true; enterWorld(w.to); flash('#ffffff', 900); scene.background = null; sky.mesh.visible = true; S.root.visible = true; }
    camera.fov = baseFov + Math.sin(clamp(w.t / 2.6, 0, 1) * Math.PI) * 22; camera.updateProjectionMatrix(); if (w.t >= 2.7) { st.warp = null; streaks.amt = 0; streaks.lines.visible = false; camera.fov = baseFov; camera.updateProjectionMatrix(); } }
  if (st.evolving) updEvo(dt);
  if (st.started && !st.warp && cur.w) { for (const m of AMB) { m.t -= dt; if (m.t <= 0) { m.t = rnd(m.a, m.b); m.fn(); } } if (st.weather) { st.weatherT -= dt; st.weather.spawn(dt); if (st.weatherT <= 0) { if (st.weather.end) st.weather.end(); st.weather = null; } } }
  if (rbGroup) { const u = rbGroup.userData; u.k = clamp(u.k + (u.on ? dt : -dt) * .8, 0, 1); rbGroup.children.forEach(m => m.material.opacity = u.k * .85); if (!u.on && u.k <= 0) { scene.remove(rbGroup); disposeTree(rbGroup); rbGroup = null; } }
  G.updaters.forEach(f => f(st.t, dt)); updProps(dt); rain.update(dt); sparks.update(dt);
  if (st.started && !st.evolving && !st.warp && !st.mission && levelOf(save.stars) > st.level) startEvo(st.level + 1);
  if (st.started && !st.warp && !st.evolving && st.t - st.lastInput > 18) { st.lastInput = st.t; st.idleN++; if (st.idleN % 3 === 0) SURPRISES[3](); fr.wave = 2.5; fr.jv = 4.5; msg(pick(IDLE), cur.w.face); }
  // câmera cinematográfica
  camBase.set(0, CAM.y, CAM.z);
  camera.position.set(camBase.x + Math.sin(st.t * .13) * .7, camBase.y + Math.sin(st.t * .21) * .18, camBase.z + Math.sin(st.t * .09) * .4);
  if (st.shake > .01) camera.position.add(tmpV.set(rnd(-1, 1), rnd(-1, 1), 0).multiplyScalar(st.shake * .25));
  lookAtV.set(Math.sin(st.t * .13) * .25, CAM.ly, 0); camera.lookAt(lookAtV);
}
let last = performance.now();
function frame(now) {
  const dt = Math.min(.05, Math.max(0, (now - last) / 1000)); last = now;
  try { update(dt); G.composer.render(); if (st.photoReq) { st.photoReq = false; try { showPolaroid(canvas.toDataURL('image/jpeg', .82)); } catch (e) { } flash('#ffffff', 500); } } catch (e) { console.error(e); }
  if (st.started && quality > 0 && st.t > 3) { frames++; ftAcc += dt; if (frames >= 90) { const avg = ftAcc / frames; frames = 0; ftAcc = 0; qCheck++; if (avg > 1 / 32) setQuality(quality - 1); } }
  requestAnimationFrame(frame);
}
function setQuality(q) { quality = q; if (q <= 1) { sun.shadow.mapSize.set(1024, 1024); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } } if (q === 0) { G.bloom.enabled = false; G.renderer.shadowMap.enabled = false; scene.traverse(o => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.needsUpdate = true); }); } layout(); }

/* ---------- modo criança (trava) ---------- */
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches || navigator.standalone === true;
const fsEl = () => document.fullscreenElement || document.webkitFullscreenElement;
const fsOK = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
function requestFS() { const el = document.documentElement, f = el.requestFullscreen || el.webkitRequestFullscreen; if (!f || fsEl()) return; try { const r = f.call(el, { navigationUI: 'hide' }); if (r && r.catch) r.catch(() => { }); } catch (e) { } }
function exitFS() { const f = document.exitFullscreen || document.webkitExitFullscreen; if (f && fsEl()) { try { const r = f.call(document); if (r && r.catch) r.catch(() => { }); } catch (e) { } } }
let wl = null; async function wake() { try { if ('wakeLock' in navigator) wl = await navigator.wakeLock.request('screen'); } catch (e) { } }
let hDepth = 0;
function armHistory() { if (!st.kid) return; try { while (hDepth < 4) { history.pushState({ mc: hDepth }, '', location.href); hDepth++; } } catch (e) { } }
function enterKid() { st.kid = true; if (!isStandalone()) requestFS(); wake(); armHistory(); }
addEventListener('popstate', () => { if (st.kid) { hDepth = Math.max(0, hDepth - 1); armHistory(); } });
document.addEventListener('pointerdown', armHistory, true);
addEventListener('beforeunload', e => { if (st.kid) { e.preventDefault(); e.returnValue = ''; } });
function onFs() { if (st.kid && fsOK && !isStandalone() && !fsEl() && !$('#adult').classList.contains('show') && !$('#pad').classList.contains('show')) $('#resume').classList.add('show'); }
document.addEventListener('fullscreenchange', onFs); document.addEventListener('webkitfullscreenchange', onFs);
$('#resumeBtn').addEventListener('click', () => { requestFS(); $('#resume').classList.remove('show'); });
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { last = performance.now(); if (st.kid) wake(); suspendAll(false); } else { hush(); suspendAll(true); } });
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('dblclick', e => e.preventDefault());
document.addEventListener('touchmove', e => { if (!e.target.closest('.scroll')) e.preventDefault(); }, { passive: false });
document.addEventListener('keydown', e => { if (st.kid && (e.key === 'F5' || (e.ctrlKey && /[rwRW]/.test(e.key)))) e.preventDefault(); });
let holdT = 0; const lb = $('#lockBtn');
lb.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); lb.classList.add('hold'); clearTimeout(holdT); holdT = setTimeout(() => { lb.classList.remove('hold'); openPad(); }, 1500); });
['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => lb.addEventListener(ev, () => { clearTimeout(holdT); lb.classList.remove('hold'); }));
let pin = '', padTm = 0;
$('#keys').innerHTML = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '✕', '0', '⌫'].map(k => `<button class="k${/\d/.test(k) ? '' : ' s'}" data-k="${k}">${k}</button>`).join('');
const updDots = () => $$('#dots i').forEach((d, i) => d.classList.toggle('f', i < pin.length));
function openPad() { pin = ''; updDots(); $('#pad').classList.add('show'); sfx.click(); armPad(); }
function closePad() { $('#pad').classList.remove('show'); clearTimeout(padTm); }
function armPad() { clearTimeout(padTm); padTm = setTimeout(closePad, 25000); }
$('#keys').addEventListener('click', e => { const b = e.target.closest('.k'); if (!b) return; armPad(); const k = b.dataset.k; osc(600, 0, .05, 'square', .03, null, false);
  if (k === '✕') { closePad(); return; } if (k === '⌫') { pin = pin.slice(0, -1); updDots(); return; } if (pin.length < 4) { pin += k; updDots(); }
  if (pin.length === 4) { if (pin === PASS) { closePad(); openAdult(); } else { const d = $('#dots'); d.classList.add('bad'); sfx.wrong(); setTimeout(() => { d.classList.remove('bad'); pin = ''; updDots(); }, 450); } } });
function openAdult() { $('#aStars').textContent = save.stars; $('#aLvl').textContent = st.level; $('#aSound').textContent = `🔊 Som: ${A.sound ? 'ligado' : 'desligado'}`; $('#aVoice').textContent = `🗣️ Voz: ${A.voice ? 'ligada' : 'desligada'}`; $('#aReset').dataset.c = ''; $('#aReset').textContent = '🔄 Zerar progresso';
  $('#aPh').hidden = !st.photos.length; $('#aPhotos').innerHTML = st.photos.map((u, i) => `<a href="${u}" download="maria-clara-foto-${i + 1}.jpg"><img src="${u}" alt=""></a>`).join(''); $('#adult').classList.add('show'); }
$('#aBack').addEventListener('click', () => { $('#adult').classList.remove('show'); if (st.kid && !isStandalone()) requestFS(); });
$('#aSound').addEventListener('click', () => { A.sound = !A.sound; if (!A.sound) { musicStop(); hush(); ambientPad(false); suspendAll(true); } else { suspendAll(false); ambientPad(true, A.key); } openAdult(); });
$('#aVoice').addEventListener('click', () => { A.voice = !A.voice; if (!A.voice) hush(); openAdult(); });
$('#aReset').addEventListener('click', e => { const b = e.currentTarget; if (!b.dataset.c) { b.dataset.c = '1'; b.textContent = 'Toque de novo para confirmar'; return; } save.stars = 0; save.visited = {}; save.pal = 0; persist(); st.level = 1; S.setLevel(1); S.setPaint(PALS[0]); updHUD(); openAdult(); });
$('#aExit').addEventListener('click', () => { st.kid = false; $('#adult').classList.remove('show'); if (st.music) toggleMusic(true); musicStop(); ambientPad(false); hush(); try { wl && wl.release(); } catch (e) { } exitFS(); $('#bye').classList.add('show'); if (isStandalone()) setTimeout(() => { try { window.close(); } catch (e) { } }, 600); });
$('#againBtn').addEventListener('click', () => { $('#bye').classList.remove('show'); enterKid(); ambientPad(true, A.key); msg('Oba! Vamos brincar mais!', cur.w.face); });

/* ---------- instalação PWA ---------- */
let deferredInstall = null;
function showInstall() { if (isStandalone() || st.started) return; const box = $('#installBox'), btn = $('#installBtn'), hint = $('#installHint'); box.hidden = false;
  if (deferredInstall) { btn.hidden = false; hint.innerHTML = 'Instale para abrir direto em tela cheia, sem barra do navegador.'; }
  else if (isIOS) { btn.hidden = true; hint.innerHTML = '📱 <b>Instalar no iPhone:</b> toque em <b>Compartilhar</b> ⬆️ e depois em <b>Adicionar à Tela de Início</b>.'; }
  else { btn.hidden = true; hint.innerHTML = '📲 <b>Instalar como app:</b> no menu <b>⋮</b> do navegador, toque em <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>.'; } }
addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; showInstall(); });
addEventListener('appinstalled', () => { deferredInstall = null; $('#installBtn').hidden = true; $('#installHint').innerHTML = '✅ Instalado! Agora abra pelo ícone 🚀 na tela inicial.'; });
$('#installBox').addEventListener('click', e => e.stopPropagation());
$('#installBtn').addEventListener('click', async e => { e.stopPropagation(); if (!deferredInstall) return; try { deferredInstall.prompt(); const r = await deferredInstall.userChoice; if (r.outcome === 'accepted') { $('#installBtn').hidden = true; $('#installHint').innerHTML = '✅ Instalado! Agora abra pelo ícone 🚀 na tela inicial.'; } } catch (err) { } deferredInstall = null; });
setTimeout(showInstall, 2500);

/* ---------- início ---------- */
function start() { if (st.started) return; st.started = true; ac(); sfx.fanfare(); enterKid(); document.body.classList.add('on'); $('#start').classList.add('hide'); setTimeout(() => $('#start').classList.remove('show'), 700);
  say('Vamos lá, Maria Clara!'); if (window.NaveVoz) setTimeout(() => window.NaveVoz.preload(), 8000); requestAnimationFrame(() => { layout(); enterWorld(st.world); ambientPad(true, A.key); st.lastInput = st.t; }); }
$('#start').addEventListener('click', start);
$$('#dock .b').forEach(b => b.addEventListener('pointerdown', e => { e.preventDefault(); if (!st.started) return; const now = performance.now(); if (now - (b._t || 0) < 380) return; b._t = now; b.classList.remove('press'); void b.offsetWidth; b.classList.add('press'); setTimeout(() => b.classList.remove('press'), 220); ac(); sfx.click(); st.lastInput = st.t; if (st.warp || st.evolving) return; try { ACTIONS[b.dataset.a](); } catch (err) { console.error(err); } }));
$('#planets').addEventListener('click', e => { const b = e.target.closest('.pl'); if (!b) return; $('#map').classList.remove('show'); warpTo(+b.dataset.w); });
$('#mapX').addEventListener('click', () => $('#map').classList.remove('show'));
addEventListener('resize', layout); addEventListener('orientationchange', () => setTimeout(layout, 250));
layout(); updHUD();
// pré-visualização atrás da tela inicial
{ const w = WORLDS[st.world]; const grp = w.build(w); scene.add(grp); cur = { w, group: grp }; friend = makeFriend(w.kind); friend.root.position.copy(FP); friend.root.rotation.y = -.3; scene.add(friend.root); friend.hit.userData.tap = () => tapFriend();
  dayEnv = makeEnv(w.env, false); nightEnv = makeEnv(w.env, true); applyEnv(0); refreshEnv(); scene.fog.near = w.env.fog[1]; scene.fog.far = w.env.fog[2]; $('#where span').textContent = `${w.icon} ${(G.W < 560 ? w.short : w.name).toUpperCase()}`; }
$('#loading').remove();
requestAnimationFrame(t => { last = t; requestAnimationFrame(frame); });
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => { });
window.__nave = { st, G, save, step: n => { for (let i = 0; i < n; i++) update(1 / 30); } };
