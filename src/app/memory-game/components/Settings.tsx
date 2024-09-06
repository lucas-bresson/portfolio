import { Dispatch, SetStateAction, useState } from 'react';

const SettingsButton = ({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-full py-1.5 ${active ? 'bg-slate-700' : 'bg-slate-300'}`}
    >
      {text}
    </button>
  );
};

export default function Settings({
  setSettings,
}: {
  setSettings: Dispatch<
    SetStateAction<{ players: number; theme: string; grid: string }>
  >;
}) {
  const [players, setPlayers] = useState(2);
  const [theme, setTheme] = useState('numbers');
  const [grid, setGrid] = useState('4x4');

  return (
    <div className="flex h-screen flex-col items-center pt-12 text-white md:justify-center md:pt-0">
      <div className="mb-4 text-2xl font-bold md:mb-8 md:text-3xl">memory</div>
      <div className="w-full max-w-xs rounded-xl bg-white p-8 font-bold xs:max-w-sm sm:max-w-md md:max-w-lg">
        <div className="mb-3 text-xs text-slate-600 md:text-sm lg:text-base">
          Select theme
        </div>
        <div className="mb-6 flex justify-between space-x-4 text-sm md:text-base lg:text-lg">
          <SettingsButton
            text="Numbers"
            active={theme === 'numbers'}
            onClick={() => setTheme('numbers')}
          />
          <SettingsButton
            text="Birds"
            active={theme === 'birds'}
            onClick={() => setTheme('birds')}
          />
        </div>
        <div className="mb-3 text-xs text-slate-600 md:text-sm lg:text-base">
          Number of players
        </div>
        <div className="mb-6 flex justify-between space-x-4 text-sm md:text-base lg:text-lg">
          <SettingsButton
            text="1"
            active={players === 1}
            onClick={() => setPlayers(1)}
          />
          <SettingsButton
            text="2"
            active={players === 2}
            onClick={() => setPlayers(2)}
          />
          <SettingsButton
            text="3"
            active={players === 3}
            onClick={() => setPlayers(3)}
          />
          <SettingsButton
            text="4"
            active={players === 4}
            onClick={() => setPlayers(4)}
          />
        </div>
        <div className="mb-3 text-xs text-slate-600 md:text-sm lg:text-base">
          Grid size
        </div>
        <div className="mb-8 flex justify-between space-x-4 text-sm md:text-base lg:text-lg">
          <SettingsButton
            text="4x4"
            active={grid === '4x4'}
            onClick={() => setGrid('4x4')}
          />
          <SettingsButton
            text="6x6"
            active={grid === '6x6'}
            onClick={() => setGrid('6x6')}
          />
        </div>
        <button
          onClick={() => setSettings({ theme, players, grid })}
          className="w-full rounded-full bg-amber-500 p-2 text-lg shadow-lg duration-200 hover:-translate-y-0.5 hover:opacity-80"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
