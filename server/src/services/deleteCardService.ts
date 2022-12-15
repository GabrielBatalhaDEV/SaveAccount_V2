import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
  userId: string;
}

export async function DeleteCardService({ id, userId }: IProps) {
  if (!id || !userId) throw { message: "Theres a empty field" };

  const isCardExists = await prisma.card.findUnique({
    where: {
      id,
    },
  });

  if (!isCardExists) throw { message: "Cannot find any card with this Id" };

  if (!(isCardExists?.accountId === userId))
    throw { message: "Invalid Accessed", status: 401 };

  await prisma.card.delete({
    where: {
      id,
    },
  });
}
