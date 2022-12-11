import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
}

export async function DeleteCategoryService({ id }: IProps) {
  const isCategoryExists = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!isCategoryExists) throw { message: "This category don't exists" };

  const category = await prisma.category.delete({
    where: {
      id,
    },
  });

  return category;
}
