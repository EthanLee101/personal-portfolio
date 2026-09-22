import { createElement } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ as = motion.div, className, children, viewport = true }) {
  const reduced = useReducedMotion();
  const variants = reduced ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : container;
  const Tag = typeof as === 'string' ? motion[as] : as;

  return createElement(
    Tag,
    {
      className,
      initial: 'hidden',
      variants,
      ...(viewport
        ? { whileInView: 'visible', viewport: { once: true, margin: '-15% 0px -15% 0px' } }
        : { animate: 'visible' }),
    },
    children
  );
}

export function RevealItem({ className, children, as = motion.div }) {
  const reduced = useReducedMotion();
  const variants = reduced ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : item;
  const Tag = typeof as === 'string' ? motion[as] : as;

  return createElement(Tag, { className, variants }, children);
}
