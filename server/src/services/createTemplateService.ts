import { prisma } from "../utils/prismaClient";

interface IProps {
  name: string;
  templateBody: {
    name: string;
    placeholder: string;
  }[];
}

export async function createTemplateService({ name, templateBody }: IProps) {
  const isTemplateExists = await prisma.template.findFirst({
    where: {
      name,
    },
  });

  if (isTemplateExists) throw { message: "This template already exists" };

  const templateBodyJSON = JSON.stringify(templateBody);

  console.log(templateBodyJSON);

  const template = await prisma.template.create({
    data: {
      name,
      templateBody: templateBodyJSON,
    },
  });

  return template;
}
