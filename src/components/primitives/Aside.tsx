import type { ReactNode } from 'react';

type Props = {
  tag: string;
  sectionNo: string;
  note?: ReactNode;
  redNote?: ReactNode;
};

export function Aside({ tag, sectionNo, note, redNote }: Props) {
  return (
    <>
      <span className="aside-tag">{tag}</span>
      <span className="aside-section-no">{sectionNo}</span>
      {note ? <p className="aside-note">{note}</p> : null}
      {redNote ? <p className="aside-red-note">{redNote}</p> : null}
    </>
  );
}
