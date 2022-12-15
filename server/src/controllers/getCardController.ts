import { Request, Response } from "express";
import { GetCardService } from "../services/getCardService";

export async function GetCardController(request: Request, response: Response) {
  const userdId = request.userId;

  const cards = await GetCardService({ id: userdId });

  response.json(cards);
}
