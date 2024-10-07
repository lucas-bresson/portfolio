export default function StepsMenu({
  steps,
  currentStep,
}: {
  steps: { id: number; text: string }[];
  currentStep: number;
}) {
  return (
    <nav aria-label="progress">
      <ol className="flex w-full items-center justify-center space-x-6 pt-12 text-white md:flex-col md:items-start md:space-x-0 md:space-y-6 md:px-8">
        {steps.map(({ id, text }) => (
          <li key={id} className="flex items-center space-x-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold ${currentStep === id ? 'bg-lightSkyBlue border-none text-marineBlue' : 'bg-transparent'}`}
            >
              {id + 1}
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-extralight uppercase">{`Step ${id + 1}`}</div>
              <div className="text-sm font-semibold uppercase tracking-wider">
                {text}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
