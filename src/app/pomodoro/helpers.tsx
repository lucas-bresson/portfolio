import { josefinSans, jetBrainsFont } from '@/app/ui/fonts';

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
      return 'pastelRed';
    case 2:
      return 'cyan';
    case 3:
      return 'violet-500';
  }
};
