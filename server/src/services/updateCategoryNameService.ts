import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
  name: string;
}

export async function UpdateCategoryNameService({ id, name }: IProps) {
  if (!name) throw { message: "Field name is empty" };

  const isCategoryExists = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!isCategoryExists) throw { message: "This category don't exists" };

  if (name === isCategoryExists.name)
    throw { message: "The category name didnt change" };

  const category = await prisma.category.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  return category;
}
