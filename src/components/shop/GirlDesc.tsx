"use client";

import { useState } from "react";
import Image from "next/image";

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

type GirlDescProps = {
  model: Model;
};

export default function GirlDesc({ model }: GirlDescProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={model.photoUrls[selectedImage] ?? "/path/to/default/image.jpg"}
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
  );
}
