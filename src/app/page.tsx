import Image from "next/image";
import Link from "next/link";
import { Logos, Title } from "~/components/custom";

import { CreatePost } from "~/components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { SparklesCore } from "~/components/ui/sparkles";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <>
      <section className="z-0 flex h-screen w-full flex-col items-center justify-center p-0">
        <div className="absolute top-0 h-[550px] w-full overflow-hidden">
          <Image
            src="/AI.Chicks.svg"
            alt="banner"
            layout="fill"
            quality={100}
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1}
            particleDensity={30}
            className="h-full w-full"
            particleColor="#f3e06a"
          />
        </div>
        <div className="z-10 mx-10 flex flex-col items-center justify-center md:mx-56 md:flex-row">
          <div className="z-10 flex min-w-fit flex-col items-center justify-center">
            <Image
              src="/phone.png"
              alt="tRPC logo"
              width={580}
              height={580}
              className="animate-slideInFromLeftFadeIn z-10"
              object-fit="cover"
            ></Image>
          </div>
          <div className="animate-slideInFromRightFadeIn flex h-fit max-w-fit flex-col">
            <Title />
            <div className="mt-3 w-fit">
              <h3 className="font-poppins my-4 w-fit text-2xl font-semibold text-white">
                Can&apos;t beat influencers trends? Become their master!
              </h3>
              <p className="font-poppins mb-6 text-xl font-light text-white opacity-60">
                Click, create, conquer – deploy your fake army of AI influencers
                and let them seduce the net with irresistible allure.
              </p>
              <div className="flex flex-row">
                <button className="flew-row flex items-center justify-center gap-2 rounded-md border-2 border-solid border-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 px-4 shadow-md">
                  <Image
                    src="/icon/MagicWand.svg"
                    width={24}
                    height={24}
                    alt="Magic Wand"
                  ></Image>
                  <span className="block rounded-md py-1 font-semibold text-white">
                    Fake it
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-60 w-96 animate-pulse flex-row items-end justify-center rounded-full bg-yellow-100 blur-[425.47px]" />
        <div className="absolute bottom-2 z-10 flex flex-col items-center justify-center">
          <div className="font-poppins leading-2 text-center text-sm font-extralight text-white">
            Work with
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            {logos.map((logo) => (
              <Logos key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex h-screen w-full flex-col p-0">
        <h1 className="font-bebas-neue mt-8 text-center text-6xl text-white md:mt-16">
          Section 2 - HOW IT WORKS
        </h1>
        <div className="mt-8 flex flex-col items-center justify-center md:mt-16">
          <p className="font-poppins w-1/2 text-center text-2xl text-white opacity-60">
            Most influencers you idolize craft their fame with lies, raking in
            cash by the minute. Why watch from the sidelines?
          </p>
        </div>
      </section>
      <section className="flex h-screen w-full flex-col p-0">
        <h1 className="font-bebas-neue mt-8 text-center text-6xl text-white md:mt-16">
          Section 3 - DEMO
        </h1>
        <div className="mt-8 flex flex-col items-center justify-center md:mt-16">
          <p className="font-poppins w-1/2 text-center text-2xl text-white opacity-60">
            Most influencers you idolize craft their fame with lies, raking in
            cash by the minute. Why watch from the sidelines?
          </p>
        </div>
      </section>
      <section className="flex h-screen w-full flex-col p-0">
        <h1 className="font-bebas-neue mt-8 text-center text-6xl text-white md:mt-16">
          Section 4 - Pricing
        </h1>
        <div className="mt-8 flex flex-col items-center justify-center md:mt-16">
          <p className="font-poppins w-1/2 text-center text-2xl text-white opacity-60">
            Most influencers you idolize craft their fame with lies, raking in
            cash by the minute. Why watch from the sidelines?
          </p>
        </div>
      </section>
      <section className="flex h-screen w-full flex-col items-center p-0">
        <h1 className="font-bebas-neue mt-8 text-6xl text-white md:mt-16">
          FAQ
        </h1>
        <div className="flex w-fit flex-col items-center justify-center gap-4 md:mt-16">
          <div className="collapse-arrow bg-base-200 collapse">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse-arrow bg-base-200 collapse">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse-arrow bg-base-200 collapse">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const logos = [
  { src: "/icon/insta.svg", alt: "Vercel Logo" },
  { src: "/icon/x.svg", alt: "Next.js Logo" },
  { src: "/icon/tt.svg", alt: "Prisma Logo" },
  { src: "/icon/of.svg", alt: "tRPC Logo" },
  { src: "/icon/mym.svg", alt: "Vercel Logo" },
];

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
