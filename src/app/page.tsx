import Image from "next/image";
import Link from "next/link";

import { CreatePost } from "~/components/create-post";
import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex min-h-full w-full bg-gradient-to-b from-rose-950 to-fuchsia-800">
      <span className="font-bebas-neue absolute z-0 text-[645px] font-normal leading-[632.10px] text-white opacity-[.1]">
        AI.Chicks
      </span>
      <div className="z-10 mt-60 flex flex-col pl-32">
        <Title />
        <div className="mt-3 w-8/12 opacity-60">
          <h3 className="font-poppins text-3xl font-semibold leading-[52.48px] text-white">
            Can't beat influencers? Become their master!
          </h3>
          <p className="font-poppins w-10/12 text-2xl font-light leading-[52.48px] text-white">
            Most influencers you idolize craft their fame with lies, raking in
            cash by the minute. Why watch from the sidelines? <br />
          </p>
        </div>
      </div>
      <Image
        src="/phone.png"
        alt="tRPC logo"
        width={650}
        height={650}
        className="absolute bottom-0 right-0 z-10"
      ></Image>
      <div className="relative h-[1153.50px] w-[1129px]">
        <div className="absolute bottom-0 left-0 h-[1075px] w-[1129px] rounded-full bg-fuchsia-900 blur-[425.47px]" />
      </div>{" "}
    </div>
  );
}

const Title = () => {
  return (
    <div className="relative h-fit">
      <h1 className="font-bebas-neue absolute left-[-12px] top-[8px] m-0 p-0 text-[240px] font-normal leading-none text-transparent text-white">
        Fake it{" "}
      </h1>
      <h1 className="font-bebas-neue text-stroke z-10 m-0 stroke-white p-0 text-[240px] font-normal leading-none text-transparent">
        Fake it{" "}
      </h1>
      <h2 className="font-bebas-neue text-stroke m-0 ml-72 mt-[-36px] stroke-white p-0 text-[60px] font-normal leading-none text-transparent">
        'til you bank it!
      </h2>
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
