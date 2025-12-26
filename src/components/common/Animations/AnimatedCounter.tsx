import { memo } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useCounter } from '../../../hooks/useCounter';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = memo(function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  const count = useCounter({ start, end, duration, isVisible });

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
});
