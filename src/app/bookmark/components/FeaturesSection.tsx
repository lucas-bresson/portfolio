import Image from 'next/image';
import { useState } from 'react';
import imagePanel1 from '/public/bookmark/illustration-features-tab-1.svg';
import imagePanel2 from '/public/bookmark/illustration-features-tab-2.svg';
import imagePanel3 from '/public/bookmark/illustration-features-tab-3.svg';

export default function FeaturesSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-center text-4xl font-semibold">Features</h2>
          <p className="text-fadedSteel mx-auto max-w-md text-center">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      <section id="tabs">
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="absolute right-[60%] top-60 hidden h-[300px] w-[1000px] rounded-r-full bg-softBlue lg:block" />
          <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
            <div className="flex justify-center border-b text-center text-gray-600 hover:cursor-pointer hover:text-softRed md:w-1/3 md:border-b-0">
              <div
                onClick={() => setActiveTabIndex(0)}
                className={`py-5 ${activeTabIndex === 0 ? 'border-b-4 border-softRed' : ''}`}
              >
                Simple Bookmarking
              </div>
            </div>
            <div className="flex justify-center border-b text-center text-gray-600 hover:cursor-pointer hover:text-softRed md:w-1/3 md:border-b-0">
              <div
                onClick={() => setActiveTabIndex(1)}
                className={`py-5 ${activeTabIndex === 1 ? 'border-b-4 border-softRed' : ''}`}
              >
                Speedy Searching
              </div>
            </div>
            <div className="flex justify-center border-b text-center text-gray-600 hover:cursor-pointer hover:text-softRed md:w-1/3 md:border-b-0">
              <div
                onClick={() => setActiveTabIndex(2)}
                className={`py-5 ${activeTabIndex === 2 ? 'border-b-4 border-softRed' : ''}`}
              >
                Easy sharing
              </div>
            </div>
          </div>

          <div id="panels" className="container mx-auto">
            <div
              className={`flex flex-col ${activeTabIndex !== 0 ? 'hidden' : ''} panel panel-1 py-5 md:flex-row md:space-x-7`}
            >
              <div className="flex justify-center md:w-1/2">
                <Image
                  className="relative z-10"
                  src={imagePanel1}
                  alt="panel-1"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="text-fadedSteel text-center md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col ${activeTabIndex !== 1 ? 'hidden' : ''} panel panel-1 py-5 md:flex-row md:space-x-7`}
            >
              <div className="flex justify-center md:w-1/2">
                <Image
                  className="relative z-10"
                  src={imagePanel2}
                  alt="panel-2"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="text-fadedSteel text-center md:text-left">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col ${activeTabIndex !== 2 ? 'hidden' : ''} panel panel-1 py-5 md:flex-row md:space-x-7`}
            >
              <div className="flex justify-center md:w-1/2">
                <Image
                  className="relative z-10"
                  src={imagePanel3}
                  alt="panel-3"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="text-fadedSteel text-center md:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable a link that you can send at the click of a
                  button.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
