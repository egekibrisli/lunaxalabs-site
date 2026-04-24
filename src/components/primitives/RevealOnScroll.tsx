import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'aside';
  className?: string;
  style?: CSSProperties;
  id?: string;
};

export function RevealOnScroll({
  children,
  delay = 0,
  as = 'div',
  className,
  style,
  id,
}: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    return (
      <Tag id={id} className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      id={id}
      className={className}
      initial={{ opacity: 0, rotateX: 6, y: 32 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay }}
      style={{
        transformPerspective: 1500,
        transformOrigin: '50% 100%',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
