import { Dispatch, SetStateAction } from 'react';

export default function StepsMenu({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex w-full items-center justify-center space-x-4 pt-12 text-white md:flex-col md:items-start md:space-x-0 md:space-y-6 md:px-8">
      <div
        onClick={() => setActiveStep(1)}
        className="flex cursor-pointer items-center space-x-4"
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border font-bold ${activeStep === 1 ? 'border-none bg-pastelBlue2 text-marineBlue' : 'bg-transparent'}`}
        >
          1
        </div>
        <div className="hidden text-sm uppercase md:block">
          <div className="font-extralight">Step 1</div>
          <div className="font-semibold tracking-wider">Your info</div>
        </div>
      </div>
      <div
        onClick={() => setActiveStep(2)}
        className="flex cursor-pointer items-center space-x-4"
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border font-bold ${activeStep === 2 ? 'border-none bg-pastelBlue2 text-marineBlue' : 'bg-transparent'}`}
        >
          2
        </div>
        <div className="hidden text-sm uppercase md:block">
          <div className="font-extralight">Step 2</div>
          <div className="font-semibold tracking-wider">Select plan</div>
        </div>
      </div>
      <div
        onClick={() => setActiveStep(3)}
        className="flex cursor-pointer items-center space-x-4"
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border font-bold ${activeStep === 3 ? 'border-none bg-pastelBlue2 text-marineBlue' : 'bg-transparent'}`}
        >
          3
        </div>
        <div className="hidden text-sm uppercase md:block">
          <div className="font-extralight">Step 3</div>
          <div className="font-semibold tracking-wider">Add-ons</div>
        </div>
      </div>
      <div
        onClick={() => setActiveStep(4)}
        className="flex cursor-pointer items-center space-x-4"
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border font-bold ${activeStep === 4 ? 'border-none bg-pastelBlue2 text-marineBlue' : 'bg-transparent'}`}
        >
          4
        </div>
        <div className="hidden text-sm uppercase md:block">
          <div className="font-extralight">Step 4</div>
          <div className="font-semibold tracking-wider">Summary</div>
        </div>
      </div>
    </div>
  );
}
