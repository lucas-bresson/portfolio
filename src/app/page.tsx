'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import bookmark from '/public/home/bookmark.png';
import clipboard from '/public/home/clipboard.png';
import shortly from '/public/home/shortly.png';
import loopstudios from '/public/home/loopstudios.png';
import fylo from '/public/home/fylo.png';
import passwordGenerator from '/public/home/password-generator.png';
import memoryGame from '/public/home/memory-game.png';
import pomodoro from '/public/home/pomodoro.png';
import multiStepForm from '/public/home/multi-step-form.png';
import bookmarkThumbnail from '/public/home/bookmark-thumbnail.png';
import clipboardThumbnail from '/public/home/clipboard-thumbnail.png';
import shortlyThumbnail from '/public/home/shortly-thumbnail.png';
import loopstudiosThumbnail from '/public/home/loopstudios-thumbnail.png';
import fyloThumbnail from '/public/home/fylo-thumbnail.png';
import passwordGeneratorThumbnail from '/public/home/password-generator-thumbnail.png';
import memoryGameThumbnail from '/public/home/memory-game-thumbnail.png';
import pomodoroThumbnail from '/public/home/pomodoro-thumbnail.png';
import multiStepFormThumbnail from '/public/home/multi-step-form-thumbnail.png';
import Carousel from './ui/components/Carousel';
import { useTheme } from 'next-themes';

const LANDINGS_PAGES = [
  {
    href: '/bookmark',
    image: bookmark,
    thumbnail: bookmarkThumbnail,
    alt: 'bookmark',
  },
  {
    href: '/clipboard',
    image: clipboard,
    thumbnail: clipboardThumbnail,
    alt: 'clipboard',
  },
  {
    href: '/shortly',
    image: shortly,
    thumbnail: shortlyThumbnail,
    alt: 'shortly',
  },
  {
    href: '/loopstudios',
    image: loopstudios,
    thumbnail: loopstudiosThumbnail,
    alt: 'loopstudios',
  },
  {
    href: '/fylo',
    image: fylo,
    thumbnail: fyloThumbnail,
    alt: 'fylo',
  },
];

const APPLICATIONS = [
  {
    href: '/multi-step-form',
    image: multiStepForm,
    thumbnail: multiStepFormThumbnail,
    alt: 'multi-step-form',
  },
  {
    href: '/memory-game',
    image: memoryGame,
    thumbnail: memoryGameThumbnail,
    alt: 'memory-game',
  },
  {
    href: '/pomodoro',
    image: pomodoro,
    thumbnail: pomodoroThumbnail,
    alt: 'pomodoro',
  },
  {
    href: '/password-generator',
    image: passwordGenerator,
    thumbnail: passwordGeneratorThumbnail,
    alt: 'password-generator',
  },
];

export default function Page() {
  const [switchOn, setSwitchOn] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  return (
    <div
      className={`h-screen bg-gradient-to-b from-deepCharcoalGray to-slateGray`}
    >
      <div className="flex flex-col">
        <div className="right-12 top-12 z-10 mt-8 space-x-6 text-center text-sm font-semibold text-lightAsh sm:text-lg xl:absolute xl:mt-0">
          <Link className="hover:text-mutedTeal" href="#">
            CV
          </Link>
          <Link
            className="hover:text-mutedTeal"
            target="_blank"
            href="https://www.linkedin.com/in/lucas-bresson/"
          >
            LinkedIn
          </Link>
          <Link
            className="hover:text-mutedTeal"
            target="_blank"
            href="https://github.com/lucas-bresson"
          >
            Github
          </Link>
        </div>
        <h1 className="absolute left-12 top-12 z-10 mx-auto hidden max-w-lg text-lg text-lightAsh 2xl:block">
          Hi, I am a french software engineer. <br />I have built following
          landing pages & applications using
          <span className="ms-2 rounded bg-oceanBlue px-2.5 py-0.5 text-lg font-bold text-lightAsh">
            Next.js
          </span>
          ,
          <span className="ms-2 rounded bg-oceanBlue px-2.5 py-0.5 text-lg font-bold text-lightAsh">
            TypeScript
          </span>
          ,
          <span className="ms-2 rounded bg-oceanBlue px-2.5 py-0.5 text-lg font-bold text-lightAsh">
            Tailwind
          </span>
        </h1>
        <label>
          <div className="absolute my-6 flex w-full cursor-pointer items-center justify-center space-x-4 sm:my-12 md:my-8">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              onClick={() => setSwitchOn((x) => !x)}
            />
            <div
              className={`text-xs font-semibold uppercase opacity-80 hover:opacity-100 sm:text-xl md:text-lg ${switchOn ? 'text-mutedTeal' : 'text-lightAsh'}`}
            >
              Landing pages
            </div>
            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-oceanBlue peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <div
              className={`text-xs font-semibold uppercase opacity-80 hover:opacity-100 sm:text-xl md:text-lg ${switchOn ? 'text-lightAsh' : 'text-mutedTeal'}`}
            >
              Applications
            </div>
          </div>
        </label>
        <div
          className={`mx-4 flex max-w-lg flex-col justify-center space-y-12 transition-opacity duration-1000 ease-in-out sm:pt-16 md:mx-auto`}
        >
          <div
            className={`mt-24 transition-opacity duration-1000 ${switchOn ? 'opacity-0' : 'opacity-100'}`}
          >
            {!switchOn && <Carousel slides={LANDINGS_PAGES} />}
          </div>
          <div
            className={`transition-opacity duration-1000 ${switchOn ? 'opacity-100' : 'opacity-0'}`}
          >
            {switchOn && <Carousel slides={APPLICATIONS} />}
          </div>
        </div>
      </div>
    </div>
  );
}
