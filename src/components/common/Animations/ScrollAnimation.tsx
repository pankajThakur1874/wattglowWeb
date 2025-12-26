import { memo, useMemo } from 'react';
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

  // Memoize className to prevent unnecessary re-renders
  const combinedClassName = useMemo(() => {
    const classes = [];
    if (isVisible) classes.push(animation);
    if (delay > 0) classes.push(`stagger-${delay}`);
    if (className) classes.push(className);
    return classes.join(' ').trim();
  }, [isVisible, animation, delay, className]);

  return (
    <div
      ref={ref}
      className={combinedClassName}
      style={{
        willChange: isVisible ? 'auto' : 'transform, opacity',
        transform: 'translateZ(0)', // Force GPU acceleration
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </div>
  );
});
