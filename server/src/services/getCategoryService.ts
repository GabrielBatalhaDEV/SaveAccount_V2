import { prisma } from "../utils/prismaClient";

export async function GetCategoryService() {
  const category = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          Card: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return category;
}
