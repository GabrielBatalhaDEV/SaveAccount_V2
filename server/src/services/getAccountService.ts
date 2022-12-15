import { prisma } from "../utils/prismaClient";

interface IProps {
  id: string;
}

export async function GetAccountService({ id }: IProps) {
  const accounts = await prisma.account.findFirst({
    where: { id },
    include: {
      _count: {
        select: {
          Card: true,
        },
      },
    },
  });

  return accounts;
}
