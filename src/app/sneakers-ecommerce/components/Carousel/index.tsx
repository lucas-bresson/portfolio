import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import iconPrevious from "../../../../../public/sneakers-ecommerce/icon-previous.svg";
import iconNext from "../../../../../public/sneakers-ecommerce/icon-next.svg";

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
    <div className="overflow-hidden relative max-h-80 md:max-h-none">
      <div className="overflow-hidden md:rounded-xl">
        <div
          className={`flex transition-transform ease-out duration-700`}
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
          className="w-8 h-8 rounded-full shadow bg-white/80 hover:bg-white flex justify-center items-center"
        >
          <Image src={iconPrevious} alt="previous" className="w-3 h-4" />
        </button>
        <button
          onClick={next}
          className="w-8 h-8 rounded-full shadow bg-white/80 hover:bg-white flex justify-center items-center"
        >
          <Image src={iconNext} alt="previous" className="w-3 h-4" />
        </button>
      </div>

      <div className="hidden md:flex flex-1 mt-2 ">
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={`flex  w-[25%] m-2 rounded-lg border-2 first-of-type:ml-0 last-of-type:mr-0 ${curr === index ? "border-orange" : ""}`}
            onClick={() => setCurr(index)}
          >
            <Image
              src={slide.thumbnail}
              alt={slide.alt}
              className={`rounded-md ${curr === index ? "opacity-30" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
