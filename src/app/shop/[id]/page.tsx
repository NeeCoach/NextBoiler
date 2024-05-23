import Image from "next/image";
import { fetchModelById } from "~/utils/get-chicks";
import GirlDesc from "~/components/shop/GirlDesc";
import { notFound } from "next/navigation";

type Model = {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string | null;
  description: string | null;
  sold: boolean;
  userId: string | null;
  photoUrls: string[];
  videoUrls: string[];
};

type PageProps = {
  params: {
    id: string;
  };
};

async function getModel(id: string): Promise<Model | null> {
  return await fetchModelById(id);
}

export default async function Page({ params }: PageProps) {
  const model = await getModel(params.id);

  if (!model) {
    notFound();
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0 py-28">
      <div className="z-40 rounded-md border border-white bg-[#ead9e624] py-4 shadow-xl backdrop-blur-[25px] max-md:mx-8 max-md:my-2 max-md:px-4 md:mx-14 md:px-8 md:py-14">
        <div className="flex flex-row gap-8 max-md:flex-col">
          <div className="flex flex-col gap-2">
            <Image
              src={model.photoUrls[0] ?? "/path/to/default/image.jpg"}
              alt="Model Image"
              quality={100}
              height={350}
              width={350}
            />
            <h4 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
              {model.firstName} {model.lastName}
            </h4>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-[#eee2e999] lg:max-w-lg">
              {model.description}
            </p>
          </div>
          <GirlDesc model={model} />
        </div>
      </div>
    </div>
  );
}
