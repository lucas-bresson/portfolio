export default function BottomCTASection() {
  return (
    <section id="bottom">
      <div className="clipboard-section my-20">
        <h3 className="clipboard-h3">Clipboard for iOS and MacOS</h3>
        <p className="clipboard-section-content mb-10">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you&apos;re ready to start adding to your clipboard.
        </p>
        <div className="clipboard-button-container">
          <a
            href="#"
            className="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="bg-lightBlue rounded-full p-4 px-8 shadow-lg duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
