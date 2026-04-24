type Item = {
  text: string;
  variant?: 'red' | 'amber';
};

const ITEMS: Item[] = [
  { text: 'Lab status · 14 active engagements' },
  { text: 'Protocol α · 6 cohorts' },
  { text: 'Protocol β · 5 cohorts' },
  { text: 'Protocol γ · 3 cohorts', variant: 'amber' },
  { text: 'Now reviewing · Case no. 007', variant: 'red' },
  { text: 'Operator network · 3,412' },
  { text: 'Last ship · Fintech, 5 months' },
  { text: 'Next peer review · 02/26' },
  { text: 'Uptime (Q1) · 99.97%' },
];

export function Ticker() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {track.map((it, i) => (
          <span
            key={i}
            className={it.variant ? `ticker-item ${it.variant}` : 'ticker-item'}
          >
            <span className="ticker-dot" />
            {it.text}
          </span>
        ))}
      </div>
    </div>
  );
}
