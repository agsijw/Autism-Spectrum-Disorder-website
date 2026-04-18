import React, { useRef, useState, useEffect } from 'react';

export default function Simulator() {
  const rootRef      = useRef(null);
  const overlayRef   = useRef(null);
  const flickerRef   = useRef(null);
  const movBtnRef    = useRef(null);
  const taskZoneRef  = useRef(null);

  const [visualOn, setVisualOn]   = useState(false);
  const [audioOn, setAudioOn]     = useState(false);
  const [blurLevel, setBlurLevel] = useState(2);
  const [hits, setHits]           = useState(0);
  const [misses, setMisses]       = useState(false);
  const [timer, setTimer]         = useState('—');
  const [status, setStatus]       = useState('جاهز للتجربة — فعّل التأثيرات أولاً لتجربة كاملة.');
  const [statusColor, setStatusColor] = useState('#93c5fd');
  const [taskRunning, setTaskRunning] = useState(false);
  const [taskBtnVisible, setTaskBtnVisible] = useState(false);
  const [taskMsg, setTaskMsg]     = useState('اضغط "ابدأ المهمة" للبدء');
  const [showTaskMsg, setShowTaskMsg] = useState(true);

  const shakeIvRef   = useRef(null);
  const flickerIvRef = useRef(null);
  const moveIvRef    = useRef(null);
  const countIvRef   = useRef(null);
  const pulseIvRef   = useRef(null);
  const audioCtxRef  = useRef(null);
  const noiseRef     = useRef(null);
  const gainRef      = useRef(null);
  const hitsRef      = useRef(0);
  const missesRef    = useRef(0);
  const taskSecsRef  = useRef(20);
  const taskRunRef   = useRef(false);
  const mouseBlurRef = useRef(0);

  // ── Visual Effects ──────────────────────────────
  const applyBlur = (extra) => {
    if (!overlayRef.current) return;
    const b = Math.min(14, blurLevel * 1.6 + extra);
    overlayRef.current.style.backdropFilter = `blur(${b.toFixed(1)}px)`;
    overlayRef.current.style.webkitBackdropFilter = `blur(${b.toFixed(1)}px)`;
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (!taskRunRef.current && !visualOn) return;
      const speed = Math.hypot(e.movementX, e.movementY);
      mouseBlurRef.current = Math.min(9, speed * 0.2);
      applyBlur(mouseBlurRef.current);
      setTimeout(() => { mouseBlurRef.current = 0; applyBlur(0); }, 280);
    };
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, [visualOn, blurLevel]);

  const startShake = () => {
    shakeIvRef.current = setInterval(() => {
      if (!rootRef.current) return;
      const x = (Math.random()-.5)*7, y = (Math.random()-.5)*5, r = (Math.random()-.5)*1.8;
      rootRef.current.style.transform = `translate(${x}px,${y}px) rotate(${r}deg)`;
      setTimeout(() => { if (rootRef.current) rootRef.current.style.transform = ''; }, 65);
    }, 170);
  };

  const startFlicker = () => {
    let f = false;
    flickerIvRef.current = setInterval(() => {
      if (!flickerRef.current) return;
      f = !f;
      flickerRef.current.style.background = f ? 'rgba(255,255,255,0.05)' : 'transparent';
    }, 100 + Math.random()*200);
  };

  const stopVisual = () => {
    clearInterval(shakeIvRef.current);
    clearInterval(flickerIvRef.current);
    if (rootRef.current)   rootRef.current.style.transform = '';
    if (overlayRef.current) overlayRef.current.style.backdropFilter = 'none';
    if (flickerRef.current) flickerRef.current.style.background = 'transparent';
  };

  const toggleVisual = () => {
    if (!visualOn) {
      startShake(); startFlicker(); applyBlur(0);
      setStatus('التشتت البصري مُفعَّل — حرّك الفأرة بسرعة لزيادة التشويش.');
      setStatusColor('#fca5a5');
    } else {
      stopVisual();
      setStatus('التأثير البصري متوقف.');
      setStatusColor('#93c5fd');
    }
    setVisualOn(v => !v);
  };

  // ── Audio Effects ───────────────────────────────
  const createNoise = () => {
    if (!audioCtxRef.current)
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = audioCtxRef.current;
    const buf = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random()*2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf; src.loop = true;
    gainRef.current = ctx.createGain();
    gainRef.current.gain.value = 0.08;
    src.connect(gainRef.current); gainRef.current.connect(ctx.destination);
    src.start(); noiseRef.current = src;
    let up = true;
    pulseIvRef.current = setInterval(() => {
      if (!gainRef.current) return;
      gainRef.current.gain.value = up ? 0.15 : 0.04; up = !up;
    }, 380 + Math.random()*250);
  };

  const stopAudio = () => {
    try { if (noiseRef.current) noiseRef.current.stop(); } catch(e){}
    noiseRef.current = null; gainRef.current = null;
    clearInterval(pulseIvRef.current);
  };

  const toggleAudio = () => {
    if (!audioOn) {
      createNoise();
      setStatus('الضجيج السمعي شُغِّل — أغمض عينيك وحاول التركيز.');
      setStatusColor('#fca5a5');
    } else {
      stopAudio();
      setStatus('الضجيج السمعي متوقف.');
      setStatusColor('#93c5fd');
    }
    setAudioOn(a => !a);
  };

  // ── Task ────────────────────────────────────────
  const rndPos = () => {
    const zone = taskZoneRef.current;
    if (!zone) return { x: 10, y: 10 };
    return {
      x: 10 + Math.random() * Math.max(10, zone.clientWidth  - 110),
      y: 10 + Math.random() * Math.max(10, zone.clientHeight - 50),
    };
  };

  const moveButton = () => {
    if (!movBtnRef.current) return;
    const p = rndPos();
    movBtnRef.current.style.left = p.x + 'px';
    movBtnRef.current.style.top  = p.y + 'px';
  };

  const endTask = () => {
    taskRunRef.current = false;
    setTaskRunning(false);
    clearInterval(moveIvRef.current);
    clearInterval(countIvRef.current);
    setTaskBtnVisible(false);
    const h = hitsRef.current, m = missesRef.current;
    const rate = (h+m) > 0 ? Math.round(h/(h+m)*100) : 0;
    setTaskMsg(`انتهت المهمة! ✓ نجاح ${h} — دقة ${rate}%`);
    setShowTaskMsg(true);
    setTimer('0');
    setStatus('هكذا يشعر كثيرون يومياً — الحمل الحسي يجعل أبسط المهام صعبة.');
    setStatusColor('#86efac');
  };

  const startTask = () => {
    hitsRef.current = 0; missesRef.current = 0; taskSecsRef.current = 20;
    setHits(0); setMisses(0); setTimer('20');
    setShowTaskMsg(false);
    setTaskBtnVisible(true);
    taskRunRef.current = true;
    setTaskRunning(true);
    setTimeout(moveButton, 50);
    const speed = visualOn ? 850 : 1500;
    moveIvRef.current = setInterval(() => { if (taskRunRef.current) moveButton(); }, speed);
    countIvRef.current = setInterval(() => {
      taskSecsRef.current--;
      setTimer(String(taskSecsRef.current));
      if (taskSecsRef.current <= 0) endTask();
    }, 1000);
    setStatus('اضغط على الزر الأخضر! — الوقت يداهمك...');
    setStatusColor('#fcd34d');
  };

  const onMovingBtnClick = (e) => {
    e.stopPropagation();
    if (!taskRunRef.current) return;
    hitsRef.current++;
    setHits(hitsRef.current);
    moveButton();
    setStatus('أحسنت! حاول مرة أخرى...');
  };

  const onZoneClick = (e) => {
    if (!taskRunRef.current || e.target === movBtnRef.current) return;
    missesRef.current++;
    setMisses(missesRef.current);
  };

  useEffect(() => () => { stopVisual(); stopAudio(); clearInterval(moveIvRef.current); clearInterval(countIvRef.current); }, []);

  // ── Render ──────────────────────────────────────
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", direction: 'rtl', background: '#f0f4ff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: '#2563eb', color: '#fff', textAlign: 'center', padding: '40px 24px 32px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 12, padding: '4px 14px', borderRadius: 20, marginBottom: 12 }}>
          تجريبي — للتوعية فقط
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 10px' }}>محاكي الحمل الحسي</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          تجربة تفاعلية تُتيح لك الشعور بجزء بسيط من التحدي اليومي لذوي اضطراب طيف التوحد
        </p>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '28px 20px 60px' }}>

        {/* Warning */}
        <div style={{ background: '#dbeafe', borderRight: '4px solid #2563eb', borderRadius: 10, padding: '12px 16px', marginBottom: 24, fontSize: 13, color: '#1e40af', lineHeight: 1.7 }}>
          <strong>ملاحظة:</strong> أداة توعوية مبسّطة. إذا كنت مصاباً بالصرع أو حساساً للوميض، تجنّب التأثير البصري.
        </div>

        {/* Simulator Shell */}
        <div ref={rootRef} style={{ background: '#1e3a8a', borderRadius: 16, overflow: 'hidden', position: 'relative', boxShadow: '0 8px 40px rgba(30,58,138,0.28)', color: '#fff' }}>
          <div ref={overlayRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: 16, zIndex: 5 }} />
          <div ref={flickerRef} style={{ position: 'absolute', inset: 0, borderRadius: 16, pointerEvents: 'none', zIndex: 6, background: 'transparent' }} />

          {/* Sim Header */}
          <div style={{ background: '#162d6e', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, background: '#3b82f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, flexShrink: 0 }}>م</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>محاكي التوحد — منصة معاً</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>فعّل التأثيرات واختبر المهمة لتفهم الحمل الحسي</div>
            </div>
          </div>

          {/* Sim Body */}
          <div style={{ padding: '20px 24px 24px' }}>

            {/* Visual Card */}
            <SimCard title="التأثير البصري — الحمل الحسي" desc="يشعر كثير من ذوي التوحد بأن الضوء والحركة تتضخّم وتُشتّت التركيز. فعّل التأثير ثم حرّك الفأرة بسرعة.">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>شدة التشويش</label>
                <input type="range" min="1" max="5" value={blurLevel} step="1"
                  onChange={e => setBlurLevel(parseInt(e.target.value))}
                  style={{ flex: 1, accentColor: '#3b82f6' }} />
                <span style={{ fontSize: 12, color: '#93c5fd', minWidth: 20 }}>{blurLevel}</span>
              </div>
              <Btn onClick={toggleVisual} active={visualOn} color={visualOn ? '#ef4444' : '#3b82f6'}>
                {visualOn ? 'إيقاف التشتت البصري' : 'تفعيل التشتت البصري'}
              </Btn>
            </SimCard>

            {/* Audio Card */}
            <SimCard title="التأثير السمعي — الضجيج الحسي" desc="الأصوات البيئية المتداخلة تُصعّب التركيز. الضجيج الأبيض مع النبضات يُحاكي البيئة الصاخبة.">
              <Btn onClick={toggleAudio} active={audioOn} color={audioOn ? '#b91c1c' : '#1d4ed8'}>
                {audioOn ? 'إيقاف الضجيج السمعي' : 'تشغيل الضجيج السمعي'}
              </Btn>
            </SimCard>

            {/* Task Card */}
            <SimCard title="المهمة التفاعلية — اختبر التركيز" desc="حاول الضغط على الزر الأخضر المتحرك خلال 20 ثانية. فعّل التأثيرات أولاً!">
              <div ref={taskZoneRef} onClick={onZoneClick}
                style={{ position: 'relative', minHeight: 110, background: 'rgba(0,0,0,0.22)', borderRadius: 10, border: '1px dashed rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: 10 }}>
                {showTaskMsg && <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{taskMsg}</span>}
                {taskBtnVisible && (
                  <button ref={movBtnRef} onClick={onMovingBtnClick}
                    style={{ position: 'absolute', padding: '9px 18px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: 8, fontFamily: 'inherit', fontSize: 13, fontWeight: 700, cursor: 'pointer', zIndex: 10 }}>
                    اضغطني!
                  </button>
                )}
              </div>

              {/* Score */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                {[['النجاحات', hits], ['الوقت', timer], ['الإخفاقات', misses]].map(([l, v]) => (
                  <div key={l} style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 8, padding: '8px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.48)' }}>{l}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: '#93c5fd' }}>{v}</div>
                  </div>
                ))}
              </div>

              {!taskRunning && <Btn onClick={startTask} color="#f59e0b" textColor="#1a1a1a">ابدأ المهمة</Btn>}
            </SimCard>

            {/* Status */}
            <div style={{ padding: '9px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 500, background: 'rgba(59,130,246,0.15)', color: statusColor, lineHeight: 1.5 }}>
              {status}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ── Small helpers ───────────────────────────────────────
function SimCard({ title, desc, children }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '16px 20px', marginBottom: 14 }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: '#93c5fd', marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, marginBottom: 12 }}>{desc}</div>
      {children}
    </div>
  );
}

function Btn({ onClick, color = '#3b82f6', textColor = '#fff', children }) {
  return (
    <button onClick={onClick}
      style={{ padding: '9px 18px', borderRadius: 8, border: 'none', background: color, color: textColor, fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
      {children}
    </button>
  );
}
