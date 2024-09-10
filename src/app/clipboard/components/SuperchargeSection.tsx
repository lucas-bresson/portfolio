import Image from 'next/image';
import iconBlacklist from '/public/clipboard/icon-blacklist.svg';
import iconText from '/public/clipboard/icon-text.svg';
import iconPreview from '/public/clipboard/icon-preview.svg';

export default function SuperchargeSection() {
  return (
    <section id="supercharge">
      <div className="clipboard-section my-20">
        <h3 className="clipboard-h3">Supercharge your workflow</h3>
        <p className="clipboard-section-content mb-16">
          We&apos;ve got the tools to boost your productivity.
        </p>
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
          <div className="flex flex-col items-center space-y-5">
            <Image src={iconBlacklist} className="mb-6" alt="blacklist" />
            <h5 className="clipboard-h5">Create Blacklist</h5>
            <p className="max-w-sm text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <Image src={iconText} className="mb-6" alt="blacklist" />
            <h5 className="clipboard-h5">Plain Text Snippets</h5>
            <p className="max-w-sm text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <Image src={iconPreview} className="mb-6" alt="blacklist" />
            <h5 className="clipboard-h5">Sneak Preview</h5>
            <p className="max-w-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
