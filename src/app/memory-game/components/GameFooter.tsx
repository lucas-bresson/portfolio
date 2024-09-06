const PlayerCard = ({
  number,
  score,
  active,
}: {
  number: number;
  score: number;
  active: boolean;
}) => (
  <div className="relative flex-1">
    {active && (
      <div
        className={`absolute -top-1.5 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-b-[15px] border-l-[15px] border-r-[15px] border-l-transparent border-r-transparent ${active ? 'border-b-amber-500' : 'border-b-slate-300'}`}
      />
    )}
    <div
      className={`flex min-w-24 flex-col items-center justify-between rounded-lg p-3 shadow-lg sm:flex-row ${active ? 'bg-amber-500 text-white' : 'bg-slate-300 text-darkBlue'}`}
    >
      <div>{`Player ${number}`}</div>
      <div className="text-xl">{score}</div>
    </div>
    {active && (
      <div className="absolute left-0 right-0 mt-4 text-center text-xs uppercase tracking-doubleWide text-darkBlue">
        Current turn
      </div>
    )}
  </div>
);

export default function GameFooter({
  players,
  currentPlayer,
  score,
  timer,
  moves,
}: {
  players: number;
  currentPlayer: number;
  score: { [key: number]: number };
  timer?: number;
  moves?: number;
}) {
  return (
    <section className="flex items-center justify-center space-x-6 pb-16 font-bold text-slate-500">
      {players === 1 ? (
        <>
          <div className="flex w-48 items-center justify-between rounded-lg bg-slate-300 p-3 shadow-lg lg:w-64">
            <div>Time</div>
            <div className="text-3xl text-darkBlue">{`${timer}`}</div>
          </div>
          <div className="flex w-48 items-center justify-between rounded-lg bg-slate-300 p-3 shadow-lg lg:w-64">
            <div>Moves</div>
            <div className="text-3xl text-darkBlue">{moves}</div>
          </div>
        </>
      ) : (
        Array.from({ length: players }, (_, i) => i + 1).map(
          (player, index) => (
            <PlayerCard
              key={player}
              number={player}
              score={score[index + 1]}
              active={currentPlayer === player}
            />
          )
        )
      )}
    </section>
  );
}
