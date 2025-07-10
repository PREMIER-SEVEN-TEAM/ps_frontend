import { useEffect, useRef, useState } from "react";

export const useImageCarousel = (length: number, interval: number = 10000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % length);
      }, interval);
    }
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
    stop();
    start(); // 타이머 리셋
  };

  useEffect(() => {
    start();
    return stop;
  }, []);

  return { currentIndex, goTo, start, stop };
};
