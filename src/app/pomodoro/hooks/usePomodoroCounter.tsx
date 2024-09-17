import { useState, useEffect, useRef } from 'react';

const DEFAULT_POMODORO_TIME = 25 * 60; // 25 minutes in seconds
const DEFAULT_SHORT_BREAK = 5 * 60; // 5 minutes in seconds
const DEFAULT_LONG_BREAK = 15 * 60; // 15 minutes in seconds

type Mode = 'pomodoro' | 'short' | 'long';

export default function usePomodoroCounter({
  pomodoroDuration = DEFAULT_POMODORO_TIME,
  shortBreakDuration = DEFAULT_SHORT_BREAK,
  longBreakDuration = DEFAULT_LONG_BREAK,
} = {}) {
  const [timeLeft, setTimeLeft] = useState(pomodoroDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [activeMode, setActiveMode] = useState<Mode>('pomodoro');
  const intervalRef = useRef<number | null>(null);

  const [currentModeDuration, setCurrentModeDuration] =
    useState(pomodoroDuration);

  const switchMode = (mode: Mode) => {
    setActiveMode(mode);
    setIsRunning(false);

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    if (mode === 'pomodoro') {
      setTimeLeft(pomodoroDuration);
      setCurrentModeDuration(pomodoroDuration);
    } else if (mode === 'short') {
      setTimeLeft(shortBreakDuration);
      setCurrentModeDuration(shortBreakDuration);
    } else if (mode === 'long') {
      setTimeLeft(longBreakDuration);
      setCurrentModeDuration(longBreakDuration);
    }
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            if (intervalRef.current !== null) {
              clearInterval(intervalRef.current);
            }
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }
  };

  const pause = () => {
    setIsRunning(false);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  const reset = () => {
    pause();
    switchMode(activeMode);
  };

  const timeLeftPercentage = 100 * (timeLeft / currentModeDuration);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    timeLeft,
    isRunning,
    activeMode,
    timeLeftPercentage,
    start,
    pause,
    reset,
    switchToPomodoro: () => switchMode('pomodoro'),
    switchToShortBreak: () => switchMode('short'),
    switchToLongBreak: () => switchMode('long'),
  };
}
