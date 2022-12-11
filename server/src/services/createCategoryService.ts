import { prisma } from "../utils/prismaClient";

interface IProps {
  name: string;
  templateName: string;
}

export async function CreateCategoryService({ name, templateName }: IProps) {
  const isCategoryNameExists = await prisma.category.findUnique({
    where: {
      name,
    },
  });

  if (isCategoryNameExists) throw { message: "Category name already exists" };

  const isTemplateExists = await prisma.template.findFirst({
    where: {
      name: templateName,
    },
  });

  if (!isTemplateExists) throw { message: "This template don't exists" };

  const category = await prisma.category.create({
    data: {
      name,
      templateName,
    },
  });

  return category;
}
