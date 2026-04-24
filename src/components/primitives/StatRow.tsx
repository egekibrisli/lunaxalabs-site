import type { ReactNode } from 'react';

type Props = {
  notation: string;
  num: ReactNode;
  label: string;
  sub: string;
};

export function StatRow({ notation, num, label, sub }: Props) {
  return (
    <div className="stat">
      <div className="stat-row">
        <span className="stat-notation">{notation}</span>
        <span className="stat-num">{num}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  );
}
