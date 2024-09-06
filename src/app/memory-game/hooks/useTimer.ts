import { useState, useEffect, useRef, useCallback } from 'react';

export default function useTimer(): [
  number,
  () => void,
  () => void,
  () => void,
] {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const requestRef = useRef<number>();

  const updateTimer = useCallback(() => {
    if (!isRunning) return;

    const newTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
    if (newTime !== timer) {
      setTimer(newTime);
    }
    requestRef.current = requestAnimationFrame(updateTimer);
  }, [timer, isRunning]);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - timer * 1000; // Resume from the previous time
      requestRef.current = requestAnimationFrame(updateTimer);
    }
    return () => cancelAnimationFrame(requestRef.current!);
  }, [updateTimer, isRunning, timer]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
    cancelAnimationFrame(requestRef.current!);
  }, []);

  const resetTimer = useCallback(() => {
    startTimeRef.current = Date.now();
    setTimer(0);
  }, []);

  return [timer, startTimer, stopTimer, resetTimer];
}
