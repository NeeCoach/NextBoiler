"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "~/lib/utils";

interface GlassyCardProps {
  className: string;
  imageUrl: string;
  videoUrl: string;
  id: string;
}

export const GlassyCard: React.FC<GlassyCardProps> = ({
  className,
  imageUrl,
  videoUrl,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/shop/${id}`);
  };

  return (
    <div
      className={cn(
        "relative h-80 w-64 cursor-pointer overflow-hidden rounded-md bg-white",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="absolute inset-0">
        {isHovered ? (
          <video
            src={videoUrl}
            className="h-full w-full rounded-md object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={imageUrl}
            alt="car!"
            height={384}
            width={256}
            className="h-full w-full rounded-md object-cover"
          />
        )}
        <div className="absolute bottom-0 flex h-12 w-full flex-row justify-start rounded-b-md bg-secondary/90 p-2 text-left font-semibold text-primary">
          <div className="flex w-full flex-row justify-between">
            <span className="text-2xl">Tatiana</span>
            <div className="flex flex-row gap-1">
              <div className="badge badge-secondary border-primary bg-primary">
                NEW
              </div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
