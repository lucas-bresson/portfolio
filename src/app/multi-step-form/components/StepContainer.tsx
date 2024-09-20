import { ReactNode } from 'react';

export default function StepContainer({
  title,
  headline,
  children,
}: {
  title: string;
  headline: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="text-3xl font-bold text-marineBlue">{title}</div>
      <div className="mt-4 text-lg tracking-tight text-coolGray">
        {headline}
      </div>
      <div className="min-h-72 md:mb-32">{children}</div>
    </>
  );
}
