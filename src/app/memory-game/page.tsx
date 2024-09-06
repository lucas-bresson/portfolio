'use client';
import { useCallback, useEffect, useState } from 'react';
import Settings from './components/Settings';
import GameHeader from './components/GameHeader';
import GameBoard from './components/GameBoard';
import GameFooter from './components/GameFooter';
import generateArray from './helpers/generateArray';
import useTimer from './hooks/useTimer';
import GameOverModal from './components/GameOverModal';

export default function Page() {
  const [timer, startTimer, stopTimer, resetTimer] = useTimer();

  const initialSettings = { theme: 'numbers', players: 0, grid: '4x4' };
  const [settings, setSettings] = useState(initialSettings);
  const [array, setArray] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number[]>([]);
  const [flippedIndex, setFlippedIndex] = useState<number[]>([]);
  const [pair, setPair] = useState<Array<number | undefined>>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [score, setScore] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });
  const [moves, setMoves] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const { players, theme, grid } = settings;
  const isSelectingSettings = !settings.players;

  const restart = useCallback(() => {
    const newArray = generateArray({ theme: 'numbers', grid });
    setArray(newArray);
    setActiveIndex([]);
    setFlippedIndex([]);
    setPair([]);
    setScore({ 1: 0, 2: 0, 3: 0, 4: 0 });
    resetTimer();
    startTimer();
    setMoves(0);
    setCurrentPlayer(1);
  }, [grid, startTimer, resetTimer]);

  const newGame = () => {
    setSettings(initialSettings);
  };

  const selectItem = (index: number) => {
    if (activeIndex.includes(index) || activeIndex.length === 2) return;
    setActiveIndex((prevState) => [...prevState, index]);
    const item = array.find((item) => item == array[index]);
    setPair((prevState) => [...prevState, item]);
  };

  useEffect(() => {
    if (pair.length !== 2) return;

    const success = pair[0] === pair[1];

    if (success) {
      setFlippedIndex((prevState) => [...prevState, ...activeIndex]);
      setScore({ ...score, [currentPlayer]: score[currentPlayer] + 1 });
    }

    setMoves((prevState) => prevState + 1);

    setTimeout(() => {
      setCurrentPlayer((prevState) => {
        if (success) {
          return prevState;
        }
        if (currentPlayer < players) {
          return prevState + 1;
        }
        return 1;
      });
      setPair([]);
      setActiveIndex([]);
    }, 800);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    const total = grid === '4x4' ? 16 : 36;
    if (flippedIndex.length < total) {
      return;
    } else {
      setIsOver(true);
      stopTimer();
    }
  }, [flippedIndex, grid, isOver, stopTimer]);

  return (
    <div
      className={`transition-colors duration-300 ${isSelectingSettings ? 'bg-darkBlue' : 'bg-white'}`}
    >
      {isSelectingSettings ? (
        <Settings setSettings={setSettings} />
      ) : (
        <div className="flex h-screen flex-col justify-between px-10 lg:px-20">
          <GameHeader restart={restart} newGame={newGame} />
          <GameBoard
            array={array}
            grid={grid}
            flippedIndex={flippedIndex}
            activeIndex={activeIndex}
            selectItem={selectItem}
            restart={restart}
          />
          <GameFooter
            players={players}
            currentPlayer={currentPlayer}
            score={score}
            timer={timer}
            moves={moves}
          />
          {isOver && (
            <GameOverModal
              players={players}
              score={score}
              timer={timer}
              moves={moves}
              restart={() => {
                setIsOver(false);
                restart();
              }}
              newGame={() => {
                setIsOver(false);
                newGame();
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
