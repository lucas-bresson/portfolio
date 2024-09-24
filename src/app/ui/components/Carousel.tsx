import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import iconPrevious from '/public/sneakers-ecommerce/icon-previous.svg';
import iconNext from '/public/sneakers-ecommerce/icon-next.svg';

const Carousel = ({
  slides,
}: {
  slides: {
    href: string;
    image: StaticImageData;
    thumbnail: StaticImageData;
    alt: string;
  }[];
}) => {
  const [curr, setCurr] = useState(0);
  const router = useRouter();

  useEffect(() => setCurr(0), [slides]);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden md:rounded-xl">
        <div
          className={`flex cursor-pointer transition-transform duration-700 ease-out`}
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((s) => (
            <Image
              priority={s.href === '/bookmark'}
              src={s.image}
              key={s.alt}
              alt={s.alt}
              onClick={() => router.push(s.href)}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 md:hidden">
        <button
          onClick={prev}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
        >
          <Image src={iconPrevious} alt="previous" className="h-4 w-3" />
        </button>
        <button
          onClick={next}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
        >
          <Image src={iconNext} alt="previous" className="h-4 w-3" />
        </button>
      </div>

      <div className="mt-2 hidden flex-1 md:flex">
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={`m-2 flex w-[25%] cursor-pointer rounded-lg border-2 first-of-type:ml-0 last-of-type:mr-0 ${curr === index ? 'border-color1' : 'border-transparent'}`}
            onClick={() => setCurr(index)}
          >
            <Image
              src={slide.thumbnail}
              alt={slide.alt}
              className={`rounded-md ${curr === index ? 'opacity-30' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
