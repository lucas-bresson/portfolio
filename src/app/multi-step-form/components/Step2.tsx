import { useState } from 'react';
import Image from 'next/image';
import StepContainer from './StepContainer';
import iconArcade from '/public/multi-step-form/icon-arcade.svg';
import iconAdvanced from '/public/multi-step-form/icon-advanced.svg';
import iconPro from '/public/multi-step-form/icon-pro.svg';

export default function Step2() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <StepContainer
      title="Select your plan"
      headline="You have the option of monthly or yearly billing."
    >
      <>
        <div className="my-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div
            onClick={() => setSelectedPlan(1)}
            className={`flex w-full cursor-pointer space-x-4 rounded-lg border p-3 hover:border-purplishBlue md:flex-col md:space-x-0 md:space-y-4 ${selectedPlan === 1 ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
          >
            <Image src={iconArcade} alt="arcade plan" />
            <div>
              <div className="font-bold text-marineBlue">Arcade</div>
              <div className="text-coolGray">9€/mo</div>
            </div>
          </div>
          <div
            onClick={() => setSelectedPlan(2)}
            className={`flex w-full cursor-pointer space-x-4 rounded-lg border p-3 hover:border-purplishBlue md:flex-col md:space-x-0 md:space-y-4 ${selectedPlan === 2 ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
          >
            <Image src={iconAdvanced} alt="advanced plan" />
            <div>
              <div className="font-bold text-marineBlue">Advanced</div>
              <div className="text-coolGray">12€/mo</div>
            </div>
          </div>
          <div
            onClick={() => setSelectedPlan(3)}
            className={`flex w-full cursor-pointer space-x-4 rounded-lg border p-3 hover:border-purplishBlue md:flex-col md:space-x-0 md:space-y-4 ${selectedPlan === 3 ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
          >
            <Image src={iconPro} alt="pro plan" />
            <div>
              <div className="font-bold text-marineBlue">Pro</div>
              <div className="text-coolGray">15€/mo</div>
            </div>
          </div>
        </div>
        <label className="flex items-center justify-center space-x-4 rounded-lg bg-magnolia py-4">
          <span className="font-bold text-gray-900 dark:text-gray-300">
            Monthly
          </span>
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          <span className="font-bold text-coolGray dark:text-gray-300">
            Yearly
          </span>
        </label>
      </>
    </StepContainer>
  );
}
