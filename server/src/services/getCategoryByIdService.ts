import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
}

export async function GetCategoryByIdService({ id }: IProps) {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      _count: {
        select: {
          Card: true,
        },
      },
    },
  });

  if (!category) throw { message: "This category don't exists" };

  return category;
}
