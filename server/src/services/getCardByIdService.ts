import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
  userId: string;
}

export async function GetCardByIdService({ id, userId }: IProps) {
  if (!id || !userId) throw { message: "Theres a empty field" };

  const card = await prisma.card.findUnique({
    where: {
      id,
    },
  });

  if (!card) throw { message: "Cannot find any card with this Id" };

  if (!(card?.accountId === userId))
    throw { message: "Invalid Accessed", status: 401 };

  card.cardBody = JSON.parse(card.cardBody);

  return card;
}
