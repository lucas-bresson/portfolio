'use client';

import Image from 'next/image';
import iconSettings from '/public/pomodoro/icon-settings.svg';
import { useEffect, useState } from 'react';
import SettingsModal from './components/SettingsModal';
import { getFontClassname, getAccentColor, formatTime } from './helpers';
import usePomodoroCounter from './hooks/usePomodoroCounter';
import ProgressCircle from './components/ProgressCircle';

export default function Page() {
  const [timers, setTimers] = useState({ pomodoro: 25, short: 5, long: 15 });
  const [font, setFont] = useState(1);
  const [color, setColor] = useState(1);
  const [progress, setProgress] = useState(100);
  const [pomodoroCounter, setPomodoroCounter] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const {
    timeLeft,
    isRunning,
    activeMode,
    timeLeftPercentage,
    start,
    pause,
    reset,
    switchToPomodoro,
    switchToShortBreak,
    switchToLongBreak,
  } = usePomodoroCounter({
    pomodoroDuration: timers.pomodoro * 60,
    shortBreakDuration: timers.short * 60,
    longBreakDuration: timers.long * 60,
  });

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timers]);

  useEffect(() => {
    setProgress(timeLeftPercentage);

    if (timeLeftPercentage === 0) {
      const bell = new Audio('/pomodoro/bell.wav');
      bell.play();

      switch (activeMode) {
        case 'pomodoro':
        default:
          if (pomodoroCounter < 4) {
            setPomodoroCounter((prevState) => prevState + 1);
            return switchToShortBreak();
          } else {
            setPomodoroCounter(0);
            return switchToLongBreak();
          }
        case 'short':
          return switchToPomodoro();
        case 'long':
          return switchToPomodoro();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeftPercentage]);

  const setSettings = ({
    pomodoro,
    short,
    long,
    font,
    color,
  }: {
    pomodoro: number;
    short: number;
    long: number;
    font: number;
    color: number;
  }) => {
    setTimers({ pomodoro, short, long });
    setFont(font);
    setColor(color);
  };

  const accentColor = getAccentColor(color);
  const fontClassname = getFontClassname(font);

  return (
    <div
      className={`bg-deepNavyShade flex h-screen w-screen flex-col items-center p-10 sm:p-24 ${fontClassname}`}
    >
      <h1 className="text-center text-3xl font-bold text-pastelBlue">
        pomodoro
      </h1>
      <div className="bg-charcoalNavy mt-8 flex rounded-full p-2 text-sm font-bold sm:text-base">
        <button
          onClick={() => switchToPomodoro()}
          className={`rounded-full p-2 sm:px-6 sm:py-4 ${activeMode === 'pomodoro' ? `${accentColor.background} text-charcoalNavy` : 'text-grayishBlue3'}`}
        >
          pomodoro
        </button>
        <button
          onClick={() => switchToShortBreak()}
          className={`rounded-full p-2 sm:px-6 sm:py-4 ${activeMode === 'short' ? `${accentColor.background} text-charcoalNavy` : 'text-grayishBlue3'}`}
        >
          short break
        </button>
        <button
          onClick={() => switchToLongBreak()}
          className={`rounded-full p-2 sm:px-6 sm:py-4 ${activeMode === 'long' ? `${accentColor.background} text-charcoalNavy` : 'text-grayishBlue3'}`}
        >
          long break
        </button>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center sm:mt-0">
        <div className="to-smokySlate from-charcoalNavy flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-30% shadow-[rgba(41,45,81,1)_-30px_-30px_50px_0px] sm:h-128 sm:w-128">
          <div className="bg-charcoalNavy flex h-[90%] w-[90%] items-center justify-center rounded-full">
            <div className="flex translate-y-6 flex-col items-center text-white sm:translate-y-12">
              <div className="text-5xl font-bold sm:text-8xl">
                {formatTime(timeLeft)}
              </div>
              <button
                onClick={() => (isRunning ? pause() : start())}
                className="z-10 mt-6 text-lg font-medium uppercase tracking-quadrupleWide sm:mt-20 sm:text-2xl"
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <ProgressCircle
                type="large"
                strokeWidth={12}
                strokeColor={accentColor.circle}
                progress={progress}
                className="absolute -top-[178px] hidden sm:block"
              />
              <ProgressCircle
                type="small"
                strokeWidth={8}
                strokeColor={accentColor.circle}
                progress={progress}
                className="absolute -top-[110px] sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={iconSettings}
        alt="settings"
        className="h-12 w-12 cursor-pointer hover:opacity-80"
        onClick={() => setSettingsOpen(true)}
      />
      {settingsOpen && (
        <SettingsModal
          appTimers={timers}
          appFont={font}
          appColor={color}
          setSettings={setSettings}
          closeModal={() => setSettingsOpen(false)}
        />
      )}
    </div>
  );
}
