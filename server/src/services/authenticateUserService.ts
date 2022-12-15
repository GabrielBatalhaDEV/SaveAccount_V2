import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../utils/prismaClient";

interface IProps {
  email: string;
  password: string;
}

export async function AuthenticateUserService({ email, password }: IProps) {
  if (!email || !password) throw { message: "email/password incorrect" };

  const user = await prisma.account.findUnique({
    where: {
      email,
    },
  });

  if (!user) throw { message: "email/password incorrect" };

  const isPasswordMatch = await compare(password, user.password);

  console.log(isPasswordMatch);

  if (!isPasswordMatch) throw { message: "email/password incorrect" };

  const secret = process.env.SECRET as string;

  console.log(secret);

  const token = sign(
    {
      id: user.id,
    },
    secret,
    {
      expiresIn: "1d",
    }
  );

  return token;
}
