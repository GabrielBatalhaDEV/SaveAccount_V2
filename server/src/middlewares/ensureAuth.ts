import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  id: string;
}

export function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const reqToken = request.headers.authorization;

  if (!reqToken) throw { message: "Invalid Token", status: 401 };

  const [, token] = reqToken.split(" ");

  if (!token) throw { message: "Invalid Token", status: 401 };

  try {
    const secret = process.env.SECRET as string;

    const { id } = verify(token, secret) as IPayload;

    request.userId = id;

    next();
  } catch (error) {
    throw { message: "Invalid Token", status: 401 };
  }
}
