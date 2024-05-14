import React from "react";
import { GlassyCard } from "~/components/custom";
import Image from "next/image";

const galleryJson = [
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
];

function page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0 py-32">
      <div className="px-2">
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {galleryJson.map((item, index) => (
            <GlassyCard
              imageUrl="https://images.unsplash.com/photo-1713204641929-13d89fc98651"
              videoUrl="/video/Untitled2.mp4"
              className="my-4"
              id="1"
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
