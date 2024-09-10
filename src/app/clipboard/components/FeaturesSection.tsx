import Image from 'next/image';
import imageComputer from '/public/clipboard/image-computer.png';

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="clipboard-section my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2">
            <Image
              className="right-[50%] top-0 md:absolute"
              src={imageComputer}
              alt="computer"
            />
          </div>
          <div className="mb-24 mt-16 flex flex-col items-center space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
            <div>
              <h5 className="clipboard-h5">Quick Search</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h5 className="clipboard-h5">iCloud Sync</h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div>
              <h5 className="clipboard-h5">Completely History</h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
