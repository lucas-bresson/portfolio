'use client';

import { rubik } from '@/app/ui/fonts';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/bookmark/logo-bookmark.svg';
import illustrationHero from '../../../public/bookmark/illustration-hero.svg';
import imagePanel1 from '../../../public/bookmark/illustration-features-tab-1.svg';
import imagePanel2 from '../../../public/bookmark/illustration-features-tab-2.svg';
import imagePanel3 from '../../../public/bookmark/illustration-features-tab-3.svg';
import logoChrome from '../../../public/bookmark/logo-chrome.svg';
import logoFirefox from '../../../public/bookmark/logo-firefox.svg';
import logoOpera from '../../../public/bookmark/logo-opera.svg';
import logoBookmarkFooter from '../../../public/bookmark/logo-bookmark-footer.svg';
import iconTwitter from '../../../public/bookmark/icon-twitter.svg';
import iconFacebook from '../../../public/bookmark/icon-facebook.svg';

export default function Page() {
  const [hamburger, setHamburger] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className={`${rubik.className} overflow-x-hidden`}>
      <nav className="container relative mx-auto p-6">
        {/* Flex Container for Nav Items */}
        <div className="my-6 flex items-center justify-between space-x-20">
          {/* Logo */}
          <div className="z-30">
            <Image id="logo" src={logo} alt="logo" />
          </div>
          {/* Menu Items */}
          <div className="text-grayishBlue hidden items-center space-x-10 uppercase md:flex">
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
          {/* Hamburger Button */}
          <button
            className={`hamburger z-30 block focus:outline-none md:hidden ${
              hamburger ? 'open' : ''
            }`}
            onClick={() => setHamburger((x) => !x)}
          >
            <span
              className={`hamburger-top ${
                hamburger ? 'bg-white' : 'bg-veryDarkBlue'
              }`}
            ></span>
            <span
              className={`hamburger-middle ${
                hamburger ? 'bg-white' : 'bg-veryDarkBlue'
              }`}
            ></span>
            <span
              className={`hamburger-bottom ${
                hamburger ? 'bg-white' : 'bg-veryDarkBlue'
              }`}
            ></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-20 ${
            hamburger ? 'flex' : 'hidden'
          } m-h-screen h-full w-full flex-col items-center divide-y divide-gray-500 self-end bg-veryDarkBlue px-6 py-1 pb-4 pt-24 uppercase tracking-widest text-white opacity-90`}
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

      {/* Hero Section */}
      <section id="hero">
        {/* Container for Image & Content */}
        <div className="container mx-auto flex flex-col-reverse p-6 lg:mb-0 lg:flex-row">
          {/* Content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-center text-3xl font-semibold lg:text-left lg:text-6xl">
              A Simple Bookmark Manager
            </h1>
            <p className="max-x-md mx-auto text-center text-lg text-gray-400 lg:mx-0 lg:mt-0 lg:text-left lg:text-2xl">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free
            </p>
            {/* Buttons Container */}
            <div className="flex w-full items-center justify-center space-x-4 lg:justify-start">
              <a
                href="#"
                className="rounded border-2 border-softBlue bg-softBlue p-4 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-softBlue md:text-base"
              >
                Get it on Chrome
              </a>
              <a
                href="#"
                className="rounded border-2 border-gray-300 bg-gray-300 p-4 text-sm font-semibold text-black shadow-md hover:bg-white hover:text-gray-600 md:text-base"
              >
                Get it on Firefox
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="absolute left-[30%] top-52 hidden h-[300px] w-[2000px] rounded-l-full bg-softBlue lg:block" />
            <Image
              className="relative z-10 overflow-x-visible lg:top-24 xl:top-0"
              src={illustrationHero}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Features Heading */}
      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-center text-4xl font-semibold">Features</h2>
          <p className="text-grayishBlue mx-auto max-w-md text-center">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      <section id="tabs">
        {/* Tabs/Panel Container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="absolute right-[60%] top-60 hidden h-[300px] w-[1000px] rounded-r-full bg-softBlue lg:block" />
          {/* Tabs Flex Container */}
          <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
            {/* Tab 1 */}
            <div className="flex justify-center border-b text-center text-gray-600 hover:cursor-pointer hover:text-softRed md:w-1/3 md:border-b-0">
              <div
                onClick={() => setActiveTabIndex(0)}
                className={`py-5 ${
                  activeTabIndex === 0 ? 'border-b-4 border-softRed' : ''
                }`}
              >
                Simple Bookmarking
              </div>
            </div>
            {/* Tab 2 */}
            <div className="flex justify-center border-b text-center text-gray-600 hover:cursor-pointer hover:text-softRed md:w-1/3 md:border-b-0">
              <div
                onClick={() => setActiveTabIndex(1)}
                className={`py-5 ${
                  activeTabIndex === 1 ? 'border-b-4 border-softRed' : ''
                }`}
              >
                Speedy Searching
              </div>
            </div>
            {/* Tab 3 */}
            <div className="flex justify-center border-b text-center text-gray-600 hover:cursor-pointer hover:text-softRed md:w-1/3 md:border-b-0">
              <div
                onClick={() => setActiveTabIndex(2)}
                className={`py-5 ${
                  activeTabIndex === 2 ? 'border-b-4 border-softRed' : ''
                }`}
              >
                Easy sharing
              </div>
            </div>
          </div>
          {/* Tab Panels */}
          <div id="panels" className="container mx-auto">
            {/* Panel 1 */}
            <div
              className={`flex flex-col ${
                activeTabIndex !== 0 ? 'hidden' : ''
              } panel panel-1 py-5 md:flex-row md:space-x-7`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <Image className="relative z-10" src={imagePanel1} alt="" />
              </div>
              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="text-grayishBlue text-center md:text-left">
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
            {/* Panel 2 */}
            <div
              className={`flex flex-col ${
                activeTabIndex !== 1 ? 'hidden' : ''
              } panel panel-1 py-5 md:flex-row md:space-x-7`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <Image className="relative z-10" src={imagePanel2} alt="" />
              </div>
              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="text-grayishBlue text-center md:text-left">
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
            {/* Panel 3 */}
            <div
              className={`flex flex-col ${
                activeTabIndex !== 2 ? 'hidden' : ''
              } panel panel-1 py-5 md:flex-row md:space-x-7`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <Image className="relative z-10" src={imagePanel3} alt="" />
              </div>
              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="text-grayishBlue text-center md:text-left">
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

      {/* Download Heading */}
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Download the extension
          </h2>
        </div>
      </section>

      {/* Download Boxes */}
      <section id="download-boxes" className="py-32">
        {/* Boxes Container */}
        <div className="relative mx-auto flex max-w-5xl flex-col items-center space-y-10 px-10 md:flex-row md:space-x-7 md:space-y-0 md:px-6">
          {/* Box 1 */}
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <Image src={logoChrome} alt="chrome" />
            </div>
            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum Version 62</p>
            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
          {/* Box 2 */}
          <div className="w-full md:w-1/3">
            <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-8">
              {/* Image */}
              <div className="flex justify-center">
                <Image src={logoFirefox} alt="chrome" />
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimum Version 55</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full md:w-1/3">
            <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-16">
              {/* Image */}
              <div className="flex justify-center">
                <Image src={logoOpera} alt="chrome" />
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimum Version 46</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Heading */}
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-graishBlue mx-auto max-w-lg px-6 text-center">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq-accordion">
        {/* Main Container */}
        <div className="container mx-auto mb-32 px-6">
          {/* Accordion Container */}
          <div className="m-8 mx-auto max-w-2xl overflow-hidden">
            {/* Tab 1 */}
            <div className="group border-b py-1 outline-none" tabIndex={1}>
              {/* Tab Flex Container */}
              <div className="duratin-500 ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition">
                {/* Tab Title */}
                <div className="ease transition duration-500 group-hover:text-red-500">
                  What is Bookmark?
                </div>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/* Tab Inner Content */}
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="group border-b py-1 outline-none" tabIndex={2}>
              {/* Tab Flex Container */}
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                {/* Tab Title */}
                <div className="ease transition duration-500 group-hover:text-red-500">
                  How can I request a new browser?
                </div>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="group border-b py-1 outline-none" tabIndex={3}>
              {/* Tab Flex Container */}
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                {/* Tab Title */}
                <div className="ease transition duration-500 group-hover:text-red-500">
                  Is there a mobile app?
                </div>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="group border-b py-1 outline-none" tabIndex={4}>
              {/* Tab Flex Container */}
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                {/* Tab Title */}
                <div className="ease transition duration-500 group-hover:text-red-500">
                  What about other Chromium browsers?
                </div>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-softBlue">
        {/* Main Container */}
        <div className="mx-auto max-w-lg py-24">
          <p className="mb-6 text-center text-lg uppercase tracking-widest text-white">
            35,000+ Already Joined
          </p>
          <h2 className="mb-6 px-3 text-center text-3xl font-semibold text-white md:text-4xl">
            Stay up-to-date with what we&apos;re doing
          </h2>

          {/* Form */}
          <form className="mx-auto flex max-w-2xl flex-col items-start justify-center space-y-6 px-6 text-base md:flex-row md:space-x-4 md:space-y-0 md:px-0">
            {/* Input & Button Container */}
            <div className="mx-auto flex flex-col items-center justify-between md:mx-0 md:flex-row">
              <input
                type="text"
                className="border-1 mb-4 flex-1 rounded-lg border-white px-6 pb-2 pt-3 focus:outline-none md:mb-0 md:mr-3"
                placeholder="Enter your email address"
              />

              <input
                type="submit"
                className="inline-flex transform cursor-pointer rounded-lg bg-softRed px-6 py-3 text-center font-semibold text-white duration-200 hover:opacity-90 focus:outline-none"
                value="Contact Us"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-veryDarkBlue py-16">
        {/* Footer Flex Container */}
        <div className="container mx-auto flex flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0">
          {/* Logo/Menu Container */}
          <div className="text-grayishBlue flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-x-14 md:space-y-0">
            <Image src={logoBookmarkFooter} alt="" className="mb-1" />

            <a href="#features" className="uppercase hover:text-softRed">
              Features
            </a>
            <a href="#download" className="uppercase hover:text-softRed">
              Download
            </a>
            <a href="#faq" className="uppercase hover:text-softRed">
              FAQ
            </a>
          </div>

          {/* Social Container */}
          <div className="flex space-x-10">
            <a href="#">
              <Image src={iconFacebook} alt="" className="ficon h-6" />
            </a>
            <a href="#">
              <Image src={iconTwitter} alt="" className="ficon h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
