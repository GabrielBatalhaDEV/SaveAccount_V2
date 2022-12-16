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

  const newTemplates = templates.map((item) => {
    return { ...item, templateBody: JSON.parse(item.templateBody) };
  });

  return newTemplates;
}
