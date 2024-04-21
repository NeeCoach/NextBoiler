import Image from "next/image";
import Link from "next/link";
import { Logos, Sparkles, Title } from "~/components/custom";
import { CreatePost } from "~/components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { FAQ, Features, VideoPlayer } from "~/containers";
import { Pricing } from "~/containers/Pricing";
import { PhoneCall, Video } from "lucide-react";
import AvatarGroup from "~/components/custom/AvatarGroup";
import { Button } from "~/components/ui/button";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <>
      <section className="top-0 z-0 flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0 md:h-screen">
        <div className="absolute top-14 h-[550px] w-full overflow-hidden">
          <Image
            src="/AI.Chicks.svg"
            alt="banner"
            quality={100}
            className="object-contain"
            height={550}
            width={1920}
          />
        </div>
        <Sparkles />
        <div className="z-10 mx-10 flex flex-col items-center justify-center md:mx-40 md:flex-row md:gap-8">
          <div className="mt-20 flex h-fit max-w-[515px] animate-slideInFromLeftFadeIn flex-col md:mt-0">
            <Title />
            <div className="mt-3 w-fit">
              <h3 className="my-4 w-fit font-poppins text-2xl font-semibold text-white">
                Create your AI agency and become their master!
              </h3>
              <p className="mb-6 font-poppins text-xl font-light text-white opacity-60">
                Click, create, conquer – deploy your fake army of AI influencers
                and let them seduce the worldr with irresistible allure.
              </p>
              <div className="flex flex-row gap-4">
                <Button className="flew-row flex items-center justify-center gap-2 rounded-md border-2 border-solid border-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 px-8 shadow-md">
                  <span className="block rounded-md py-1 font-semibold text-white">
                    Fake it
                  </span>
                  <Image
                    src="/icon/MagicWand.svg"
                    width={24}
                    height={24}
                    alt="Magic Wand"
                  ></Image>
                </Button>
                <span className="my-auto text-center text-base font-semibold text-secondary underline">
                  Not convinced yet?
                </span>
              </div>
              <div className="py-8">
                <AvatarGroup />
              </div>
            </div>
          </div>
          <div className="z-10 flex min-w-fit flex-col items-center justify-center md:mt-20 ">
            <Image
              src="/phone.png"
              alt="tRPC logo"
              width={640}
              height={640}
              className="z-10 animate-slideInFromRightFadeIn"
              object-fit="cover"
            ></Image>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-60 w-96 animate-pulse flex-row items-end justify-center rounded-full bg-yellow-100 blur-[425.47px]" />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="leading-2 text-center font-poppins text-sm font-extralight text-white">
            Compatible with
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            {logos.map((logo) => (
              <Logos key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>
      <Features />
      <VideoPlayer />
      <Pricing />
      <FAQ />
    </>
  );
}

const logos = [
  { src: "/icon/insta.svg", alt: "insta Logo" },
  { src: "/icon/x.svg", alt: "Next.js Logo" },
  { src: "/icon/tt.svg", alt: "Prisma Logo" },
  { src: "/icon/of.svg", alt: "tRPC Logo" },
  { src: "/icon/mym.svg", alt: "mym Logo" },
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
