/* Vozes naturais (ElevenLabs) para a Nave Estelar — usado pelas duas versões.
   Procura a fala em voz/manifest.json; se não existir, devolve false e o jogo usa a voz do aparelho. */
(function () {
  'use strict';
  var base = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  var map = null, buffers = {}, order = [], loading = {}, cur = null, ctx = null, out = null, token = 0;
  function clean(t) { return String(t).replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}️‍]/gu, '').replace(/\s+/g, ' ').trim(); }
  var ready = fetch(base + 'manifest.json', { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : {}; }).then(function (m) { map = m || {}; }).catch(function () { map = {}; });
  function audioCtx() {
    if (ctx) return ctx;
    try { var C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); out = ctx.createGain(); out.gain.value = 1; out.connect(ctx.destination); } catch (e) { ctx = null; }
    return ctx;
  }
  function load(file) {
    if (buffers[file]) return Promise.resolve(buffers[file]);
    if (loading[file]) return loading[file];
    var c = audioCtx(); if (!c) return Promise.reject(new Error('sem audio'));
    loading[file] = fetch(base + file).then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.arrayBuffer(); })
      .then(function (ab) { return new Promise(function (res, rej) { c.decodeAudioData(ab, res, rej); }); })
      .then(function (b) { buffers[file] = b; order.push(file); if (order.length > 24) delete buffers[order.shift()]; delete loading[file]; return b; })
      .catch(function (e) { delete loading[file]; throw e; });
    return loading[file];
  }
  function stop() { token++; if (cur) { try { cur.stop(); } catch (e) { } cur = null; } }
  var V = {
    ctx: null,
    has: function (text) { return !!(map && map[clean(text)]); },
    /* toca a fala; onDur(segundos) avisa a duração (para a boca do personagem). Retorna true se vai tocar. */
    say: function (text, onDur) {
      var key = clean(text);
      if (map === null) { stop(); var t0 = token, ts = Date.now(); ready.then(function () { if (t0 !== token) return; if (map[key] && Date.now() - ts < 2500) { token--; V.say(text, onDur); } else if (V.fallback) V.fallback(text); }); return true; }
      if (!map[key]) return false;
      var c = audioCtx(); if (!c) return false;
      if (c.state === 'suspended') { try { c.resume(); } catch (e) { } }
      stop(); var my = token;
      load(map[key]).then(function (b) {
        if (my !== token) return;
        var s = c.createBufferSource(); s.buffer = b; s.connect(out); s.start(); cur = s;
        if (onDur) onDur(b.duration);
        s.onended = function () { if (cur === s) cur = null; };
      }).catch(function () { if (my === token && V.fallback) V.fallback(text); });
      return true;
    },
    hush: stop,
    unlock: function () { var c = audioCtx(); if (c && c.state === 'suspended') { try { c.resume(); } catch (e) { } } },
    suspend: function (on) { if (!ctx) return; try { on ? ctx.suspend() : ctx.resume(); } catch (e) { } },
    /* baixa as falas aos poucos para funcionar sem internet depois */
    preload: function (texts) {
      ready.then(function () {
        var files = texts ? texts.map(function (t) { return map[clean(t)]; }).filter(Boolean) : Object.keys(map).map(function (k) { return map[k]; });
        var i = 0; (function next() { if (i >= files.length) return; var f = files[i++]; (texts ? load(f) : fetch(base + f)).catch(function () { }).then(function () { setTimeout(next, texts ? 0 : 150); }); })();
      });
    },
    fallback: null, ready: ready
  };
  document.addEventListener('pointerdown', V.unlock, true);
  window.NaveVoz = V;
})();
