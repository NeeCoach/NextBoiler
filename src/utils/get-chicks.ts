import prisma from "~/utils/db";

export async function fetchModelById(id: string) {
  const model = await prisma.model.findUnique({
    where: { id },
    include: {
      tags: true,
    },
  });
  return model;
}
