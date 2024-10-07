import Image from 'next/image';
import logo from '/public/bookmark/logo-bookmark.svg';
import { useState } from 'react';

export default function NavMenu() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav className="container relative mx-auto p-6">
      <div className="my-6 flex items-center justify-between space-x-20">
        <Image id="logo" src={logo} alt="logo" />

        <div className="text-fadedSteel hidden items-center space-x-10 uppercase md:flex">
          <a href="#features" className="tracking-widest hover:text-softRed">
            Features
          </a>
          <a href="#download" className="tracking-widest hover:text-softRed">
            Downloads
          </a>
          <a href="#faq" className="tracking-widest hover:text-softRed">
            FAQ
          </a>
          <a
            href="#"
            className="rounded-lg border-2 border-softRed bg-softRed px-8 py-2 text-white shadow-md hover:bg-white hover:text-softRed"
          >
            Login
          </a>
        </div>

        <button
          className={`hamburger z-30 block focus:outline-none md:hidden ${hamburger ? 'open' : ''}`}
          onClick={() => setHamburger((x) => !x)}
        >
          <span
            className={`hamburger-top ${hamburger ? 'bg-white' : 'bg-shadowyNavy'}`}
          />
          <span
            className={`hamburger-middle ${hamburger ? 'bg-white' : 'bg-shadowyNavy'}`}
          />
          <span
            className={`hamburger-bottom ${hamburger ? 'bg-white' : 'bg-shadowyNavy'}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-20 ${
          hamburger ? 'flex' : 'hidden'
        } m-h-screen bg-shadowyNavy h-full w-full flex-col items-center divide-y divide-gray-500 self-end px-6 py-1 pb-4 pt-24 uppercase tracking-widest text-white opacity-90`}
      >
        <div className="w-full py-3 text-center">
          <a href="#features" className="block hover:text-softRed">
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#download" className="block hover:text-softRed">
            Download
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#faq" className="block hover:text-softRed">
            FAQ
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#" className="block hover:text-softRed">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
