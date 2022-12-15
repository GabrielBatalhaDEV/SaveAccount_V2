import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
}

export async function GetCardService({ id }: IProps) {
  if (!id) throw { message: "FIeld ID is empty" };

  const cards = await prisma.card.findMany({
    where: {
      accountId: id,
    },
  });

  return cards;
}
