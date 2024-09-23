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
    <div>
      <div className="text-4xl font-bold text-marineBlue md:text-3xl">
        {title}
      </div>
      <div className="mt-2 text-xl tracking-tight text-coolGray md:text-base">
        {headline}
      </div>
      <div className="my-6 min-h-72 md:my-12 md:mb-12">{children}</div>
    </div>
  );
}
