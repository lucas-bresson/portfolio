import Image from 'next/image';
import logo from '../../../../public/loopstudios/logo.svg';
import iconFacebook from '../../../../public/loopstudios/icon-facebook.svg';
import iconTwitter from '../../../../public/loopstudios/icon-twitter.svg';
import iconPinterest from '../../../../public/loopstudios/icon-pinterest.svg';
import iconInstagram from '../../../../public/loopstudios/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto max-w-6xl py-10">
        <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <Image src={logo} className="w-44 md:ml-3" alt="logo" />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:space-x-6 md:space-y-0">
              <div className="group h-10">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              <div className="group h-10">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              <div className="group h-10">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              <div className="group h-10">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              <div className="group h-10">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500 md:mr-3">
            <div className="mx-auto flex items-center justify-center space-x-4 md:mx-0 md:justify-end">
              <div className="group h-8">
                <a href="#">
                  <Image className="h-6" src={iconFacebook} alt="facebook" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <Image className="h-6" src={iconTwitter} alt="twitter" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <Image className="h-6" src={iconPinterest} alt="pinterest" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <Image className="h-6" src={iconInstagram} alt="instagram" />
                </a>
              </div>
            </div>
            <div className="font-bold">
              &copy; 2024 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
