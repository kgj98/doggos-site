/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const navigation = [
  { name: "Test Drive a Dog", href: "#explainer" },
  { name: "The Research", href: "#research" },
  { name: "Adoption Options", href: "#" },
  { name: "About Us", href: "#about" },
];

const incentives = [
  {
    name: "Chase away loneliness",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/620/620851.png",
    description:
      "Dog owners were less lonely within three months after getting a dog.",
  },
  {
    name: "Explore the outdoors",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/5284/5284729.png",
    description:
      "Dogs encourage their owners to get out in nature, maintain a sense of routine, and stay in touch with their neighbors.",
  },
  {
    name: "Live a healthier life",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/3048/3048194.png",
    description:
      "Studies show that dogs can have prophylactic and theraputic benefits for their owners.",
  },
];

const posts = [
  {
    title: "Dogs Can’t Help Falling in Love",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "One researcher argues that a dog’s ability to bond has more to do with forming emotional attachments than being smart about what humans want.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "https://i.ibb.co/ypqv18c/PAGE-9-FINAL.jpg",
    readingTime: "10 min",
    author: {
      name: "James Gorman",
      href: "#",
    },
  },
  {
    title: "Examining the Association between Pet Ownership and Wellbeing",
    href: "#",
    category: {
      name: "Research Paper",
      href: "https://www.tandfonline.com/doi/abs/10.1080/08927936.2016.1152721?casa_token=iUiinwTMxdsAAAAA%3At2qI8es_4Y-jL1uk0RvZn44zwQx0uxoeSv54SkDtFkCGHpImg1SUhxO8hKqx-RFWX49lBWubRudl&",
    },
    description:
      "Are pets associated with happiness in their owners? Some research has demonstrated positive connections between pets and the physical health of their owners, and more recently, research has shown the beneficial effects of pets on the negative aspects of mental health as well.",
    date: "May 11, 2016",
    datetime: "2016-05-11",
    imageUrl: "https://i.ibb.co/qk1RtCj/1-Qian-dog.jpg",
    readingTime: "30 min",
    author: {
      name: "Katherine Jacobs Bao",
      href: "#",
    },
  },
  {
    title: "For the love of dog",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "The status of pets is changing for several reasons. Young people in the West are delaying getting married and having children. Millennials, like me, lavish their creatures with the time and emotional energy that they might one day show a child.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://i.ibb.co/YWN103P/Screen-Shot-2021-11-03-at-12-25-42-AM.png",
    readingTime: "11 min",
    author: {
      name: "Alexandra Bass",
      href: "#",
    },
  },
];

const people = [
  {
    name: "Taylor Lallas",
    role: "M.S. Computer Science ‘22",
    imageUrl: "https://i.ibb.co/CVPFk3n/gradphoto2-1.png",
  },
];

const Home: NextPage = () => {
  return (
    <div className="bg-[#fff2d9]">
      {/* Component for head */}
      <Head>
        <title>Pup or Not</title>
        <meta name="title" content="home page" />
      </Head>

      {/* Component for logo and navigation bar */}
      <header className="bg-[#ff7931] sticky top-0">
        <nav className="max-w-l mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-2 flex items-center justify-between border-b border-[#761e0b] lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image
                  src="/logo-2.svg"
                  alt="Our logo"
                  width={80}
                  height={80}
                />
              </a>
              <div className="hidden ml-16 space-x-20 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-sans text-xl text-white hover:text-[#761e0b]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-base font-large text-white hover:text-[#761e0b]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Component for the welcome text */}
      <div className="bg-[#fff2d9]">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="font-sans text-4xl font-extrabold tracking-tight text-gray-900">
                  Get ready for some{" "}
                  <span className="text-[#ff7931]">pawsitivity</span>
                </h2>
                <p className="font-sans mt-4 text-gray-800">
                  The pandemic was a tough time for everyone. Do not be caught
                  alone in isolation next time and explore how a furry friend
                  can fit into your life!
                </p>
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden pl-36">
                <Image
                  src="/doggo-jump.svg"
                  alt="A corgi happily jumping"
                  width={354}
                  height={209}
                />
                <Image
                  src="/oval.svg"
                  alt="A white oval"
                  width={400}
                  height={100}
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-sans text-gray-900">
                      {incentive.name}
                    </h3>
                    <p className="font-sans mt-2 text-sm text-gray-500">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Component for the Explainer */}
      {/* TODO: Anchor isn't working accurately for some reason... */}
      <div id="explainer" className="bg-[#761e0b]">
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-sans text-3xl font-bold text-white">
              Pandemic puppy adoption{" "}
              <span className="text-[#ff7931]">explained</span>
            </h1>
            <p className="font-sans mt-4 text-white">
              During the COVID-19 pandemic, people turned to pets as a source of
              joy more than ever before. Through our pandemic puppy adoption
              explainer, you can explore how getting a pet may improve your
              well-being during COVID & BEYOND.
            </p>
          </div>
        </header>
        <div className="flex items-stretch">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 ">
            {/* TODO: Look up some optimization for iframes and make it responsive */}
            <iframe
              width="1000"
              height="600"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3PC7wRFTQhGYvGCWWpTPV2%2FonPets%3Fpage-id%3D0%253A1%26node-id%3D2%253A2%26viewport%3D241%252C48%252C0.45%26scaling%3Dcontain%26starting-point-node-id%3D2%253A2"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Component for additional articles */}
      <div
        id="research"
        className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      >
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="font-sans text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Still Not Convinced?
            </h2>
            <p className="font-sans mt-3 max-w-2xl mx-auto text-xl text-gray-800 sm:mt-4">
              Check the receipts and adventure through some of the best research
              we have compiled spotlights all the benefits of doggo friend can
              have during socially isolated times.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#ff7931]">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The About Me Component */}
      <div id="about" className="bg-[#761e0b]">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-[#ff7931] text-3xl font-extrabold tracking-tight sm:text-4xl">
                About Us
              </h2>
              <p className="text-xl text-white">
                We are a team of Stanford Computer Science students excited to
                share how relationships with animals can promote human
                happiness. This project emerged from the course CS 247I: Design
                for Understanding
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-6">
                    <img
                      className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1 text-white">
                        <h3>{person.name}</h3>
                        <p className="text-[#ff7931]">{person.role}</p>
                      </div>
                      <ul
                        role="list"
                        className="flex justify-center space-x-5"
                      ></ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
