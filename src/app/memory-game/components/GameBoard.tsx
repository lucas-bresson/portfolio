import { useEffect } from 'react';

export default function GameBoard({
  array,
  grid,
  flippedIndex,
  activeIndex,
  selectItem,
  restart,
}: {
  array: number[];
  grid: string;
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
            {item}
          </div>
        ) : (
          <div
            onClick={() => selectItem(index)}
            key={index}
            className={`transition-bg flex animate-slideIn items-center justify-center rounded-full text-3xl font-bold duration-300 hover:text-slate-400 ${chipWidthClasses} ${activeIndex.includes(index) ? 'bg-amber-500 text-white hover:bg-amber-500 hover:text-white' : 'cursor-pointer bg-slate-700 hover:bg-slate-400'}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {activeIndex.includes(index) && item}
          </div>
        )
      )}
    </section>
  );
}
