"use client";
import React, { useState } from "react";
import Image from "next/image";

const imageUrls = [
  "https://source.unsplash.com/random/200x200?sig=1",
  "https://source.unsplash.com/random/200x200?sig=2",
  "https://source.unsplash.com/random/200x200?sig=3",
  "https://source.unsplash.com/random/200x200?sig=4",
  "https://source.unsplash.com/random/200x200?sig=5",
  "https://source.unsplash.com/random/200x200?sig=6",
];

function Page() {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0 py-28">
      <div className="z-40 rounded-md border border-white bg-[#ead9e624] py-4 shadow-xl backdrop-blur-[25px] max-md:mx-8 max-md:my-2 max-md:px-4 md:mx-14 md:px-8 md:py-14">
        <div className="flex flex-row gap-8 max-md:flex-col">
          <div className="flex flex-col gap-2">
            <Image
              src="/assets/growth.png"
              alt="Growth"
              quality={100}
              height={350}
              width={350}
            />
            <h4 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
              Tatiana
            </h4>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-[#eee2e999] lg:max-w-lg">
              Tatiana is a 23 year old model from Russia. She is a professional
              model and has been in the industry for 5 years. She has worked
              with some of the biggest brands in the world and has been featured
              in magazines such as Vogue and Elle.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={imageUrls[selectedImage]!}
                alt="Selected Preview"
                quality={100}
                height={350}
                width={350}
                className="inset-0 rounded-md border-2 border-solid border-secondary shadow-md"
              />
            </div>
            <div className="flex h-fit flex-wrap gap-2 max-md:justify-center">
              {imageUrls.map((url, index) => (
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
