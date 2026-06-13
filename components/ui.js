import { useState, useEffect } from 'react';

export const C = {
  buy: '#1a9e5c', buyBg: '#e6f7ef', buyText: '#0e6b3d',
  sell: '#d94040', sellBg: '#fce8e8', sellText: '#8f1f1f',
  hold: '#c07a10', holdBg: '#fef3e2', holdText: '#7a4b00',
  info: '#1a6fc4', infoBg: '#e8f1fc', infoText: '#0c3d78',
  neutral: '#6b7280', neutralBg: '#f3f4f6', neutralText: '#374151',
};

const BADGE_MAP = {
  BUY: { bg: '#e6f7ef', color: '#0e6b3d' },
  SELL: { bg: '#fce8e8', color: '#8f1f1f' },
  HOLD: { bg: '#fef3e2', color: '#7a4b00' },
  BEAT: { bg: '#e6f7ef', color: '#0e6b3d' },
  MISS: { bg: '#fce8e8', color: '#8f1f1f' },
  RAISED: { bg: '#e6f7ef', color: '#0e6b3d' },
  INLINE: { bg: '#e8f1fc', color: '#0c3d78' },
  WATCH: { bg: '#fef3e2', color: '#7a4b00' },
  CAUTION: { bg: '#fce8e8', color: '#8f1f1f' },
  ACCUMULATE: { bg: '#e6f7ef', color: '#0e6b3d' },
  BOTTOM: { bg: '#e6f7ef', color: '#0e6b3d' },
  TURNAROUND: { bg: '#e8f1fc', color: '#0c3d78' },
  VALUE: { bg: '#e6f7ef', color: '#0e6b3d' },
  CHEAP: { bg: '#e6f7ef', color: '#0e6b3d' },
  FAIR: { bg: '#fef3e2', color: '#7a4b00' },
  EXPENSIVE: { bg: '#fce8e8', color: '#8f1f1f' },
  ALERT: { bg: '#fef3e2', color: '#7a4b00' },
  REVIEW: { bg: '#fef3e2', color: '#7a4b00' },
  NEUTRAL: { bg: '#f3f4f6', color: '#374151' },
};

export function Badge({ type, label }) {
  const key = (type || '').toUpperCase().replace(/ /g, '_');
  const style = BADGE_MAP[key] || { bg: '#f3f4f6', color: '#374151' };
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, padding: '2px 8px',
      borderRadius: 99, background: style.bg, color: style.color, whiteSpace: 'nowrap',
    }}>
      {label || type}
    </span>
  );
}

export function Pct({ val }) {
  const color = val >= 0 ? C.buy : C.sell;
  return (
    <span style={{ color, fontWeight: 500 }}>
      {val >= 0 ? '▲' : '▼'} {Math.abs(val).toFixed(2)}%
    </span>
  );
}

export function Divider() {
  return <div style={{ borderTop: '0.5px solid #f3f4f6', margin: '10px 0' }} />;
}

export function Card({ children, style = {}, highlight = false }) {
  return (
    <div style={{
      background: 'white',
      border: highlight ? '1.5px solid #b8d4f4' : '0.5px solid #e5e7eb',
      borderRadius: 12,
      padding: '16px 20px',
      ...style,
    }}>
      {children}
    </div>
  );
}

export function CardTitle({ icon, children }) {
  return (
    <div style={{
      fontSize: 13, fontWeight: 600, color: '#111827',
      marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6,
    }}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
}

export function MetricCard({ label, value, sub, color }) {
  return (
    <div style={{ background: '#f9fafb', borderRadius: 10, padding: '12px 14px' }}>
      <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 600, color: color || '#111827' }}>{value}</div>
      {sub && <div style={{ marginTop: 4, fontSize: 12 }}>{sub}</div>}
    </div>
  );
}

export function Row({ cols = 2, gap = 12, children, style = {} }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap,
      marginBottom: 14,
      ...style,
    }}>
      {children}
    </div>
  );
}

export function TR({ children, style = {} }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '7px 0', borderBottom: '0.5px solid #f3f4f6', fontSize: 13,
      ...style,
    }}>
      {children}
    </div>
  );
}

export function AIInsight({ prompt, context, title }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, context: JSON.stringify(context) }),
        });
        const data = await res.json();
        if (!cancelled) { setText(data.text || data.error || 'No response'); setLoading(false); }
      } catch (e) {
        if (!cancelled) { setText('Could not load AI insight.'); setLoading(false); }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div style={{ background: '#f0f7ff', border: '0.5px solid #b8d4f4', borderRadius: 10, padding: '10px 14px', marginTop: 10 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: '#1a6fc4', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
        ✦ AI insight{title ? ` · ${title}` : ''}
      </div>
      {loading
        ? <div style={{ fontSize: 12, color: '#6b7280', fontStyle: 'italic' }}>Analyzing…</div>
        : <div
            style={{ fontSize: 12, color: '#1f2937', lineHeight: 1.75 }}
            dangerouslySetInnerHTML={{
              __html: text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br/>')
            }}
          />
      }
    </div>
  );
}
