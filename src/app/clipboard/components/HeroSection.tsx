import Image from 'next/image';
import logo from '../../../../public/clipboard/logo.svg';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-[url('/../../../../clipboard/bg-header-mobile.png')] bg-contain bg-no-repeat sm:bg-[url('/../../../../clipboard/bg-header-desktop.png')]"
    >
      <div className="clipboard-section mb-40 pt-16">
        <Image src={logo} className="mx-auto my-16" alt="logo" />
        <h3 className="clipboard-h3">A history of everything you copy</h3>
        <p className="clipboard-section-content mb-10 text-2xl">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        <div className="clipboard-button-container">
          <a
            href="#"
            className="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="bg-lightBlue rounded-full p-4 px-8 shadow-lg duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
