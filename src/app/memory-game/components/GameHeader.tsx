export default function GameHeader({
  restart,
  newGame,
}: {
  restart: () => void;
  newGame: () => void;
}) {
  return (
    <section className="flex items-center justify-between pt-8">
      <div className="text-2xl font-bold text-darkBlue lg:text-3xl">memory</div>
      <div className="space-x-4 font-bold lg:text-lg">
        <button
          onClick={restart}
          className="rounded-full bg-amber-500 px-4 py-2 text-white hover:opacity-80 lg:px-6 lg:py-3"
        >
          Restart
        </button>
        <button
          onClick={newGame}
          className="rounded-full bg-slate-300 px-4 py-2 text-darkBlue hover:opacity-80 lg:px-6 lg:py-3"
        >
          New Game
        </button>
      </div>
    </section>
  );
}
