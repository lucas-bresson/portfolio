import Image from 'next/image';
import bgQuotes from '../../../../public/fylo/bg-quotes.png';
import profile1 from '../../../../public/fylo/profile-1.jpg';
import profile2 from '../../../../public/fylo/profile-2.jpg';
import profile3 from '../../../../public/fylo/profile-3.jpg';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pb-80 pt-12 md:pb-96">
        <div className="relative flex w-full flex-col space-y-6 md:flex-row md:space-x-12 md:space-y-0">
          <Image
            src={bgQuotes}
            alt=""
            className="absolute -top-2 left-1 w-10 md:-top-16 md:w-20"
          />

          <div className="dark:bg-darkBlue3 flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-4">
              <Image src={profile1} alt="" className="h-10 w-10 rounded-full" />
              <div>
                <h5 className="text-sm font-semibold">Satish Patel</h5>
                <p className="text-xs font-extralight">Founder & CEO. Huddle</p>
              </div>
            </div>
          </div>

          <div className="dark:bg-darkBlue3 flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-4">
              <Image src={profile2} alt="" className="h-10 w-10 rounded-full" />
              <div>
                <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                <p className="text-xs font-extralight">
                  Founder & CEO. Huddle 2
                </p>
              </div>
            </div>
          </div>

          <div className="dark:bg-darkBlue3 flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-4">
              <Image src={profile3} alt="" className="h-10 w-10 rounded-full" />
              <div>
                <h5 className="text-sm font-semibold">Eva Boyd</h5>
                <p className="text-xs font-extralight">
                  Founder & CEO. Huddle 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
