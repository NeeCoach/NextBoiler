import React from "react";
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
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0 py-32">
      <div className="z-40 rounded-md border border-white bg-[#ead9e624] py-4 backdrop-blur-[25px] max-md:px-4 md:px-8 md:py-14 md:mx-14">
        <div className="flex flex-row gap-8">
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
          <div className="grid grid-cols-4 gap-2 h-fit">
            {imageUrls.map((url, index) => (
              <div key={index} className="relative h-24 w-24">
                <Image
                  src={url}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
