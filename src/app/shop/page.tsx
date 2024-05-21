import React from "react";
import { GlassyCard } from "~/components/custom";
import { PrismaClient } from "@prisma/client";

interface Model {
  id: string;
  photoUrls: string[];
  videoUrls: string[];
}

async function fetchModels(): Promise<Model[]> {
  const prisma = new PrismaClient();

  try {
    const models = await prisma.model.findMany();
    return models;
  } catch (error) {
    throw new Error("Failed to fetch data from the database");
  } finally {
    await prisma.$disconnect();
  }
}

export default async function Page() {
  const models = await fetchModels();
  const CARDS_PER_ROW = 5;

  const rows = [];
  for (let i = 0; i < models.length; i += CARDS_PER_ROW) {
    rows.push(models.slice(i, i + CARDS_PER_ROW));
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0 py-32">
      <div className="z-40 m-4 flex flex-col items-center justify-center rounded-md border border-white bg-[#ead9e624] px-2 py-4 shadow-xl backdrop-blur-[25px] max-md:px-4 md:mx-36 md:px-2">
        <h2 className="p-6 py-8 font-inter text-7xl font-bold tracking-tighter">
          Meet our girls
        </h2>
        <div className="flex flex-col gap-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-8">
              {row.map((model, index) => (
                <GlassyCard
                  key={index}
                  imageUrl={model.photoUrls[0] ?? ""}
                  videoUrl={model.videoUrls[0] ?? ""}
                  className="rounded-md border-2 border-solid border-white shadow-md"
                  id={model.id}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
