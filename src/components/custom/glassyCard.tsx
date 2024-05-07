"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "~/lib/utils";

export const GlassyCard = ({ className, ...props }: { className: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("card h-96 w-80 [perspective:1000px]", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`glass relative h-full w-full rounded-2xl shadow-md transition-all duration-1000 [transform-style:preserve-3d] ${isFlipped ? "rotate-y-180" : "rotate-y-0"}`}
      >
        {/* Face avant de la carte */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <figure>
            <Image
              src="https://images.unsplash.com/photo-1713204641929-13d89fc98651"
              alt="car!"
              width={320}
              height={180}
              className="max-h-80 rounded-t-2xl object-cover"
            />
          </figure>
          <div className="absolute bottom-0 max-h-24 p-6">
            <h2 className="card-title">
              Life hack
              <div className="badge badge-secondary">NEW</div>
              <div className="badge badge-outline">Products</div>
            </h2>
          </div>
        </div>

        {/* Face arrière de la carte */}
        <div className="absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source
              src="https://file-examples.com/storage/feeb836c2d66294eb99ac59/2017/04/file_example_MP4_480_1_5MG.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};
