import Image from 'next/image';
import logo from '/public/clipboard/logo.svg';
import iconTwitter from '/public/clipboard/icon-facebook.svg';
import iconFacebook from '/public/clipboard/icon-twitter.svg';
import iconInstagram from '/public/clipboard/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="flex flex-col items-center justify-between md:flex-row md:pr-8">
        <Image src={logo} alt="logo" className="scale-50" />
        <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="#" className="hover:text-strongCyan">
                  FAQs
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-strongCyan">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="#" className="hover:text-strongCyan">
                  Privacy Policy
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-strongCyan">
                  Press Kit
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div>
                <a href="#" className="hover:text-strongCyan">
                  Install Guide
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-32 justify-between py-1">
            <a href="#">
              <Image
                src={iconFacebook}
                alt="facebook"
                className="ficon duration-200"
              />
            </a>
            <a href="#">
              <Image
                src={iconTwitter}
                alt="twitter"
                className="ficon duration-200"
              />
            </a>
            <a href="#">
              <Image
                src={iconInstagram}
                alt="instagram"
                className="ficon duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
