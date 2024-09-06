export default function GameOverModal({
  players,
  score,
  timer,
  moves,
  restart,
  newGame,
}: {
  players: number;
  score: { [key: number]: number };
  timer: number;
  moves: number;
  restart: () => void;
  newGame: () => void;
}) {
  const isSingleplayer = players === 1;

  const result = Array.from({ length: players }, (_, i) => i + 1)
    .map((player) => ({ player, score: score[player], winner: false }))
    .sort((a, b) => b.score - a.score);

  if (result.length > 0) {
    result[0].winner = true;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
    >
      <div className="sm: mx-8 w-full max-w-md animate-slideIn rounded-lg bg-white p-8 shadow-lg duration-500 lg:max-w-lg">
        <div className="mb-3 text-center text-2xl font-bold text-darkBlue lg:text-3xl">
          {isSingleplayer
            ? 'You did it!'
            : `Player ${result.find((p) => p.winner)?.player} wins!`}
        </div>
        <div className="mb-8 text-center text-sm font-semibold text-slate-500">
          {isSingleplayer
            ? "Game over! Here's how you got on..."
            : 'Game over! Here are the results...'}
        </div>
        <div className="mb-8 mt-4 space-y-3">
          {isSingleplayer ? (
            <>
              <div className="flex items-center justify-between rounded-lg bg-slate-300 px-6 py-4">
                <div className="font-bold text-slate-500">Time Elapsed</div>
                <div className="text-xl font-bold text-darkBlue">{timer}</div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-300 px-6 py-4">
                <div className="font-bold text-slate-500">Moves Taken</div>
                <div className="text-xl font-bold text-darkBlue">
                  {moves} Moves
                </div>
              </div>
            </>
          ) : (
            result.map(({ player, score, winner }) => (
              <div
                key={player}
                className={`flex items-center justify-between rounded-lg px-6 py-4 ${winner ? 'bg-slate-700' : 'bg-slate-300'}`}
              >
                <div
                  className={`font-bold ${winner ? 'text-white' : 'text-slate-500'}`}
                >{`Player ${winner ? `${player} (Winner!)` : `${player}`}`}</div>
                <div
                  className={`text-xl font-bold ${winner ? 'text-white' : 'text-darkBlue'}`}
                >{`${score} Pair${score > 1 ? 's' : ''}`}</div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center space-x-4 text-sm font-bold">
          <button
            onClick={restart}
            className="flex-1 rounded-full bg-amber-500 px-4 py-2 text-white hover:opacity-80 lg:px-6 lg:py-3 lg:text-xl"
          >
            Restart
          </button>
          <button
            onClick={newGame}
            className="flex-1 rounded-full bg-slate-300 px-4 py-2 text-darkBlue hover:opacity-80 lg:px-6 lg:py-3 lg:text-xl"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}
