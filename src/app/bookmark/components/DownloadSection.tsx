import Image from 'next/image';
import logoChrome from '/public/bookmark/logo-chrome.svg';
import logoFirefox from '/public/bookmark/logo-firefox.svg';
import logoOpera from '/public/bookmark/logo-opera.svg';

const DownloadExtensionButton = () => (
  <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
    <a
      href="#"
      className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
    >
      Add & Install Extension
    </a>
  </div>
);

export default function DownloadSection() {
  return (
    <>
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Download the extension
          </h2>
        </div>
      </section>

      <section id="download-boxes" className="py-32">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center space-y-10 px-10 md:flex-row md:space-x-7 md:space-y-0 md:px-6">
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:w-1/3">
            <div className="flex justify-center">
              <Image src={logoChrome} alt="chrome" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum Version 62</p>
            <DownloadExtensionButton />
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-8">
              <div className="flex justify-center">
                <Image src={logoFirefox} alt="firefox" />
              </div>
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimum Version 55</p>
              <DownloadExtensionButton />
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-16">
              <div className="flex justify-center">
                <Image src={logoOpera} alt="opera" />
              </div>
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimum Version 46</p>
              <DownloadExtensionButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
