import type { ReactNode } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

type Props = {
  id?: string;
  aside: ReactNode;
  children: ReactNode;
  dark?: boolean;
};

export function Section({ id, aside, children, dark }: Props) {
  return (
    <section className={dark ? 'review-section' : 'section'} id={id}>
      <div className="section-inner">
        <RevealOnScroll as="aside" className="aside">
          {aside}
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>{children}</RevealOnScroll>
      </div>
    </section>
  );
}
