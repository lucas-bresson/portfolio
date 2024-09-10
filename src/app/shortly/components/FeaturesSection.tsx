import Image from 'next/image';
import iconBrandRecognition from '/public/shortly/icon-brand-recognition.svg';
import iconDetailedRecords from '/public/shortly/icon-detailed-records.svg';
import iconFullyCustomizable from '/public/shortly/icon-fully-customizable.svg';

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-100 pb-32">
      <div className="container relative mx-auto flex flex-col items-start px-6 md:flex-row md:space-x-7">
        <div className="absolute left-16 top-24 hidden h-3 w-10/12 bg-cyan md:block md:space-y-7" />
        <div className="absolute left-1/2 -ml-1 h-full w-2 bg-cyan md:hidden" />

        <div className="relative flex flex-col space-y-6 rounded-lg bg-white p-6 md:w-1/3">
          <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
              <Image src={iconBrandRecognition} alt="brand recognition" />
            </div>
          </div>
          <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
            Brand recognition
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </div>

        <div className="relative mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 md:mt-8 md:w-1/3">
          <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
              <Image src={iconDetailedRecords} alt="detailed records" />
            </div>
          </div>
          <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
            Detailed records
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Gain insight into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="relative mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 md:mt-16 md:w-1/3">
          <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
              <Image src={iconFullyCustomizable} alt="fully customizable" />
            </div>
          </div>
          <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
            Fully Customizable
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
