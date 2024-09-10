export default function CTASection() {
  return (
    <section
      id="cta"
      className="bg-darkViolet bg-[url('/../../../../shortly/bg-boost-desktop.svg')] bg-cover bg-no-repeat py-24"
    >
      <div className="flex flex-col space-y-6 p-2">
        <h5 className="mx-auto space-y-10 text-center text-4xl font-bold text-white">
          Boost your links today
        </h5>
        <button className="mx-auto rounded-full bg-cyan px-10 py-5 text-2xl font-bold text-white hover:bg-cyanLight focus:outline-none md:py-3 md:text-base">
          Get Started
        </button>
      </div>
    </section>
  );
}
