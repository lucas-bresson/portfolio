import { UseFormWatch } from 'react-hook-form';
import StepContainer from './StepContainer';
import { Inputs } from '../page';
import { SetStateAction, Dispatch } from 'react';
import useMonthlyPrices from '../hooks/useMonthlyPrices';

export default function Step4({
  watch,
  setCurrentStep,
}: {
  watch: UseFormWatch<Inputs>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}) {
  const {
    arcadePrice,
    advancedPrice,
    proPrice,
    onlinePrice,
    storagePrice,
    customizablePrice,
  } = useMonthlyPrices();
  const plan = watch('plan');
  const subscription = watch('subscription');
  const isYearly = subscription === 'yearly';
  const isOnline = watch('online');
  const isStorage = watch('storage');
  const isCustomizable = watch('customizable');

  const planMonthlyPrice =
    plan === 'advanced'
      ? advancedPrice
      : plan === 'arcade'
        ? arcadePrice
        : proPrice;

  const getTotalMonthlyPrice = () => {
    let total = planMonthlyPrice;
    if (isOnline) total += onlinePrice;
    if (isStorage) total += storagePrice;
    if (isCustomizable) total += customizablePrice;
    return total;
  };

  const totalMonthlyPrice = getTotalMonthlyPrice();

  return (
    <StepContainer
      title="Finishing up"
      headline="Double-check everything looks OK before confirming."
    >
      <div className="rounded-lg bg-alabaster p-4 md:p-6">
        <div className="flex items-center justify-between border-b border-b-lightGray pb-3 md:pb-6">
          <div>
            <div className="font-bold capitalize text-marineBlue">
              {`${plan} (${subscription})`}
            </div>
            <button
              onClick={() => setCurrentStep(1)}
              className="font-medium text-coolGray underline hover:text-purplishBlue"
            >
              Change
            </button>
          </div>
          <div className="font-bold text-marineBlue">
            {isYearly
              ? `${planMonthlyPrice * 10}€/yr`
              : `${planMonthlyPrice}€/mo`}
          </div>
        </div>
        {isOnline && (
          <div className="mt-4 flex justify-between">
            <div className="font-medium text-coolGray">Online service</div>
            <div className="text-marineBlue">
              {isYearly ? `+${onlinePrice * 10}€/yr` : `+${onlinePrice}€/mo`}
            </div>
          </div>
        )}
        {isStorage && (
          <div className="mt-4 flex justify-between">
            <div className="font-medium text-coolGray">Larger storage</div>
            <div className="text-marineBlue">
              {isYearly ? `+${storagePrice * 10}€/yr` : `+${storagePrice}€/mo`}
            </div>
          </div>
        )}
        {isCustomizable && (
          <div className="mt-4 flex justify-between">
            <div className="font-medium text-coolGray">
              Customizable profile
            </div>
            <div className="text-marineBlue">
              {isYearly
                ? `+${customizablePrice * 10}€/yr`
                : `+${customizablePrice}€/mo`}
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 flex justify-between px-4 md:px-6">
        <div className="font-medium text-coolGray">Total (per month)</div>
        <div className="text-lg font-bold text-purplishBlue">
          {isYearly
            ? `${totalMonthlyPrice * 10}€/yr`
            : `${totalMonthlyPrice}€/mo`}
        </div>
      </div>
    </StepContainer>
  );
}
