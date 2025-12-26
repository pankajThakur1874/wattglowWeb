import { useEffect, useState } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  isVisible: boolean;
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  isVisible,
}: UseCounterOptions): number {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(start + (end - start) * easeProgress);

      setCount(current);

      if (now >= endTime) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [start, end, duration, isVisible, hasAnimated]);

  return count;
}
