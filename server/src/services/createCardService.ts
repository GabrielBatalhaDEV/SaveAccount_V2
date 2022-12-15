import { prisma } from "../utils/prismaClient";

interface IProps {
  userId: string;
  categoryName: string;
  title: string;
  cardBody: {
    value: string;
  }[];
}

export async function CreateCardService({
  userId,
  title,
  categoryName,
  cardBody,
}: IProps) {
  if (!title) throw { message: "field title is empty" };

  console.log(categoryName);

  const category = await prisma.category.findUnique({
    where: {
      name: categoryName,
    },
  });

  if (!category) throw { message: "This category does not exists" };

  const template = await prisma.template.findUnique({
    where: {
      name: category.templateName,
    },
  });

  if (!template) throw { message: "This category does not exists" };

  const templateBody = (await JSON.parse(template.templateBody)) as [
    { name: string; placeholder: string }
  ];

  console.log(templateBody);
  console.log(cardBody);

  const body = templateBody.map((item, key) => {
    return {
      name: item.name,
      placeholder: item.placeholder,
      value: cardBody[key] ? cardBody[key].value : "",
    };
  });

  console.log(body);

  const cardBodyJSON = JSON.stringify(body);

  const card = await prisma.card.create({
    data: {
      title,
      accountId: userId,
      categoryName,
      cardBody: cardBodyJSON,
    },
  });

  return card;
}
