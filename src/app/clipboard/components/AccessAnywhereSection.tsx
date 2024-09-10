import Image from 'next/image';
import imageDevices from '/public/clipboard/image-devices.png';

export default function AccessAnywhereSection() {
  return (
    <section id="access">
      <div className="clipboard-section my-20">
        <h3 className="clipboard-h3">Access Clipboard anywhere</h3>
        <p className="clipboard-section-content mb-24">
          Whether you&apos;re on the go, or at your computer, you can access all
          your Clipboard snipets in a few simple clicks.
        </p>
        <Image src={imageDevices} className="mx-auto" alt="devices" />
      </div>
    </section>
  );
}
