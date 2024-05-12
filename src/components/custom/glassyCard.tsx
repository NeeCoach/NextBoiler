"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "~/lib/utils";

export const GlassyCard = ({ className, ...props }: { className: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={cn("card h-96 w-80 [perspective:1000px]", className)}>
      <div
        className={`relative h-full w-full rounded-2xl shadow-md transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}`}
      >
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
          <div className="absolute bottom-0 max-h-24 p-8">
            <h2 className="card-title">
              Life hack
              <div className="badge badge-secondary">NEW</div>
              <div className="badge badge-outline">Products</div>
              <div
                className="badge badge-outline"
                onClick={() => setIsFlipped(true)}
              >
                Click
              </div>
            </h2>
          </div>
        </div>
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl bg-black [transform:rotateY(180deg)] [backface-visibility:hidden]"
          onClick={() => setIsFlipped(false)}
        >
          <video
            src="/video/Untitled.mp4"
            className="h-full w-full rounded-2xl object-cover blur-sm"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};
