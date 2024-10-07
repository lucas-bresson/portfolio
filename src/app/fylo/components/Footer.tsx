import Image from 'next/image';
import iconFacebook from '/public/fylo/facebook.svg';
import iconInstagram from '/public/fylo/instagram.svg';
import iconTwitter from '/public/fylo/twitter.svg';
import iconEmail from '/public/fylo/icon-email.svg';
import iconPhone from '/public/fylo/icon-phone.svg';

export default function Footer() {
  return (
    <footer className="bg-midnightBlue text-white">
      <div className="container mx-auto px-5 pb-10 pt-12">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <Image src={iconPhone} alt="phone" className="scale-10" />
              </div>
              <div>+49 2134 567889</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6">
                <Image src={iconEmail} alt="email" className="scale-10" />
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>

          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          <div className="flex justify-center space-x-3 pb-10">
            <div>
              <a href="#">
                <Image
                  src={iconFacebook}
                  alt="facebook"
                  className="ficon h-10 w-10 rounded-full bg-darkBlue p-2"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <Image
                  src={iconTwitter}
                  alt="twitter"
                  className="ficon h-10 w-10 rounded-full bg-darkBlue p-2"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <Image
                  src={iconInstagram}
                  alt="instagram"
                  className="ficon h-10 w-10 rounded-full bg-darkBlue p-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
