const LinkBox = ({ link, shortLink }: { link: string; shortLink: string }) => (
  <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
    <p className="text-veryDarkViolet text-center font-bold md:text-left">
      {link}
    </p>
    <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
      <div className="text-cyan font-bold">{shortLink}</div>
      <button className="bg-darkViolet rounded-lg p-2 px-8 text-white hover:opacity-70 focus:outline-none">
        Copy
      </button>
    </div>
  </div>
);

export default function ShortenSection() {
  return (
    <section id="shorten" className="relative bg-gray-100">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        <form className="bg-darkViolet relative -mt-20 flex w-full flex-col space-y-4 rounded-lg p-10 md:flex-row md:space-x-3 md:space-y-0">
          <input
            id="input"
            type="url"
            className="flex-1 rounded-lg border-2 p-3 placeholder-yellow-500 focus:outline-none"
            placeholder="Shorten a link here"
          />
          <button className="bg-cyan hover:bg-cyanLight rounded-lg px-10 py-3 text-white focus:outline-none md:py-2">
            Shorten It!
          </button>
          <div className="text-red absolute bottom-3 left-7 text-sm italic"></div>
        </form>
        <LinkBox
          link="https://frontendmentor.io"
          shortLink="https://rel.ink/kwIKyS"
        />
        <LinkBox
          link="https://twitter.com/fontendmentor"
          shortLink="https://rel.ink/akDiwL"
        />
        <LinkBox
          link="https://linkedin.com/frontend-mentor"
          shortLink="https://rel.ink/ofiSnaF"
        />
      </div>
    </section>
  );
}
