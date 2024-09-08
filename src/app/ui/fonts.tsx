import {
  JetBrains_Mono,
  Kumbh_Sans,
  Rubik,
  Josefin_Sans,
  Alata,
  Open_Sans,
} from 'next/font/google';

export const jetBrainsFont = JetBrains_Mono({
  subsets: ['latin'],
});

export const kumbhSansFont = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const rubik = Rubik({
  subsets: ['latin'],
});

export const josefinSans = Josefin_Sans({
  weight: ['300'],
  subsets: ['latin'],
});

export const alata = Alata({
  weight: ['400'],
  subsets: ['latin'],
});

export const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});
