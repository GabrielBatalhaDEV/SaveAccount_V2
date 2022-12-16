import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
}

export async function GetTemplateByIdService({ id }: IProps) {
  const template = await prisma.template.findUnique({
    where: {
      id,
    },
    include: {
      Category: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!template) throw { message: "This template don't exists" };

  template.templateBody = JSON.parse(template.templateBody);

  return template;
}
