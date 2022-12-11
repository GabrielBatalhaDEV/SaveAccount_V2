import { prisma } from "../utils/prismaClient";

export async function getTemplatesService() {
  const templates = await prisma.template.findMany({
    include: {
      Category: {
        select: {
          name: true,
        },
        orderBy: {
          name: "asc",
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return templates;
}
