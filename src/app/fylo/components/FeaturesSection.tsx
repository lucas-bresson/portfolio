import Image from 'next/image';
import iconCollaboration from '/public/fylo/icon-collaboration.svg';
import iconSecurity from '/public/fylo/icon-security.svg';
import iconAccessAnywhere from '/public/fylo/icon-access-anywhere.svg';
import iconAnyFile from '/public/fylo/icon-any-file.svg';

export default function Section() {
  return (
    <section id="features" className="dark:bg-deepNavy bg-gray-50 pt-12">
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <Image src={iconAccessAnywhere} alt="" />
            </div>
            <h3 className="text-xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <Image src={iconSecurity} alt="" />
            </div>
            <h3 className="text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>

        <div className="mt-28 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <Image src={iconCollaboration} alt="" />
            </div>
            <h3 className="text-xl font-bold">Collaborate with your peers</h3>
            <p className="max-w-md">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <Image src={iconAnyFile} alt="" />
            </div>
            <h3 className="text-xl font-bold">Secure all type of documents</h3>
            <p className="max-w-md">
              Whether you&apos;re sharing holidays photos or work documents,
              Fylo has you covered allowing for all file types to be securely
              stored and shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
