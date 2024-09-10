'use client';

import { kumbhSansFont } from '@/app/ui/fonts';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import iconMenu from '/public/sneakers-ecommerce/icon-menu.svg';
import iconCart from '/public/sneakers-ecommerce/icon-cart.svg';
import imageAvatar from '/public/sneakers-ecommerce/image-avatar.png';
import imageProduct1 from '/public/sneakers-ecommerce/image-product-1.jpg';
import thumbnailProduct1 from '/public/sneakers-ecommerce/image-product-1-thumbnail.jpg';
import imageProduct2 from '/public/sneakers-ecommerce/image-product-2.jpg';
import thumbnailProduct2 from '/public/sneakers-ecommerce/image-product-2-thumbnail.jpg';
import imageProduct3 from '/public/sneakers-ecommerce/image-product-3.jpg';
import thumbnailProduct3 from '/public/sneakers-ecommerce/image-product-3-thumbnail.jpg';
import imageProduct4 from '/public/sneakers-ecommerce/image-product-4.jpg';
import thumbnailProduct4 from '/public/sneakers-ecommerce/image-product-4-thumbnail.jpg';
import iconMinus from '/public/sneakers-ecommerce/icon-minus.svg';
import iconPlus from '/public/sneakers-ecommerce/icon-plus.svg';
import iconClose from '/public/sneakers-ecommerce/icon-close.svg';
import Carousel from './components/Carousel';
import Cart from './components/Cart';

const PRODUCT_SLIDES = [
  { image: imageProduct1, thumbnail: thumbnailProduct1, alt: 'product1' },
  { image: imageProduct2, thumbnail: thumbnailProduct2, alt: 'product2' },
  { image: imageProduct3, thumbnail: thumbnailProduct3, alt: 'product3' },
  { image: imageProduct4, thumbnail: thumbnailProduct4, alt: 'product4' },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addItem = () => setItemCount((prevState) => prevState + 1);

  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount((prevState) => prevState - 1);
    }
  };

  const addItemToCart = () => {
    setCartItemCount((prevState) => prevState + itemCount);
    setItemCount(0);
  };

  const removeItemFromCart = () => {
    setCartItemCount(0);
    setCartOpen(false);
  };

  return (
    <div className={`${kumbhSansFont.className} bg-white text-darkGrayishBlue`}>
      <div
        className={`absolute z-50 h-screen w-screen ${menuOpen ? 'visible flex' : 'hidden'}`}
      >
        <div className="flex w-[60%] max-w-xs flex-col space-y-4 bg-white p-6 text-xl font-bold text-black">
          <Image
            src={iconClose}
            alt="mobile-menu-close"
            className="cursor-pointer pb-8"
            onClick={() => setMenuOpen(false)}
          />
          {['Collections', 'Men', 'Women', 'About', 'Contact'].map(
            (menuItem) => (
              <a key={menuItem} href="#">
                {menuItem}
              </a>
            )
          )}
        </div>
        <div className="flex-1 bg-black opacity-75"></div>
      </div>

      <div className="mx-5 flex h-20 items-center justify-between border-b-2 border-lightGrayishBlue md:mx-12 lg:mx-32">
        <div className="flex items-center space-x-4">
          <Image
            src={iconMenu}
            alt="mobile-menu-open"
            className="h-[15px] w-[16px] cursor-pointer md:hidden"
            onClick={() => setMenuOpen(true)}
          />

          <Link
            href="/sneakers-ecommerce"
            className={`${kumbhSansFont.className} cursor-pointer pb-1.5 text-4xl font-bold tracking-tight text-veryDarkBlue`}
          >
            sneakers
          </Link>
        </div>

        <div className="box-border hidden h-20 space-x-6 pt-8 md:flex">
          {['Collections', 'Men', 'Women', 'About', 'Contact'].map(
            (menuItem) => (
              <a
                href="#"
                key={menuItem}
                className="border-b-orange hover:border-b-4 hover:text-veryDarkBlue"
              >
                {menuItem}
              </a>
            )
          )}
        </div>

        <div className="flex items-center space-x-6 md:space-x-8">
          <div
            className="relative cursor-pointer"
            onClick={() => setCartOpen((prevState) => !prevState)}
          >
            <Image src={iconCart} alt="cart" className="w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-4 w-5 items-center justify-center rounded-full bg-orange text-xxs font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </div>
          <div className="cursor-pointer rounded-full border-2 hover:border-orange">
            <Image src={imageAvatar} alt="avatar" className="w-7 md:w-9" />
          </div>
        </div>
      </div>

      <Cart
        open={cartOpen}
        count={cartItemCount}
        removeItemFromCart={removeItemFromCart}
      />

      <div className="mb-20 flex flex-col items-center justify-center md:mx-8 md:mt-16 md:flex-row md:space-x-12 md:px-12 lg:mx-16 lg:items-start lg:px-32">
        <div className="flex-1 lg:max-w-xl">
          <Carousel slides={PRODUCT_SLIDES} />
        </div>
        <div className="flex-1 px-6 lg:mt-16 lg:max-w-xl">
          <h1 className="mt-7 pb-3 text-xs font-bold uppercase tracking-widest md:mt-0">
            Sneaker company
          </h1>
          <h2 className="pb-4 text-4xl font-bold text-veryDarkBlue md:text-4xl">
            Fall Limited Edition Sneakers
          </h2>
          <p className="pb-6 text-lg md:text-base">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="flex flex-row items-center justify-between font-bold md:flex-col md:items-start">
            <div className="flex items-center space-x-5">
              <span className="text-3xl text-veryDarkBlue">125.00 €</span>
              <span className="rounded-md bg-black px-2.5 py-0.5 text-white">
                50%
              </span>
            </div>
            <span className="text-lg line-through">250.00 €</span>
          </div>
          <div className="mt-5 flex flex-col md:flex-row md:space-x-3">
            <div className="flex h-14 min-w-32 items-center justify-between space-x-4 rounded-lg bg-lightGrayishBlue px-6 xl:min-w-40">
              <Image
                src={iconMinus}
                onClick={removeItem}
                className="cursor-pointer"
                alt="decrement"
              />
              <div className="font-bold text-veryDarkBlue">{itemCount}</div>
              <Image
                src={iconPlus}
                onClick={addItem}
                className="cursor-pointer"
                alt="increment"
              />
            </div>
            <button
              onClick={addItemToCart}
              className="mt-3 flex h-14 w-full items-center justify-center space-x-4 rounded-xl bg-orange px-2 shadow-lg hover:opacity-80 md:mt-0 md:max-w-sm"
            >
              <Image src={iconCart} alt="icon-cart" className="h-4 w-4" />
              <div className="font-bold text-veryDarkBlue">Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
