import Image from 'next/image';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import StepContainer from './StepContainer';
import iconCheckmark from '/public/multi-step-form/icon-checkmark.svg';
import { Inputs } from '../page';
import useMonthlyPrices from '../hooks/useMonthlyPrices';

export default function Step3({
  register,
  setValue,
  watch,
}: {
  register: UseFormRegister<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  watch: UseFormWatch<Inputs>;
}) {
  const { onlinePrice, storagePrice, customizablePrice } = useMonthlyPrices();
  const isYearly = watch('subscription') === 'yearly';
  const isOnline = watch('online');
  const isStorage = watch('storage');
  const isCustomizable = watch('customizable');

  return (
    <StepContainer
      title="Pick add-ons"
      headline="Add-ons help enhance your gaming experience."
    >
      <div className="flex flex-col space-y-4">
        <label
          htmlFor="online"
          className={`flex w-full cursor-pointer items-center justify-between rounded-lg border p-3 hover:border-purplishBlue md:py-6 ${isOnline ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
        >
          <input
            id="online"
            type="checkbox"
            {...register('online')}
            onChange={(e) => setValue('online', e.target.checked)}
            className="peer sr-only"
          />
          <div className="flex items-center">
            <div
              className={`ml-1 mr-4 flex h-6 w-6 items-center justify-center rounded-sm md:ml-3 md:mr-8 ${isOnline ? 'border-purplishBlue bg-purplishBlue' : 'border border-lightGray'}`}
            >
              {isOnline && <Image src={iconCheckmark} alt="checkmark" />}
            </div>
            <div>
              <div className="font-bold text-marineBlue">Online service</div>
              <div className="text-coolGray md:pt-1">
                Access to multiplayer games
              </div>
            </div>
          </div>
          <div className="text-purplishBlue">{`${isYearly ? `+${onlinePrice * 10}€/yr` : `+${onlinePrice}€/mo`}`}</div>
        </label>

        <label
          htmlFor="storage"
          className={`flex w-full cursor-pointer items-center justify-between rounded-lg border p-3 hover:border-purplishBlue md:py-6 ${isStorage ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
        >
          <input
            id="storage"
            type="checkbox"
            {...register('storage')}
            onChange={(e) => setValue('storage', e.target.checked)}
            className="peer sr-only"
          />
          <div className="flex items-center">
            <div
              className={`ml-1 mr-4 flex h-6 w-6 items-center justify-center rounded-sm md:ml-3 md:mr-8 ${isStorage ? 'border-purplishBlue bg-purplishBlue' : 'border border-lightGray'}`}
            >
              {isStorage && <Image src={iconCheckmark} alt="checkmark" />}
            </div>
            <div>
              <div className="font-bold text-marineBlue">Larger storage</div>
              <div className="text-coolGray md:pt-1">
                Extra 1TB of cloud save
              </div>
            </div>
          </div>
          <div className="text-purplishBlue">{`${isYearly ? `+${storagePrice * 10}€/yr` : `+${storagePrice}€/mo`}`}</div>
        </label>

        <label
          htmlFor="customizable"
          className={`flex w-full cursor-pointer items-center justify-between rounded-lg border p-3 hover:border-purplishBlue md:py-6 ${isCustomizable ? 'border-purplishBlue bg-magnolia' : 'border-lightGray'}`}
        >
          <input
            id="customizable"
            type="checkbox"
            {...register('customizable')}
            onChange={(e) => setValue('customizable', e.target.checked)}
            className="peer sr-only"
          />
          <div className="flex items-center">
            <div
              className={`ml-1 mr-4 flex h-6 w-6 items-center justify-center rounded-sm md:ml-3 md:mr-8 ${isCustomizable ? 'border-purplishBlue bg-purplishBlue' : 'border border-lightGray'}`}
            >
              {isCustomizable && <Image src={iconCheckmark} alt="checkmark" />}
            </div>
            <div>
              <div className="font-bold text-marineBlue">
                Customizable profile
              </div>
              <div className="text-coolGray md:pt-1">
                Custom theme on your profile
              </div>
            </div>
          </div>
          <div className="text-purplishBlue">{`${isYearly ? `+${customizablePrice * 10}€/yr` : `+${customizablePrice}€/mo`}`}</div>
        </label>
      </div>
    </StepContainer>
  );
}
