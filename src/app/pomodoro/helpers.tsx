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

export const getAccentColor = (
  color: number
): { background: string; circle: string } => {
  switch (color) {
    case 1:
    default:
      return { background: 'bg-pastelRed', circle: 'hsl(0, 91%, 71%)' };
    case 2:
      return { background: 'bg-cyan', circle: 'hsl(180, 66%, 49%)' };
    case 3:
      return { background: 'bg-violet-500', circle: 'hsl(258.3,89.5%,66.3%)' };
  }
};
