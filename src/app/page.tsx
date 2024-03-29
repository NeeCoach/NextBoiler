import Image from "next/image";
import Link from "next/link";
import { Logos, Title } from "~/components/custom";

import { CreatePost } from "~/components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <>
      <section className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-800 p-0">
        <div className="absolute top-0 h-[550px] w-full overflow-hidden">
          <Image
            src="/AI.Chicks.svg"
            alt="banner"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="mx-56 flex items-center justify-center sm:flex-col xl:flex-row">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/phone.png"
              alt="tRPC logo"
              width={1300}
              height={1300}
              className="z-100 animate-slideInFromLeftFadeIn"
              object-fit="cover"
            ></Image>
          </div>
          <div className="animate-slideInFromRightFadeIn flex h-fit flex-col">
            <Title />
            <div className="mt-3 w-fit">
              <h3 className="font-poppins w-fit text-2xl font-semibold leading-[52.48px] text-white">
                Can&apos;t beat influencers? Become their master!
              </h3>
              <p className="font-poppins mb-6 text-xl font-light text-white opacity-60">
                Most influencers you idolize craft their fame with lies, raking
                in cash by the minute. Why watch from the sidelines? <br />
              </p>
              <div className="flex flex-row">
                <button className="flew-row flex items-center justify-center gap-2 rounded-md border-2 border-solid border-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 px-4 shadow-md">
                  <Image
                    src="/icon/MagicWand.svg"
                    width={24}
                    height={24}
                    alt="Magic Wand"
                  ></Image>
                  <span className="block rounded-md py-2 font-semibold text-white">
                    Fake it
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-2 flex flex-col items-center justify-center">
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
      <section className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-800 p-0">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bebas-neue text-6xl text-white">The Problem</h1>
          <p className="font-poppins w-1/2 text-center text-2xl text-white opacity-60">
            Most influencers you idolize craft their fame with lies, raking in
            cash by the minute. Why watch from the sidelines?
          </p>
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
