import { Request, Response } from "express";
import { GetAccountService } from "../services/getAccountService";

export async function GetAccountController(
  request: Request,
  response: Response
) {
  const { email } = request.body;

  const account = await GetAccountService({ email });

  return response.json(account);
}
