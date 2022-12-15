import { Request, Response } from "express";
import { GetAccountService } from "../services/getAccountService";

export async function GetAccountController(
  request: Request,
  response: Response
) {
  const id = request.userId;

  const account = await GetAccountService({ id });

  return response.json(account);
}
