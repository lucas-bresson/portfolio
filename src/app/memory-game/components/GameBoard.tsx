import { useEffect } from 'react';
import Image from 'next/image';
import bird1 from '/public/memory-game/bird1.svg';
import bird2 from '/public/memory-game/bird2.svg';
import bird3 from '/public/memory-game/bird3.svg';
import bird4 from '/public/memory-game/bird4.svg';
import bird5 from '/public/memory-game/bird5.svg';
import bird6 from '/public/memory-game/bird6.svg';
import bird7 from '/public/memory-game/bird7.svg';
import bird8 from '/public/memory-game/bird8.svg';
import bird9 from '/public/memory-game/bird9.svg';
import bird10 from '/public/memory-game/bird10.svg';
import bird11 from '/public/memory-game/bird11.svg';
import bird12 from '/public/memory-game/bird12.svg';
import bird13 from '/public/memory-game/bird13.svg';
import bird14 from '/public/memory-game/bird14.svg';
import bird15 from '/public/memory-game/bird15.svg';
import bird16 from '/public/memory-game/bird16.svg';
import bird17 from '/public/memory-game/bird17.svg';
import bird18 from '/public/memory-game/bird18.svg';

const birdImages = [
  bird1,
  bird2,
  bird3,
  bird4,
  bird5,
  bird6,
  bird7,
  bird8,
  bird9,
  bird10,
  bird11,
  bird12,
  bird13,
  bird14,
  bird15,
  bird16,
  bird17,
  bird18,
];

export default function GameBoard({
  array,
  grid,
  theme,
  flippedIndex,
  activeIndex,
  selectItem,
  restart,
}: {
  array: number[];
  grid: string;
  theme: string;
  flippedIndex: number[];
  activeIndex: number[];
  selectItem: any;
  restart: () => void;
}) {
  useEffect(() => restart(), [restart]);

  const chipWidthClasses =
    grid === '4x4'
      ? 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28'
      : 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24';

  const birdsWidthClasses =
    grid === '4x4'
      ? 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16'
      : 'w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14';

  return (
    <section
      className={`grid ${grid === '4x4' ? 'grid-cols-4' : 'grid-cols-6'} max-w-2xl gap-4 self-center`}
    >
      {array.map((item, index) =>
        flippedIndex.includes(index) ? (
          <div
            key={index}
            className={`flex items-center justify-center rounded-full bg-slate-300 text-3xl font-bold text-white ${chipWidthClasses}`}
          >
            {theme === 'numbers' ? (
              item
            ) : (
              <Image
                src={birdImages[item - 1]}
                className={birdsWidthClasses}
                alt={`bird image ${item - 1}`}
              />
            )}
          </div>
        ) : (
          <div
            onClick={() => selectItem(index)}
            key={index}
            className={`transition-bg flex animate-slideIn items-center justify-center rounded-full text-3xl font-bold duration-300 hover:text-slate-400 ${chipWidthClasses} ${activeIndex.includes(index) ? 'bg-amber-500 text-white hover:bg-amber-500 hover:text-white' : 'cursor-pointer bg-slate-700 hover:bg-slate-400'}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {activeIndex.includes(index) &&
              (theme === 'numbers' ? (
                item
              ) : (
                <Image
                  src={birdImages[item - 1]}
                  className={birdsWidthClasses}
                  alt={`bird image ${item - 1}`}
                />
              ))}
          </div>
        )
      )}
    </section>
  );
}
