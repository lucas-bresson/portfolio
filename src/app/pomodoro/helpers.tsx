import { josefinSans, jetBrainsFont } from '@/app/ui/fonts';

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export const getFontClassname = (font: number) => {
  switch (font) {
    case 1:
      return '';
    case 2:
      return jetBrainsFont.className;
    case 3:
      return josefinSans.className;
  }
};

export const getAccentColor = (color: number) => {
  switch (color) {
    case 1:
    default:
      return 'bg-pastelRed';
    case 2:
      return 'bg-cyan';
    case 3:
      return 'bg-violet-500';
  }
};
