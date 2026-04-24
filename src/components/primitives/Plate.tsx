import type { ReactNode, CSSProperties } from 'react';

type PlateProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Plate({ children, className, style }: PlateProps) {
  return (
    <div
      className={`plate plate-corners plate-corners-b${className ? ' ' + className : ''}`}
      style={style}
    >
      {children}
    </div>
  );
}

type PlateHeadProps = { left: ReactNode; right: ReactNode };

export function PlateHead({ left, right }: PlateHeadProps) {
  return (
    <div className="plate-head">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export function PlateCaption({ children }: { children: ReactNode }) {
  return <p className="plate-caption">{children}</p>;
}

export function PlateLegend({ children }: { children: ReactNode }) {
  return <div className="plate-legend">{children}</div>;
}

export function Scalebar({ children }: { children: ReactNode }) {
  return <div className="scalebar">{children}</div>;
}
