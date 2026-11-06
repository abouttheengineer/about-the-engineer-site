/**
 * LessonAppMock — clickable sample of an English-lesson call app, shown on the
 * Consulting page as a "development example". Pure illustration: no real
 * people, accounts or network calls. Screens: home / book / call.
 */
function LessonAppMock() {
  const NAVY = '#1E3A5F';
  const PALE = '#EAF1F7';
  const days = [['月', 10], ['火', 11], ['水', 12], ['木', 13], ['金', 14]];
  const times = ['10:00', '13:00', '16:00', '19:00', '20:00'];
  const full = ['13:00'];

  const [screen, setScreen] = React.useState('home');
  const [day, setDay] = React.useState(0);
  const [time, setTime] = React.useState(null);
  const [booked, setBooked] = React.useState([]);
  const [seconds, setSeconds] = React.useState(0);
  const [muted, setMuted] = React.useState(false);
  const [camOff, setCamOff] = React.useState(false);

  React.useEffect(() => {
    if (screen !== 'call') return undefined;
    setSeconds(0);
    const t = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(t);
  }, [screen]);

  const mmss = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  const book = () => {
    if (!time) return;
    setBooked(b => [...b, { label: `${days[day][1]}日(${days[day][0]}) ${time}` }]);
    setTime(null);
    setScreen('home');
  };
  const enterCall = () => { setMuted(false); setCamOff(false); setScreen('call'); };

  const btn = (extra = {}) => ({
    border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13,
    borderRadius: 999, padding: '10px 16px', ...extra,
  });
  const title = { fontWeight: 700, fontSize: 15, color: 'var(--zinc-950)' };

  const Avatar = ({ size = 40 }) => (
    <div style={{ width: size, height: size, borderRadius: '50%', background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: size * 0.4, flexShrink: 0 }}>E</div>
  );

  return (
    <div style={{ width: 280, margin: '0 auto' }}>
      {/* Phone frame */}
      <div style={{ position: 'relative', width: 280, height: 560, border: '8px solid var(--zinc-950)', borderRadius: 38, background: '#fff', overflow: 'hidden', boxSizing: 'border-box', boxShadow: '0 20px 40px rgba(9,9,11,0.18)' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 90, height: 18, background: 'var(--zinc-950)', borderRadius: '0 0 12px 12px', zIndex: 5 }} />

        {screen !== 'call' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', paddingTop: 30 }}>
            <div style={{ flex: 1, overflowY: 'auto', padding: '8px 16px 16px' }}>
              {screen === 'home' && (
                <div>
                  <div style={{ fontSize: 12, color: 'var(--neutral-600)' }}>こんにちは</div>
                  <div style={{ ...title, fontSize: 18, marginTop: 2 }}>今日のレッスン</div>
                  <div style={{ marginTop: 12, background: PALE, borderRadius: 14, padding: 14 }}>
                    <div style={{ fontSize: 12, color: 'var(--neutral-600)' }}>19:00 〜 19:25</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
                      <Avatar />
                      <div>
                        <div style={{ ...title }}>Emma 先生</div>
                        <div style={{ fontSize: 12, color: 'var(--neutral-600)' }}>日常英会話</div>
                      </div>
                    </div>
                    <button onClick={enterCall} style={btn({ width: '100%', marginTop: 14, background: NAVY, color: '#fff' })}>レッスンに入る</button>
                  </div>
                  <div style={{ ...title, marginTop: 20 }}>次のレッスン</div>
                  {booked.length === 0 && <div style={{ marginTop: 8, fontSize: 12, color: 'var(--neutral-600)', lineHeight: 1.7 }}>まだ予約がありません。「予約」からレッスンを予約できます。</div>}
                  {booked.map((b, i) => (
                    <div key={i} style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, border: '1px solid var(--neutral-200)', borderRadius: 12, padding: '10px 12px' }}>
                      <Avatar size={30} />
                      <div style={{ fontSize: 13, fontWeight: 700 }}>{b.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {screen === 'book' && (
                <div>
                  <div style={{ ...title, fontSize: 18 }}>レッスンを予約</div>
                  <div style={{ marginTop: 14, display: 'flex', gap: 6 }}>
                    {days.map(([d, n], i) => (
                      <button key={d} onClick={() => { setDay(i); setTime(null); }} style={btn({ flex: 1, padding: '8px 0', borderRadius: 12, fontSize: 12, background: day === i ? NAVY : PALE, color: day === i ? '#fff' : 'var(--zinc-950)' })}>
                        <div>{d}</div><div style={{ fontSize: 14, marginTop: 2 }}>{n}</div>
                      </button>
                    ))}
                  </div>
                  <div style={{ marginTop: 16, fontSize: 12, color: 'var(--neutral-600)' }}>時間を選んでください</div>
                  <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {times.map(t => {
                      const off = full.includes(t);
                      const on = time === t;
                      return (
                        <button key={t} disabled={off} onClick={() => setTime(t)} style={btn({ borderRadius: 12, fontSize: 13, background: on ? NAVY : '#fff', color: on ? '#fff' : off ? 'var(--neutral-300)' : 'var(--zinc-950)', border: `1px solid ${on ? NAVY : 'var(--neutral-300)'}`, cursor: off ? 'default' : 'pointer' })}>
                          {t}{off ? '（満席）' : ''}
                        </button>
                      );
                    })}
                  </div>
                  <button onClick={book} disabled={!time} style={btn({ width: '100%', marginTop: 18, background: time ? NAVY : 'var(--neutral-200)', color: time ? '#fff' : 'var(--neutral-600)', cursor: time ? 'pointer' : 'default' })}>予約する</button>
                </div>
              )}
            </div>

            {/* Tab bar */}
            <div style={{ display: 'flex', borderTop: '1px solid var(--neutral-200)' }}>
              {[['home', 'ホーム'], ['book', '予約']].map(([k, l]) => (
                <button key={k} onClick={() => setScreen(k)} style={{ flex: 1, border: 'none', background: '#fff', padding: '12px 0 14px', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 700, color: screen === k ? NAVY : 'var(--neutral-600)', borderTop: `2px solid ${screen === k ? NAVY : 'transparent'}`, marginTop: -1 }}>{l}</button>
              ))}
            </div>
          </div>
        )}

        {screen === 'call' && (
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, #3b5f8a 0%, ${NAVY} 100%)`, color: '#fff' }}>
            {/* Remote video (illustration) */}
            <div style={{ position: 'absolute', left: '50%', top: 120, transform: 'translateX(-50%)', textAlign: 'center' }}>
              <div style={{ width: 84, height: 84, borderRadius: '50%', background: 'rgba(255,255,255,0.85)', margin: '0 auto' }} />
              <div style={{ width: 170, height: 100, borderRadius: '85px 85px 0 0', background: 'rgba(255,255,255,0.85)', margin: '8px auto 0' }} />
            </div>
            <div style={{ position: 'absolute', top: 36, left: 0, right: 0, textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Emma 先生</div>
              <div style={{ fontSize: 13, opacity: 0.85, marginTop: 2 }}>{mmss}</div>
            </div>
            {/* Self view */}
            <div style={{ position: 'absolute', top: 36, right: 12, width: 64, height: 88, borderRadius: 10, background: camOff ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, textAlign: 'center', padding: 4 }}>
              {camOff ? 'カメラ\nオフ' : 'あなた'}
            </div>
            {muted && <div style={{ position: 'absolute', bottom: 120, left: 0, right: 0, textAlign: 'center', fontSize: 12, opacity: 0.9 }}>マイクをオフにしています</div>}
            {/* Controls */}
            <div style={{ position: 'absolute', bottom: 28, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 10 }}>
              <button onClick={() => setMuted(m => !m)} style={btn({ background: muted ? '#fff' : 'rgba(255,255,255,0.22)', color: muted ? NAVY : '#fff', padding: '10px 14px' })}>{muted ? 'ミュート中' : 'ミュート'}</button>
              <button onClick={() => setCamOff(c => !c)} style={btn({ background: camOff ? '#fff' : 'rgba(255,255,255,0.22)', color: camOff ? NAVY : '#fff', padding: '10px 14px' })}>{camOff ? 'カメラ入' : 'カメラ'}</button>
              <button onClick={() => setScreen('home')} style={btn({ background: '#d64545', color: '#fff', padding: '10px 14px' })}>終了</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

window.LessonAppMock = LessonAppMock;
