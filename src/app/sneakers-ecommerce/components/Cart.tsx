import Image from 'next/image';
import thumbnailProduct1 from '../../../../public/sneakers-ecommerce/image-product-1-thumbnail.jpg';
import iconDelete from '../../../../public/sneakers-ecommerce/icon-delete.svg';

export default function Cart({
  open,
  count,
  removeItemFromCart,
}: {
  open: boolean;
  count: number;
  removeItemFromCart: () => void;
}) {
  return (
    <div
      className={`${open ? 'absolute' : 'hidden'} top-24 z-40 w-full rounded-lg bg-white px-2 shadow-xl md:right-12 md:w-80 lg:right-32`}
    >
      <div className="h-72 rounded-lg bg-white">
        <div className="border-gray h-16 border-b px-6 pt-4 font-bold text-veryDarkBlue">
          Cart
        </div>
        {count > 0 ? (
          <div className="px-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center space-x-6">
                <Image
                  src={thumbnailProduct1}
                  alt="product-1"
                  className="h-14 w-14 rounded-lg"
                />
                <div className="py-8">
                  <div>Fall Limited Edition Sneakers</div>
                  <div>
                    125.00 € x {count}
                    <span className="pl-4 font-bold text-veryDarkBlue">
                      {count * 125} €
                    </span>
                  </div>
                </div>
              </div>
              <Image
                src={iconDelete}
                onClick={removeItemFromCart}
                alt="remove-from-cart"
                className="h-4 w-4 cursor-pointer"
              />
            </div>
            <button className="flex h-14 w-full items-center justify-center rounded-xl bg-orange shadow-lg hover:opacity-80">
              <div className="font-bold text-veryDarkBlue">Checkout</div>
            </button>
          </div>
        ) : (
          <div className="flex h-56 items-center justify-center font-bold">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
}
