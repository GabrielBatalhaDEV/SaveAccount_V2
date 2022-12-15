import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
  userId: string;
  title: string;
  body: {
    value: string;
  }[];
}

export async function UpdateCardService({ id, userId, title, body }: IProps) {
  if (!id || !userId || !title || !body)
    throw { message: "Theres a empty field" };

  console.log({
    id,
    userId,
    title,
    body,
  });

  const card = await prisma.card.findUnique({
    where: {
      id,
    },
  });

  if (!card) throw { message: "Cannot find any card with this Id" };

  if (!(card?.accountId === userId))
    throw { message: "Invalid Accessed", status: 401 };

  const cardBody = JSON.parse(card.cardBody) as {
    name: string;
    placeholder: string;
    value: string;
  }[];

  const updatedBody = cardBody.map((item, index) => {
    return {
      name: item.name,
      placeholder: item.placeholder,
      value: body[index] ? body[index].value : "",
    };
  });

  const updatedBodyJSON = JSON.stringify(updatedBody);

  const updatedCard = await prisma.card.update({
    where: {
      id,
    },
    data: {
      title,
      cardBody: updatedBodyJSON,
    },
  });

  return updatedCard;
}
