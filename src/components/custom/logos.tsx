"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

export const Logos = ({ src, alt }: Logo) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={54}
      height={54}
      className="my-auto opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
    />
  );
};
