import Image from 'next/image';
import logo from '../../../../public/shortly/logo.svg';
import iconFacebook from '../../../../public/shortly/icon-facebook.svg';
import iconTwitter from '../../../../public/shortly/icon-twitter.svg';
import iconPinterest from '../../../../public/shortly/icon-pinterest.svg';
import iconInstagram from '../../../../public/shortly/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-veryDarkViolet py-16">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0">
        <Image src={logo} alt="logo" />
        <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Link shortening
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Branded links
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Analytics
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Support
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                About
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Our Team
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-cyan capitalize"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#">
            <Image src={iconFacebook} alt="facebook" className="ficon" />
          </a>
          <a href="#">
            <Image src={iconTwitter} alt="twitter" className="ficon" />
          </a>
          <a href="#">
            <Image src={iconPinterest} alt="pinterest" className="ficon" />
          </a>
          <a href="#">
            <Image src={iconInstagram} alt="instagram" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
