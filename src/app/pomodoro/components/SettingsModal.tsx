import Image from 'next/image';
import iconClose from '/public/pomodoro/icon-close.svg';
import iconArrowUp from '/public/pomodoro/icon-arrow-up.svg';
import iconArrowDown from '/public/pomodoro/icon-arrow-down.svg';
import iconCheck from '/public/pomodoro/icon-check.svg';
import { Dispatch, SetStateAction, useState } from 'react';
import { getFontClassname, getAccentColor } from '../helpers';

const TimeInput = ({
  label,
  value,
  setValue,
  max,
}: {
  label: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  max: number;
}) => (
  <div className="pomodoro w-full space-y-2">
    <div className="text-sm text-gray-400">{label}</div>
    <div className="flex justify-between rounded-lg bg-indigo-50 px-4 py-3">
      <input
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="bg-indigo-50"
      />
      <div className="flex flex-col items-center justify-center space-y-1.5">
        <Image
          onClick={() => value < max && setValue((prevState) => prevState + 1)}
          className="w-4 cursor-pointer"
          src={iconArrowUp}
          alt="arrow-up"
        />
        <Image
          onClick={() => value > 1 && setValue((prevState) => prevState - 1)}
          className="w-4 cursor-pointer"
          src={iconArrowDown}
          alt="arrow-down"
        />
      </div>
    </div>
  </div>
);

const FontInput = ({
  font,
  selected,
  onClick,
}: {
  font: number;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${getFontClassname(font)} ${selected ? 'bg-black text-white' : 'bg-indigo-50 text-gray-500'}`}
  >
    Aa
  </button>
);

const ColorInput = ({
  color,
  selected,
  onClick,
}: {
  color: number;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex h-10 w-10 items-center justify-center rounded-full ${getAccentColor(color).background}`}
  >
    {selected && <Image src={iconCheck} alt="icon-check" className="w-4" />}
  </button>
);

export default function SettingsModal({
  appTimers,
  appFont,
  appColor,
  setSettings,
  closeModal,
}: {
  appTimers: { pomodoro: number; short: number; long: number };
  appFont: number;
  appColor: number;
  setSettings: any;
  closeModal: () => void;
}) {
  const [pomodoro, setPomodoro] = useState(appTimers.pomodoro);
  const [short, setShort] = useState(appTimers.short);
  const [long, setLong] = useState(appTimers.long);
  const [font, setFont] = useState(appFont);
  const [color, setColor] = useState(appColor);

  const applySettings = () => {
    setSettings({ pomodoro, short, long, font, color });
    closeModal();
  };

  return (
    <div className="absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
      <div
        className={`mx-auto w-[90%] rounded-xl bg-white font-bold text-slate-900 sm:max-w-lg ${getFontClassname(font)}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-10 py-8">
          <div className="text-3xl">Settings</div>
          <Image
            src={iconClose}
            alt="close icon"
            onClick={closeModal}
            className="h-4 w-4 cursor-pointer"
          />
        </div>
        <div className="px-10">
          <div className="mb-4 mt-6 uppercase tracking-doubleWide">
            Time (minutes)
          </div>
          <div className="flex items-center justify-between space-x-4 border-b border-slate-200 pb-6">
            <TimeInput
              label="pomodoro"
              value={pomodoro}
              max={90}
              setValue={setPomodoro}
            />
            <TimeInput
              label="short break"
              value={short}
              max={10}
              setValue={setShort}
            />
            <TimeInput
              label="long break"
              value={long}
              max={30}
              setValue={setLong}
            />
          </div>

          <div className="flex items-center justify-between border-b border-slate-200 py-6">
            <div className="uppercase tracking-doubleWide">Font</div>
            <div className="flex space-x-3">
              <FontInput
                font={1}
                selected={font === 1}
                onClick={() => setFont(1)}
              />
              <FontInput
                font={2}
                selected={font === 2}
                onClick={() => setFont(2)}
              />
              <FontInput
                font={3}
                selected={font === 3}
                onClick={() => setFont(3)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6">
            <div className="uppercase tracking-doubleWide">Color</div>
            <div className="flex space-x-3">
              <ColorInput
                color={1}
                selected={color === 1}
                onClick={() => setColor(1)}
              />
              <ColorInput
                color={2}
                selected={color === 2}
                onClick={() => setColor(2)}
              />
              <ColorInput
                color={3}
                selected={color === 3}
                onClick={() => setColor(3)}
              />
            </div>
          </div>

          <div className="flex translate-y-7 justify-center">
            <button
              onClick={applySettings}
              className={`w-32 rounded-full px-8 py-4 text-white ${getAccentColor(color).background || appColor}`}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
