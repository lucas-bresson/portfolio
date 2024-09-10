import Image from 'next/image';
import { useState } from 'react';
import { josefinSans, alata } from '@/app/ui/fonts';
import logo from '/public/loopstudios/logo.svg';

export default function HeroSection() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <section
      id="hero"
      className="bg-[url('/../../../../loopstudios/mobile/image-hero.jpg')] bg-cover bg-no-repeat md:bg-[url('/../../../../loopstudios/desktop/image-hero.jpg')]"
    >
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          <Image src={logo} alt="logo" />
          <div
            className={`hidden h-10 ${alata.className} md:flex md:space-x-8`}
          >
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
          </div>

          <div className={`md:hidden ${hamburger ? 'open md:block' : ''} z-40`}>
            <button
              id="menu-btn"
              type="button"
              className="hamburger block focus:outline-none md:hidden"
              onClick={() => setHamburger((x) => !x)}
            >
              <span className={`hamburger-top bg-white`}></span>
              <span className={`hamburger-middle bg-white`}></span>
              <span className={`hamburger-bottom bg-white`}></span>
            </button>
          </div>
        </nav>

        <div
          id="menu"
          className={`absolute left-0 top-0 ${
            hamburger ? 'flex' : 'hidden'
          } h-3/5 w-full flex-col space-y-3 self-end bg-black py-1 pl-12 pt-40 text-lg uppercase text-white`}
        >
          <a href="#" className="hover:text-pink-500">
            About
          </a>
          <a href="#" className="hover:text-pink-500">
            Careers
          </a>
          <a href="#" className="hover:text-pink-500">
            Events
          </a>
          <a href="#" className="hover:text-pink-500">
            Products
          </a>
          <a href="#" className="hover:text-pink-500">
            Support
          </a>
        </div>
        <div
          className={`mb-32 mt-32 max-w-lg p-4 ${josefinSans.className} border-2 text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-6xl`}
        >
          Impressive experiences that deliver
        </div>
      </div>
    </section>
  );
}
