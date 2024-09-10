import Link from 'next/link';
import Image from 'next/image';
import bookmark from '/public/home/bookmark.png';
import clipboard from '/public/home/clipboard.png';
import fylo from '/public/home/fylo.png';
import loopstudios from '/public/home/loopstudios.png';
import shortly from '/public/home/shortly.png';
import sneakersEcommerce from '/public/home/sneakers-ecommerce.png';
import passwordGenerator from '/public/home/password-generator.png';
import memoryGame from '/public/home/memory-game.png';

const PAGES = [
  { href: '/bookmark', image: bookmark },
  { href: '/clipboard', image: clipboard },
  { href: '/shortly', image: shortly },
  { href: '/loopstudios', image: loopstudios },
  { href: '/fylo', image: fylo },
  { href: '/sneakers-ecommerce', image: sneakersEcommerce },
];

const APPS = [
  { href: '/password-generator', image: passwordGenerator },
  { href: '/memory-game', image: memoryGame },
];

export default function Page() {
  return (
    <div className="bg-slate-50 px-8 py-16">
      <div className="text-center">
        <h1 className="my-12 text-center text-6xl">
          Next.js | TypeScript | Tailwind
        </h1>
        <p className="mx-12 text-2xl">
          Portfolio developed by
          <span className="mx-2 rounded-sm bg-gray-100 text-xl text-black">
            Lucas Bresson
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-x-8 md:space-y-0">
        <div className="group">
          <a href="#">CV</a>
          <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
        </div>
        <div className="group">
          <a href="#">LinkedIn</a>
          <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
        </div>
        <div className="group">
          <a href="#">Github</a>
          <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {PAGES.map(({ href, image }) => (
          <Link key={href} href={href} className="">
            <Image src={image} alt={href} />
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-32 grid max-w-6xl gap-8 md:grid-cols-3">
        {APPS.map(({ href, image }) => (
          <Link key={href} href={href} className="">
            <Image src={image} alt={href} className="shadow-xl" />
          </Link>
        ))}
      </div>
    </div>
  );
}
