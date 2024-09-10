import Image from 'next/image';
import logoGoogle from '/public/clipboard/logo-google.png';
import logoIBM from '/public/clipboard/logo-ibm.png';
import logoMicrosoft from '/public/clipboard/logo-microsoft.png';
import logoHP from '/public/clipboard/logo-hp.png';
import logoVectorGraphics from '/public/clipboard/logo-vector-graphics.png';

export default function ReferencesSection() {
  return (
    <section id="references">
      <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0">
        <Image src={logoGoogle} alt="google" />
        <Image src={logoIBM} alt="ibm" />
        <Image src={logoMicrosoft} alt="microsoft" />
        <Image src={logoHP} alt="hp" />
        <Image src={logoVectorGraphics} alt="vector graphics" />
      </div>
    </section>
  );
}
