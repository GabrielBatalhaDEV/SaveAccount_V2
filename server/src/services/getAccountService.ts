import { prisma } from "../utils/prismaClient";

interface IProps {
  email: string;
}

export async function GetAccountService({ email }: IProps) {
  const accounts = await prisma.account.findFirst({
    where: { email },
  });

  return accounts;
}
