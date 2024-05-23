"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchModelById } from "~/utils/get-chicks";

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

function Page() {
  const { id } = useParams();
  const [model, setModel] = useState<Model | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!model) {
    return <div>Loading...</div>;
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
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={
                  model.photoUrls[selectedImage] ?? "/path/to/default/image.jpg"
                }
                alt="Selected Preview"
                quality={100}
                height={350}
                width={350}
                className="inset-0 rounded-md border-2 border-solid border-secondary shadow-md"
              />
            </div>
            <div className="flex h-fit flex-wrap gap-2 max-md:justify-center">
              {model.photoUrls.map((url, index) => (
                <div
                  key={index}
                  className="relative h-24 w-24 cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={url}
                    alt={`Gallery image ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md object-cover shadow-md"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 rounded-md border-2 border-solid border-secondary"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
