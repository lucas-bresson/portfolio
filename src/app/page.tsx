import Link from 'next/link';

const CARDS = [
  {
    href: '/password-generator',
    title: 'Password Generator',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sint.',
  },
  {
    href: '/sneakers-ecommerce',
    title: 'Sneakers',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sint.',
  },
  {
    href: '/bookmark',
    title: 'Bookmark',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sint.',
  },
  {
    href: '/',
    title: 'Lorem Ipsum',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sint.',
  },
];

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="my-12 text-6xl">Nextjs portfolio app</h1>
      <p className="mx-12 text-2xl">
        Developed by
        <span className="mx-2 rounded-sm bg-gray-100 text-xl text-black">
          LB Code
        </span>
      </p>
      <div className="mx-48 my-24 grid grid-cols-2 gap-6">
        {CARDS.map(({ href, title, description }, index) => (
          <Link href={href} key={title}>
            <div className="min-h-48 rounded-sm border-2 border-gray-100 p-8 text-left hover:border-blue-400 hover:text-blue-400">
              <h2 className="text-xl font-semibold">{title} &rarr;</h2>
              <p className="m-2 font-light">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
