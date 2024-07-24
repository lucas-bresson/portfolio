"use client";

import { kumbhSansFont } from "@/app/ui/fonts";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import iconMenu from "../../../public/sneakers-ecommerce/icon-menu.svg";
import iconCart from "../../../public/sneakers-ecommerce/icon-cart.svg";
import imageAvatar from "../../../public/sneakers-ecommerce/image-avatar.png";
import imageProduct1 from "../../../public/sneakers-ecommerce/image-product-1.jpg";
import thumbnailProduct1 from "../../../public/sneakers-ecommerce/image-product-1-thumbnail.jpg";
import imageProduct2 from "../../../public/sneakers-ecommerce/image-product-2.jpg";
import thumbnailProduct2 from "../../../public/sneakers-ecommerce/image-product-2-thumbnail.jpg";
import imageProduct3 from "../../../public/sneakers-ecommerce/image-product-3.jpg";
import thumbnailProduct3 from "../../../public/sneakers-ecommerce/image-product-3-thumbnail.jpg";
import imageProduct4 from "../../../public/sneakers-ecommerce/image-product-4.jpg";
import thumbnailProduct4 from "../../../public/sneakers-ecommerce/image-product-4-thumbnail.jpg";
import iconMinus from "../../../public/sneakers-ecommerce/icon-minus.svg";
import iconPlus from "../../../public/sneakers-ecommerce/icon-plus.svg";
import iconClose from "../../../public/sneakers-ecommerce/icon-close.svg";
import Carousel from "./components/Carousel";
import Cart from "./components/Cart";

const PRODUCT_SLIDES = [
  { image: imageProduct1, thumbnail: thumbnailProduct1, alt: "product1" },
  { image: imageProduct2, thumbnail: thumbnailProduct2, alt: "product2" },
  { image: imageProduct3, thumbnail: thumbnailProduct3, alt: "product3" },
  { image: imageProduct4, thumbnail: thumbnailProduct4, alt: "product4" },
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
        className={`absolute h-screen w-screen z-50 ${menuOpen ? "flex visible" : "hidden"}`}
      >
        <div className="flex flex-col p-6 space-y-4 w-[60%] max-w-xs text-xl font-bold text-black bg-white">
          <Image
            src={iconClose}
            alt="mobile-menu-close"
            className="pb-8 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
          {["Collections", "Men", "Women", "About", "Contact"].map(
            (menuItem) => (
              <a key={menuItem} href="#">
                {menuItem}
              </a>
            )
          )}
        </div>
        <div className="flex-1 bg-black opacity-75"></div>
      </div>

      <div className="flex items-center justify-between h-20 mx-5 md:mx-12 lg:mx-32 border-b-2  border-lightGrayishBlue">
        <div className="flex items-center space-x-4">
          <Image
            src={iconMenu}
            alt="mobile-menu-open"
            className="w-[16px] h-[15px] md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />

          <Link
            href="/sneakers-ecommerce"
            className={`${kumbhSansFont.className} pb-1.5 text-4xl text-veryDarkBlue font-bold tracking-tight cursor-pointer`}
          >
            sneakers
          </Link>
        </div>

        <div className="hidden text-sm space-x-6 h-20 md:flex pt-8 box-border">
          {["Collections", "Men", "Women", "About", "Contact"].map(
            (menuItem) => (
              <a
                href="#"
                key={menuItem}
                className="hover:text-veryDarkBlue hover:border-b-4 border-b-orange"
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
            <Image src={iconCart} alt="cart" className="w-6 md:w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-2 w-5 h-4 rounded-full bg-orange text-white flex justify-center items-center text-xxs font-bold">
                {cartItemCount}
              </span>
            )}
          </div>
          <div className="rounded-full border-2 cursor-pointer hover:border-orange">
            <Image src={imageAvatar} alt="avatar" className="w-7 md:w-8" />
          </div>
        </div>
      </div>

      <Cart
        open={cartOpen}
        count={cartItemCount}
        removeItemFromCart={removeItemFromCart}
      />

      <div className="flex flex-col items-center md:flex-row md:mx-8 mb-20 md:mt-16 md:px-12 md:space-x-12 lg:mx-16 lg:px-32 lg:items-start">
        <div className="flex-1 lg:max-w-md">
          <Carousel slides={PRODUCT_SLIDES} />
        </div>
        <div className="flex-1 px-6 lg:mt-16">
          <h1 className="uppercase text-md tracking-widest font-bold pb-3 mt-7 md:mt-0 md:text-xxs">
            Sneaker company
          </h1>
          <h2 className="text-4xl text-veryDarkBlue font-bold pb-4 md:text-3xl">
            Fall Limited Edition Sneakers
          </h2>
          <p className="pb-6 text-lg md:text-sm">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="flex flex-row items-center justify-between font-bold md:flex-col md:items-start">
            <div className="flex items-center space-x-5">
              <span className="text-veryDarkBlue text-3xl">125.00 €</span>
              <span className="bg-black text-white px-2.5 py-0.5 rounded-md">
                50%
              </span>
            </div>
            <span className="line-through text-lg">250.00 €</span>
          </div>
          <div className="flex flex-col md:flex-row mt-5 md:space-x-3">
            <div className="flex justify-between items-center h-14 min-w-32 xl:min-w-40 bg-lightGrayishBlue rounded-lg px-6 space-x-4">
              <Image
                src={iconMinus}
                onClick={removeItem}
                className="cursor-pointer"
                alt="decrement"
              />
              <div className="text-veryDarkBlue font-bold">{itemCount}</div>
              <Image
                src={iconPlus}
                onClick={addItem}
                className="cursor-pointer"
                alt="increment"
              />
            </div>
            <button
              onClick={addItemToCart}
              className="w-full flex justify-center items-center mt-3 md:mt-0 space-x-4 px-2 bg-orange h-14 rounded-xl shadow-lg hover:opacity-80"
            >
              <Image src={iconCart} alt="icon-cart" className="w-4 h-4" />
              <div className="text-veryDarkBlue font-bold">Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
