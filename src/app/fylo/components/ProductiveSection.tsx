import Image from 'next/image';
import iconArrow from '../../../../public/fylo/icon-arrow.svg';
import illustrationStayProductive from '../../../../public/fylo/illustration-stay-productive.png';

export default function ProductiveSection() {
  return (
    <section id="productive" className="bg-white dark:bg-darkBlue">
      <div className="container mx-auto flex flex-col items-center px-6 pb-32 pt-24 md:flex-row md:space-x-16">
        <div className="md:w-1/2">
          <Image src={illustrationStayProductive} alt="" className="mb-10" />
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>

            <p className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          <div className="border-accentCyan mt-4 flex flex-row items-center space-x-2 border-b hover:cursor-pointer">
            <a href="#" className="text-accentCyan">
              See how Fylo works
            </a>
            <Image src={iconArrow} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
