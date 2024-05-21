import { type Model } from "@prisma/client"; // Import Model type
import prisma from "~/utils/db"; // Ensure prisma is imported

export async function fetchModelById(id: string): Promise<Model | null> {
  try {
    const model: Model | null = await prisma.model.findUnique({
      where: { id },
    });
    return model;
  } catch (error) {
    throw new Error("Failed to fetch data from the database");
  } finally {
    await prisma.$disconnect();
  }
}
