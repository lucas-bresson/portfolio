import Image from 'next/image';
import iconThankYou from '/public/multi-step-form/icon-thank-you.svg';

export default function SuccessfullySubmitted() {
  return (
    <div className="my-12 flex h-full flex-col items-center justify-center md:mt-0">
      <Image src={iconThankYou} alt="thank you icon" />
      <div className="mt-6 text-3xl font-bold text-marineBlue md:mt-8">
        Thank you!
      </div>
      <p className="mt-4 text-center text-coolGray md:mt-6">
        Thanks for confirming your subscription! <br />
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@example.com
      </p>
    </div>
  );
}
