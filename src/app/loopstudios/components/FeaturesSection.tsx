import Image from 'next/image';
import { josefinSans } from '@/app/ui/fonts';
import interactiveDesktop from '/public/loopstudios/desktop/image-interactive.jpg';

export default function FeaturesSection() {
  return (
    <section id="feature">
      <div
        className={`container relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0`}
      >
        <Image src={interactiveDesktop} alt="interactive VR" />
        <div className="top-48 flex flex-col items-center bg-white pr-0 md:absolute md:right-0 md:items-start md:py-20 md:pl-20">
          <h2
            className={`${josefinSans.className} mb-6 mt-10 max-w-lg text-center text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl`}
          >
            The leader in interactive VR
          </h2>
          <p
            className={`${josefinSans.className} max-w-md text-center md:text-left`}
          >
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
