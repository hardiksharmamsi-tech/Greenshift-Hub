
import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  useEffect(() => {
    const animate = () => {
      let startTime: number | null = null;
      const animationFrame = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const t = Math.min(progress / duration, 1);
        const easedT = easeOutExpo(t);
        
        const currentCount = easedT * end;
        setCount(currentCount);

        if (progress < duration) {
          requestAnimationFrame(animationFrame);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animationFrame);
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animate();
        if (observer.current) {
            observer.current.disconnect();
        }
      }
    };
    
    observer.current = new IntersectionObserver(handleIntersect, { threshold: 0.7 });
    
    if (ref.current) {
      observer.current.observe(ref.current);
    }
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
};

export default CountUp;
