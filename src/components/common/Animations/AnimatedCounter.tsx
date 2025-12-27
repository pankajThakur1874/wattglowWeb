import { memo } from 'react';
import { useCounter } from '../../../hooks/useCounter';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  className?: string;
  isVisible?: boolean;
}

export const AnimatedCounter = memo(function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  suffix = '',
  className = '',
  isVisible = true,
}: AnimatedCounterProps) {
  const count = useCounter({ start, end, duration, isVisible });

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
});
