export default function Footer({
  currentStep,
  prev,
  next,
}: {
  currentStep: number;
  prev: () => void;
  next: () => Promise<void>;
}) {
  const isLastStep = currentStep === 3;
  const isSuccessfullySubmitted = currentStep === 4;

  if (isSuccessfullySubmitted) return;

  return (
    <div className="flex justify-between">
      {currentStep > 0 ? (
        <button
          type="button"
          onClick={prev}
          className="font-medium text-coolGray hover:text-marineBlue"
        >
          Go Back
        </button>
      ) : (
        <div />
      )}
      <button
        type="button"
        onClick={next}
        className={`rounded-md px-6 py-3 font-medium text-white hover:opacity-90 ${isLastStep ? 'bg-purplishBlue' : 'bg-marineBlue'}`}
      >
        {isLastStep ? 'Confirm' : 'Next step'}
      </button>
    </div>
  );
}
