import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import iconPrevious from '/public/sneakers-ecommerce/icon-previous.svg';
import iconNext from '/public/sneakers-ecommerce/icon-next.svg';

const Carousel = ({
  slides,
}: {
  slides: { image: StaticImageData; thumbnail: StaticImageData; alt: string }[];
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative max-h-80 overflow-hidden md:max-h-none">
      <div className="overflow-hidden md:rounded-xl">
        <div
          className={`flex transition-transform duration-700 ease-out`}
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((s) => (
            <Image src={s.image} key={s.alt} alt={s.alt} />
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
            className={`m-2 flex w-[25%] rounded-lg border-2 first-of-type:ml-0 last-of-type:mr-0 ${curr === index ? 'border-orange' : ''}`}
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
