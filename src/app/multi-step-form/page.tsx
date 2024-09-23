'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema } from './lib/scheme';
import StepsMenu from './components/StepsMenu';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Footer from './components/Footer';
import SuccessfullySubmitted from './components/SuccessfullySubmitted';

export type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  { id: 0, text: 'Your info', fields: ['name', 'email', 'phone'] },
  { id: 1, text: 'Select plan', fields: ['plan', 'subscription'] },
  { id: 2, text: 'Add-ons', fields: ['online', 'storage', 'customizable'] },
  { id: 3, text: 'Summary', fields: [] },
];

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
    trigger,
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      plan: 'arcade',
      subscription: 'monthly',
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log('data :>> ', data);
    setCurrentStep(4);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const valid = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!valid) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }

    if (currentStep === steps.length - 1) {
      await handleSubmit(processForm)();
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="h-screen bg-magnolia md:flex md:items-center md:justify-center">
      <form className="w-full" onSubmit={handleSubmit(processForm)}>
        <div className="h-52 w-full bg-sidebar-mobile bg-cover md:hidden">
          <StepsMenu steps={steps} currentStep={currentStep} />
        </div>
        <div className="mx-8 -translate-y-16 rounded-lg bg-white p-8 shadow-md md:mx-auto md:flex md:min-h-[700px] md:w-full md:max-w-4xl md:translate-y-0 md:p-4 lg:max-w-5xl xl:max-w-6xl">
          <div className="hidden min-w-60 rounded-xl bg-sidebar-desktop bg-cover md:block lg:min-w-72 xl:min-w-80">
            <StepsMenu steps={steps} currentStep={currentStep} />
          </div>
          <div className="flex w-full flex-col justify-between py-4 md:px-12 md:pt-8 xl:px-24">
            {currentStep === 0 && <Step1 register={register} errors={errors} />}
            {currentStep === 1 && <Step2 setValue={setValue} watch={watch} />}
            {currentStep === 2 && (
              <Step3 register={register} setValue={setValue} watch={watch} />
            )}
            {currentStep === 3 && (
              <Step4 watch={watch} setCurrentStep={setCurrentStep} />
            )}
            {currentStep === 4 && <SuccessfullySubmitted />}
            <div className="hidden md:block">
              <Footer currentStep={currentStep} prev={prev} next={next} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-white px-8 py-4 md:hidden">
          <Footer currentStep={currentStep} prev={prev} next={next} />
        </div>
      </form>
    </div>
  );
}
