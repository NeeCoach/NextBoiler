import Image from "next/image";
import Link from "next/link";

import { CreatePost } from "~/components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <>
      <section className="flex h-screen w-full flex-col bg-gradient-to-b from-rose-950 to-fuchsia-800 p-0">
        <div className="relative h-[550px] w-full overflow-hidden">
          <Image
            src="/AI.Chicks.svg"
            alt="banner"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="absolute mx-36 flex sm:flex-col-reverse xl:flex-row">
          <div className="animate-slideInFromLeftFadeIn mt-40 flex flex-col">
            <Title />
            <div className="mt-3">
              <h3 className="font-poppins text-3xl font-semibold leading-[52.48px] text-white">
                Can't beat influencers? Become their master!
              </h3>
              <p className="font-poppins w-10/12 text-2xl font-light text-white opacity-60">
                Most influencers you idolize craft their fame with lies, raking
                in cash by the minute. Why watch from the sidelines? <br />
              </p>
              <div className="flex flex-row gap-4">
                <button className="btn btn-white">Shape it</button>
                <button className="btn btn-outline btn-[#ffff]">Primary</button>
              </div>
            </div>
          </div>
          <Image
            src="/phone.png"
            alt="tRPC logo"
            width={750}
            height={750}
            className="z-100 animate-slideInFromRightFadeIn"
          ></Image>
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

const Title = () => {
  return (
    <div className="relative h-fit">
      <h1 className="font-bebas-neue absolute left-[-12px] top-[8px] m-0 p-0 text-[14vw] font-normal leading-none text-transparent text-white">
        Fake it{" "}
      </h1>
      <h1
        className="font-bebas-neue text-stroke z-10 m-0 mb-6 stroke-white p-0 text-[14vw] font-normal leading-none text-transparent"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, white 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, white 60%, transparent 100%)",
          height: "198px",
        }}
      >
        Fake it{" "}
      </h1>
      <div className="flex flex-row justify-center">
      <h2 className="font-bebas-neue text-stroke stroke-white p-0 text-[2.5vw] font-normal leading-none text-transparent">
        'til you bank it!
      </h2>
      </div>
    </div>
  );
};

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
