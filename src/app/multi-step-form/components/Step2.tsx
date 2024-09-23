import Image from 'next/image';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import StepContainer from './StepContainer';
import iconArcade from '/public/multi-step-form/icon-arcade.svg';
import iconAdvanced from '/public/multi-step-form/icon-advanced.svg';
import iconPro from '/public/multi-step-form/icon-pro.svg';
import { Inputs } from '../page';
import { ChangeEvent } from 'react';
import useMonthlyPrices from '../hooks/useMonthlyPrices';

export default function Step2({
  setValue,
  watch,
}: {
  setValue: UseFormSetValue<Inputs>;
  watch: UseFormWatch<Inputs>;
}) {
  const { arcadePrice, advancedPrice, proPrice } = useMonthlyPrices();
  const plan = watch('plan');
  const subscription = watch('subscription');
  const isYearly = subscription === 'yearly';

  const handleToggleSubscription = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('subscription', e.target.checked ? 'yearly' : 'monthly');
  };

  return (
    <StepContainer
      title="Select your plan"
      headline="You have the option of monthly or subscription billing."
    >
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <label
          htmlFor="arcade"
          className={`flex w-full cursor-pointer space-x-4 rounded-lg border p-3 hover:border-purplishBlue md:flex-col md:space-x-0 md:pt-6 ${plan === 'arcade' ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
        >
          <input
            id="arcade"
            type="checkbox"
            onChange={() => setValue('plan', 'arcade')}
            className="peer sr-only"
          />
          <div>
            <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-6">
              <Image src={iconArcade} className="h-10 w-10" alt="arcade plan" />
              <div>
                <p className="font-bold text-marineBlue md:text-lg">Arcade</p>
                <p className="font-medium text-coolGray">
                  {isYearly ? `${arcadePrice * 10}€/yr` : `${arcadePrice}€/mo`}
                </p>
              </div>
            </div>
            {isYearly && (
              <div className="pl-14 pt-1 text-sm font-medium text-marineBlue md:pl-0">
                2 months free
              </div>
            )}
          </div>
        </label>
        <label
          htmlFor="advanced"
          className={`flex w-full cursor-pointer space-x-4 rounded-lg border p-3 hover:border-purplishBlue md:flex-col md:space-x-0 md:pt-6 ${plan === 'advanced' ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
        >
          <input
            id="advanced"
            type="checkbox"
            onChange={() => setValue('plan', 'advanced')}
            className="peer sr-only"
          />
          <div>
            <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-6">
              <Image
                src={iconAdvanced}
                className="h-10 w-10"
                alt="arcade plan"
              />
              <div>
                <p className="font-bold text-marineBlue md:text-lg">Advanced</p>
                <p className="font-medium text-coolGray">
                  {isYearly
                    ? `${advancedPrice * 10}€/yr`
                    : `${advancedPrice}€/mo`}
                </p>
              </div>
            </div>
            {isYearly && (
              <div className="pl-14 pt-1 text-sm font-medium text-marineBlue md:pl-0">
                2 months free
              </div>
            )}
          </div>
        </label>
        <label
          htmlFor="pro"
          className={`flex w-full cursor-pointer space-x-4 rounded-lg border p-3 hover:border-purplishBlue md:flex-col md:space-x-0 md:pt-6 ${plan === 'pro' ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
        >
          <input
            id="pro"
            type="checkbox"
            onChange={() => setValue('plan', 'pro')}
            className="peer sr-only"
          />
          <div>
            <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-6">
              <Image src={iconPro} className="h-10 w-10" alt="arcade plan" />
              <div>
                <p className="font-bold text-marineBlue md:text-lg">Pro</p>
                <p className="font-medium text-coolGray">
                  {isYearly ? `${proPrice * 10}€/yr` : `${proPrice}€/mo`}
                </p>
              </div>
            </div>
            {isYearly && (
              <div className="pl-14 pt-1 text-sm font-medium text-marineBlue md:pl-0">
                2 months free
              </div>
            )}
          </div>
        </label>
      </div>
      <label
        htmlFor="subscription"
        className="mt-12 flex items-center justify-center space-x-4 rounded-lg bg-alabaster py-5"
      >
        <span
          className={`font-bold ${subscription === 'monthly' ? 'text-marineBlue' : 'text-coolGray'}`}
        >
          Monthly
        </span>
        <input
          type="checkbox"
          id="subscription"
          className="peer sr-only"
          onChange={handleToggleSubscription}
          checked={subscription === 'yearly'}
        />
        <div className="relative h-6 w-11 rounded-full bg-marineBlue after:absolute after:start-[6px] after:top-[4px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full"></div>
        <span
          className={`font-bold ${subscription === 'yearly' ? 'text-marineBlue' : 'text-coolGray'}`}
        >
          Yearly
        </span>
      </label>
    </StepContainer>
  );
}
