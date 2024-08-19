import Image from "next/image";
import thumbnailProduct1 from "../../../../../public/sneakers-ecommerce/image-product-1-thumbnail.jpg";
import iconDelete from "../../../../../public/sneakers-ecommerce/icon-delete.svg";

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
      className={`${open ? "absolute" : "hidden"} top-24 z-40  bg-white w-full px-2 rounded-lg shadow-xl md:w-80 md:right-12 lg:right-32`}
    >
      <div className="h-72 bg-white rounded-lg">
        <div className="h-16 border-b border-gray px-6 pt-4 text-veryDarkBlue font-bold">
          Cart
        </div>
        {count > 0 ? (
          <div className="px-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center space-x-6">
                <Image
                  src={thumbnailProduct1}
                  alt="product-1"
                  className="w-14 h-14 rounded-lg"
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
                className="w-4 h-4 cursor-pointer"
              />
            </div>
            <button className="w-full flex justify-center items-center bg-orange h-14 rounded-xl shadow-lg hover:opacity-80">
              <div className="text-veryDarkBlue font-bold">Checkout</div>
            </button>
          </div>
        ) : (
          <div className="h-56 flex justify-center items-center font-bold">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
}
