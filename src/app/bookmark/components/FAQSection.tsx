const Tab = ({
  tabIndex,
  title,
  content,
}: {
  tabIndex: number;
  title: string;
  content: string;
}) => (
  <div className="group border-b py-1 outline-none" tabIndex={tabIndex}>
    <div className="duratin-500 ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition">
      <div className="ease group-hover:text-red-500 transition duration-500">
        {title}
      </div>
      <div className="ease group-focus:text-red-500 transition duration-500 group-focus:-rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </div>
    </div>
    <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
      <p className="py-2 text-justify text-gray-400">{content}</p>
    </div>
  </div>
);

export default function FAQSection() {
  return (
    <>
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-graishBlue mx-auto max-w-lg px-6 text-center">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
      </section>

      <section id="faq-accordion">
        <div className="container mx-auto mb-32 px-6">
          <div className="m-8 mx-auto max-w-2xl overflow-hidden">
            <Tab
              tabIndex={1}
              title="What is Bookmark?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?"
            />
            <Tab
              tabIndex={2}
              title="How can I request a new browser?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?"
            />
            <Tab
              tabIndex={3}
              title="Is there a mobile app?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?"
            />
            <Tab
              tabIndex={4}
              title="What about other Chromium browsers?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?"
            />
          </div>
        </div>
      </section>
    </>
  );
}
