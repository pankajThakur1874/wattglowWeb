import { memo } from 'react';
import type { ReactNode } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}

export const ScrollAnimation = memo(function ScrollAnimation({
  children,
  animation = 'fade-slide-up',
  delay = 0,
  className = '',
}: ScrollAnimationProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const animationClass = isVisible ? animation : '';
  const delayClass = delay > 0 ? `stagger-${delay}` : '';

  return (
    <div ref={ref} className={`${animationClass} ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
});
