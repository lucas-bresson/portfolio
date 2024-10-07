import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

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

  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden rounded-xl">
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
      <div className="mt-2 flex flex-1">
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={`m-2 flex w-[25%] cursor-pointer rounded-lg border-2 first-of-type:ml-0 last-of-type:mr-0 ${curr === index ? 'border-lightAsh' : 'border-transparent'}`}
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
