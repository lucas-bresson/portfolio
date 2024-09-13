'use client';

import Image from 'next/image';
import iconSettings from '/public/pomodoro/icon-settings.svg';
import { useEffect, useState } from 'react';
import SettingsModal from './components/SettingsModal';
import { getFontClassname, getAccentColor, formatTime } from './helpers';
import usePomodoroCounter from './hooks/usePomodoroCounter';

export default function Page() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [appTimes, setAppTimes] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [appFont, setAppFont] = useState(1);
  const [appColor, setAppColor] = useState(1);

  const {
    timeLeft,
    isRunning,
    activeMode,
    start,
    pause,
    reset,
    switchToPomodoro,
    switchToShortBreak,
    switchToLongBreak,
  } = usePomodoroCounter({
    pomodoroDuration: appTimes.pomodoro * 60,
    shortBreakDuration: appTimes.shortBreak * 60,
    longBreakDuration: appTimes.longBreak * 60,
  });

  useEffect(() => {
    reset();
  }, [appTimes, reset]);

  const setSettings = ({
    pomodoro,
    shortBreak,
    longBreak,
    font,
    color,
  }: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
    font: number;
    color: number;
  }) => {
    setAppTimes({ pomodoro, shortBreak, longBreak });
    setAppFont(font);
    setAppColor(color);
  };

  const accentColor = getAccentColor(appColor);

  return (
    <div
      className={`flex h-screen w-screen flex-col items-center bg-darkBlue4 p-10 sm:p-24 ${getFontClassname(appFont)}`}
    >
      <h1 className="text-center text-3xl font-bold text-pastelBlue">
        pomodoro
      </h1>
      <div className="mt-8 flex rounded-full bg-darkBlue5 p-2 text-sm font-bold sm:text-base">
        <button
          onClick={() => switchToPomodoro()}
          className={`rounded-full p-2 sm:px-6 sm:py-4 ${activeMode === 'pomodoro' ? `${accentColor} text-darkBlue5` : 'text-grayishBlue3'}`}
        >
          pomodoro
        </button>
        <button
          onClick={() => switchToShortBreak()}
          className={`rounded-full p-2 sm:px-6 sm:py-4 ${activeMode === 'short' ? `${accentColor} text-darkBlue5` : 'text-grayishBlue3'}`}
        >
          short break
        </button>
        <button
          onClick={() => switchToLongBreak()}
          className={`rounded-full p-2 sm:px-6 sm:py-4 ${activeMode === 'long' ? `${accentColor} text-darkBlue5` : 'text-grayishBlue3'}`}
        >
          long break
        </button>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center sm:mt-0">
        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-darkBlue5 from-30% to-darkBlue6 shadow-[rgba(41,45,81,1)_-30px_-30px_50px_0px] sm:h-128 sm:w-128">
          <div className="flex h-[90%] w-[90%] items-center justify-center rounded-full bg-darkBlue5">
            <div className="flex translate-y-6 flex-col items-center text-white sm:translate-y-12">
              <div className="text-5xl font-bold sm:text-8xl">
                {formatTime(timeLeft)}
              </div>
              <button
                onClick={() => (isRunning ? pause() : start())}
                className="mt-6 text-lg font-medium uppercase tracking-quadrupleWide sm:mt-20 sm:text-2xl"
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
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
      <SettingsModal
        visible={settingsOpen}
        accentColor={accentColor}
        setSettings={setSettings}
        closeModal={() => setSettingsOpen(false)}
      />
    </div>
  );
}

// https://css-tricks.com/building-progress-ring-quickly/
