'use client';

import { jetBrainsFont } from '@/app/ui/fonts';
import { useState } from 'react';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import iconCopy from '/public/password-generator/icon-copy.svg';
import generatePassword, {
  calculateStrength,
} from './helpers/generatePassword';
import Dots from './components/Dots';

type GeneratePasswordForm = {
  length: number;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

const getStrengthConfig = (strength: number) => {
  switch (strength) {
    default:
    case 1:
      return { strengthText: 'Low', strengthColor: 'border-red-600' };
    case 2:
      return { strengthText: 'Medium', strengthColor: 'border-orange-600' };
    case 3:
      return { strengthText: 'High', strengthColor: 'border-lime-600' };
    case 4:
      return { strengthText: 'Secure', strengthColor: 'border-lime-400' };
  }
};

export default function Page() {
  const [password, setPassword] = useState('');
  const [clipboard, setClipboard] = useState(false);
  const [loading, setLoading] = useState(false);

  const { watch, register, setValue, handleSubmit } =
    useForm<GeneratePasswordForm>({
      defaultValues: {
        length: 12,
        uppercase: true,
        numbers: true,
        symbols: false,
      },
    });

  const length = watch('length');
  const uppercase = watch('uppercase');
  const numbers = watch('numbers');
  const symbols = watch('symbols');

  const strength = calculateStrength({ length, uppercase, numbers, symbols });
  const { strengthText, strengthColor } = getStrengthConfig(strength);

  const onSubmit: SubmitHandler<GeneratePasswordForm> = (
    data: GeneratePasswordForm
  ) => {
    setLoading(true);
    const password = generatePassword(data);

    setTimeout(() => {
      setPassword(password);
      setLoading(false);
    }, 800);
  };

  const copyToClipboard = () => {
    if (password) {
      setClipboard(true);
      navigator.clipboard.writeText(password);

      setTimeout(() => setClipboard(false), 1000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 py-12 text-stone-100 sm:items-center">
      <div
        className={`${jetBrainsFont.className} mx-auto w-full px-4 text-sm xs:px-12 sm:max-w-lg sm:pb-24 sm:text-base lg:max-w-xl lg:text-xl`}
      >
        <h1 className="text-center text-stone-400 sm:pb-2 lg:pb-4 lg:text-2xl">
          Password Generator
        </h1>
        <div className="my-4 flex flex-row items-center justify-between rounded-t-md bg-gray-600 p-3">
          <input
            type="text"
            value={password}
            placeholder="qlKY6q0gOh2G"
            className="w-full bg-gray-600"
            disabled
          />
          <span className="-mr-6 text-xs leading-none text-lime-400">
            {clipboard ? 'Copied to clipboard' : ''}
          </span>
          <Image
            onClick={copyToClipboard}
            src={iconCopy}
            className="cursor-pointer hover:scale-105"
            alt="Copy to clipboard"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-b-md bg-gray-600 px-3 py-4 text-sm sm:text-base lg:text-xl">
            <div className="flex flex-row items-center justify-between">
              <label>Character Length</label>
              <p className="text-lg font-bold text-lime-400">{length}</p>
            </div>
            <input
              type="range"
              min="6"
              max="24"
              step="1"
              defaultValue={12}
              className="mb-4 h-2 w-full cursor-pointer appearance-none rounded-sm bg-gray-900"
              {...register('length')}
            />
            <div className="my-2 sm:my-4 lg:my-6">
              <div
                onClick={() => setValue('uppercase', !uppercase)}
                className="space-x-2 lg:pb-1"
              >
                <input
                  type="checkbox"
                  className="h-3 w-3 appearance-none border border-white bg-gray-600 checked:border-lime-400 checked:bg-lime-400 checked:content-check"
                  {...register('uppercase')}
                />
                <label>Include Uppercase Letters</label>
              </div>
              <div
                onClick={() => setValue('numbers', !numbers)}
                className="space-x-2 lg:pb-1"
              >
                <input
                  type="checkbox"
                  className="h-3 w-3 appearance-none border border-white bg-gray-600 checked:border-lime-400 checked:bg-lime-400 checked:content-check"
                  {...register('numbers')}
                />
                <label>Include Numbers</label>
              </div>
              <div
                onClick={() => setValue('symbols', !symbols)}
                className="space-x-2 lg:pb-1"
              >
                <input
                  type="checkbox"
                  className="h-3 w-3 appearance-none border border-white bg-gray-600 checked:border-lime-400 checked:bg-lime-400 checked:content-check"
                  {...register('symbols')}
                />
                <label>Include Symbols</label>
              </div>
            </div>

            <div className="my-5 flex items-center justify-between bg-gray-900 p-3">
              <h3 className="text-xs font-medium uppercase text-gray-400 sm:text-sm lg:text-base">
                Strength
              </h3>
              <div className="flex items-center space-x-2">
                <div>{strengthText}</div>
                {length >= 12 && (
                  <div className={`h-4 w-2 border-2 ${strengthColor}`} />
                )}
                {uppercase && (
                  <div className={`h-4 w-2 border-2 ${strengthColor}`} />
                )}
                {numbers && (
                  <div className={`h-4 w-2 border-2 ${strengthColor}`} />
                )}
                {symbols && (
                  <div className={`h-4 w-2 border-2 ${strengthColor}`} />
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center space-x-4 rounded-sm border-2 border-lime-400 bg-lime-400 p-2 font-semibold uppercase text-black hover:bg-gray-600 hover:text-lime-400"
            >
              {loading ? 'Generating' : 'Generate'}
              {loading && <Dots />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
