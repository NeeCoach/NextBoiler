"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

export const Logos = ({ src, alt }: Logo) => {
  return (
    <Image src={src} alt={alt} width={54} height={54} className="my-auto" />
  );
};
