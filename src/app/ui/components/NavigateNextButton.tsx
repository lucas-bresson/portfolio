'use client';

import { useRouter, usePathname } from 'next/navigation';

const ROUTES = [
  '/',
  '/bookmark',
  '/clipboard',
  '/shortly',
  '/loopstudios',
  '/fylo',
  '/multi-step-form',
  '/memory-game',
  '/pomodoro',
  '/password-generator',
];

export default function NavigateNextButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNext = () => {
    const currentIndex = ROUTES.indexOf(pathname);

    const nextIndex = (currentIndex + 1) % ROUTES.length;

    router.push(ROUTES[nextIndex]);
  };

  if (pathname === '/') return;

  return (
    <button
      onClick={handleNext}
      className="fixed bottom-5 right-5 z-40 h-16 w-16 cursor-pointer rounded-full rounded-br-xl bg-oceanBlue p-0.5 font-bold text-white shadow-sm shadow-oceanBlue hover:opacity-80"
    >
      Next
    </button>
  );
}
