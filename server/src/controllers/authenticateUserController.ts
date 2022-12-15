import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/authenticateUserService";

export async function AuthenticateUserController(
  request: Request,
  response: Response
) {
  const { email, password } = request.body;

  const token = await AuthenticateUserService({ email, password });

  response.status(202).json({ token });
}
