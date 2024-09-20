'use client';

import { useState } from 'react';
import StepsMenu from './components/StepsMenu';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

export default function Page() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="h-screen bg-magnolia md:flex md:items-center md:justify-center">
      <div className="h-52 w-full bg-sidebar-mobile bg-cover md:hidden">
        <StepsMenu activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>

      <div className="mx-8 -translate-y-16 rounded-lg bg-white p-8 md:mx-auto md:flex md:max-w-4xl md:translate-y-0 md:p-4">
        <div className="hidden w-1/4 min-w-64 rounded-xl bg-sidebar-desktop bg-cover md:block">
          <StepsMenu activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
        <div className="py-2 md:w-3/4 md:px-24 md:py-8">
          {activeStep === 1 && <Step1 />}
          {activeStep === 2 && <Step2 />}
          {activeStep === 3 && <Step3 />}
          {activeStep === 4 && <Step4 />}
          <button className="absolute bottom-8 right-28 hidden rounded-md bg-marineBlue px-6 py-3 font-semibold text-white md:block">
            Next Step
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 flex h-20 w-full items-center justify-end bg-white p-8 md:hidden">
        <button className="rounded-md bg-marineBlue px-6 py-3 font-semibold text-white">
          Next Step
        </button>
      </div>
    </div>
  );
}

// marineBlue: 'hsl(213, 96%, 18%)',
// purplishBlue: 'hsl(243, 100%, 62%)',
// pastelBlue2: 'hsl(228, 100%, 84%)',
// lightBlue2: 'hsl(206, 94%, 87%)',
// strawberryRed: 'hsl(354, 84%, 57%)',
// coolGray: 'hsl(231, 11%, 63%)',
// lightGray: 'hsl(229, 24%, 87%)',
// magnolia: 'hsl(217, 100%, 97%)',
// alabaster: 'hsl(231, 100%, 99%)',
// white: 'hsl(0, 0%, 100%)',
