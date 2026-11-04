// Som sintetizado com reverb, música e voz
export const A = { sound: true, voice: true, key: 1, onLater: null, onDur: null };
let AC = null, MG = null, NB = null, REV = null, AMB = null;
export function ac() {
  if (!A.sound) return null;
  try {
    if (!AC) {
      const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return null; AC = new Ctx();
      MG = AC.createGain(); MG.gain.value = .6; const comp = AC.createDynamicsCompressor(); MG.connect(comp); comp.connect(AC.destination);
      NB = AC.createBuffer(1, AC.sampleRate, AC.sampleRate); const d = NB.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const len = AC.sampleRate * 2.2, ir = AC.createBuffer(2, len, AC.sampleRate); for (let c = 0; c < 2; c++) { const ch = ir.getChannelData(c); for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
      const conv = AC.createConvolver(); conv.buffer = ir; REV = AC.createGain(); REV.gain.value = .22; REV.connect(conv); conv.connect(comp);
    }
    if (AC.state === 'suspended') AC.resume(); return AC;
  } catch (e) { return null; }
}
export function osc(f, at, d, type = 'sine', vol = .2, f2, rev = true) {
  const a = ac(); if (!a) return; const t = a.currentTime + Math.max(0, at || 0); const o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
  g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + d);
  o.connect(g); g.connect(MG); if (rev) g.connect(REV); o.start(t); o.stop(t + d + .05);
}
export function nz(at, d, vol = .2, type = 'bandpass', f = 1200, f2, q = 1) {
  const a = ac(); if (!a || !NB) return; const t = a.currentTime + Math.max(0, at || 0); const s = a.createBufferSource(); s.buffer = NB;
  const fl = a.createBiquadFilter(); fl.type = type; fl.frequency.setValueAtTime(f, t); if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + d); fl.Q.value = q;
  const g = a.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d);
  s.connect(fl); fl.connect(g); g.connect(MG); g.connect(REV); s.start(t, Math.random() * .4); s.stop(t + d + .05);
}
export const sfx = {
  click: () => osc(900, 0, .05, 'square', .03, null, false),
  pop: () => { osc(420, 0, .1, 'sine', .3, 1300); nz(0, .05, .1, 'highpass', 3000); },
  bloop: () => osc(260, 0, .2, 'sine', .25, 800),
  boing: () => { osc(180, 0, .3, 'sine', .3, 560); osc(560, .14, .25, 'triangle', .12, 260); },
  sparkle: () => [1568, 2093, 2637, 3136].forEach((f, i) => osc(f, i * .045, .25, 'triangle', .07)),
  chime: () => [1047, 1319, 1568, 2093].forEach((f, i) => osc(f, i * .07, .6, 'sine', .1)),
  giggle: () => [700, 880, 760, 960, 820, 1040].forEach((f, i) => osc(f, i * .065, .07, 'triangle', .11, f * 1.15)),
  magic: () => { osc(500, 0, .6, 'triangle', .1, 1600); [1319, 1568, 2093].forEach((f, i) => osc(f, .2 + i * .07, .4, 'sine', .07)); },
  turbo: () => { osc(90, 0, 1.4, 'sawtooth', .07, 700); nz(0, 1.4, .25, 'bandpass', 200, 2600, 1.5); },
  warp: () => { osc(70, 0, 2, 'sawtooth', .06, 1400); osc(140, 0, 2, 'square', .025, 2600); nz(0, 2, .25, 'bandpass', 200, 5000, 1.2); osc(1300, 1.9, .6, 'sine', .14, 300); nz(1.9, .8, .3, 'lowpass', 2400, 200); },
  boom: () => { nz(0, .7, .4, 'lowpass', 900, 100); osc(110, 0, .5, 'sine', .32, 40); },
  launch: () => nz(0, .55, .12, 'highpass', 1500, 5000),
  chomp: () => { osc(180, 0, .08, 'square', .1, 90); osc(170, .13, .08, 'square', .1, 85); },
  crack: () => { nz(0, .08, .35, 'bandpass', 2500); nz(.07, .06, .25, 'bandpass', 3500); },
  shutter: () => { nz(0, .04, .4, 'highpass', 2500); nz(.09, .05, .3, 'highpass', 2000); },
  wrong: () => { osc(330, 0, .16, 'sine', .13, 290); osc(290, .16, .22, 'sine', .13, 250); },
  ding: n => { osc(784 * Math.pow(1.122, n), 0, .45, 'sine', .18); osc(1568 * Math.pow(1.122, n), 0, .3, 'triangle', .05); },
  star: n => { osc(988 + n * 30, 0, .3, 'sine', .14); osc(1480 + n * 40, .06, .25, 'triangle', .06); },
  fanfare: () => [[523, 0], [659, .12], [784, .24], [1047, .36], [784, .56], [1047, .68]].forEach(([f, t]) => { osc(f, t, .32, 'square', .045); osc(f, t, .4, 'triangle', .1); }),
  evolve: () => { for (let i = 0; i < 20; i++) osc(300 * Math.pow(1.09, i), i * .08, .22, 'triangle', .07); osc(200, 0, 1.7, 'sine', .1, 1600); },
  ring: () => { for (let i = 0; i < 4; i++) { osc(1200, i * .2, .08, 'square', .04); osc(1500, i * .2 + .09, .08, 'square', .04); } },
  whale: () => { osc(220, 0, 1.5, 'sine', .18, 140); osc(160, 1.3, 1.3, 'sine', .15, 240); },
  splash: () => { nz(0, .35, .3, 'bandpass', 900, 300, 1); osc(300, 0, .2, 'sine', .2, 700); },
  grow: () => osc(300, 0, .5, 'triangle', .12, 900),
  hum: () => osc(300, 0, 2.6, 'sine', .05, 620),
  birthday: () => [[392, 0, .2], [392, .25, .15], [440, .42, .35], [392, .8, .35], [523, 1.2, .35], [494, 1.6, .6]].forEach(([f, t, d]) => osc(f, t, d, 'triangle', .14))
};
const BPM = 118, MEL = [0, -1, 2, -1, 4, -1, 2, -1, 3, -1, 5, -1, 4, 2, -1, -1, 0, -1, 2, 4, 5, -1, 7, -1, 6, 5, 4, 2, 4, -1, -1, -1], BASE = [261.63, 293.66, 329.63, 392, 440];
const nf = (i, k) => BASE[i % 5] * Math.pow(2, Math.floor(i / 5)) * k;
let seqT = null, step = 0, next = 0;
export function musicStart() {
  const a = ac(); if (!a) return; musicStop(); step = 0; next = a.currentTime + .06;
  seqT = setInterval(() => { if (!AC) return; while (next < AC.currentTime + .2) { const d = next - AC.currentTime, i = step, k = A.key;
    if (i % 4 === 0) osc(150, d, .22, 'sine', .38, 45, false); if (i % 4 === 2) nz(d, .05, .06, 'highpass', 7000); if (i % 8 === 4) nz(d, .14, .11, 'bandpass', 1800);
    const m = MEL[i]; if (m >= 0) { osc(nf(m, k), d, .24, 'triangle', .08); osc(nf(m, k) * 2, d, .12, 'sine', .025); }
    if (i % 8 === 0) osc(nf(0, k) / 2, d, .45, 'sine', .15, null, false); if (i % 8 === 4) osc(nf(2, k) / 2, d, .45, 'sine', .12, null, false);
    step = (step + 1) % 32; next += 60 / BPM / 2; } }, 40);
}
export function musicStop() { if (seqT) { clearInterval(seqT); seqT = null; } }
export function ambientPad(on, key = 1) {
  const a = ac(); if (AMB) { const old = AMB; AMB = null; try { old.g.gain.setTargetAtTime(.0001, a ? a.currentTime : 0, .6); setTimeout(() => old.o.forEach(o => o.stop()), 2500); } catch (e) { } }
  if (!on || !a) return; const g = a.createGain(); g.gain.value = .0001; g.connect(MG); g.connect(REV);
  const o = [196 * key, 246.9 * key, 293.7 * key, 392 * key].map((f, i) => { const os = a.createOscillator(); os.type = 'sine'; os.frequency.value = f; const lfo = a.createOscillator(), lg = a.createGain(); lfo.frequency.value = .07 + i * .03; lg.gain.value = f * .004; lfo.connect(lg); lg.connect(os.frequency); lfo.start(); os.connect(g); os.start(); return os; });
  g.gain.setTargetAtTime(.022, a.currentTime, 2); AMB = { g, o };
}
export function suspendAll(on) { if (window.NaveVoz) window.NaveVoz.suspend(on); if (!AC) return; on ? AC.suspend() : AC.resume(); }

let ptVoice = null;
function loadVoices() { try { const v = speechSynthesis.getVoices(); ptVoice = v.find(x => /pt[-_]BR/i.test(x.lang) && /female|luciana|francisca|vitoria|google/i.test(x.name)) || v.find(x => /pt[-_]BR/i.test(x.lang)) || v.find(x => /^pt/i.test(x.lang)) || null; } catch (e) { } }
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
export function say(text) {
  if (!A.voice || !A.sound) return; const NV = window.NaveVoz;
  if (NV && NV.say(text, d => A.onDur && A.onDur(d))) { try { speechSynthesis.cancel(); } catch (e) { } return; }
  ttsSay(text);
}
if (window.NaveVoz) window.NaveVoz.fallback = t => ttsSay(t);
function ttsSay(text) {
  if (!A.voice || !A.sound || !('speechSynthesis' in window)) return;
  try { speechSynthesis.cancel(); const clean = text.replace(/\p{Extended_Pictographic}|️/gu, '').trim(); if (!clean) return; const u = new SpeechSynthesisUtterance(clean); u.lang = 'pt-BR'; u.rate = .98; u.pitch = 1.25; if (ptVoice) u.voice = ptVoice; speechSynthesis.speak(u); } catch (e) { }
}
export function hush() { try { speechSynthesis.cancel(); } catch (e) { } if (window.NaveVoz) window.NaveVoz.hush(); }
