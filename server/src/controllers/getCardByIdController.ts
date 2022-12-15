import { Request, Response } from "express";
import { GetCardByIdService } from "../services/getCardByIdService";

export async function GetCardByIdController(
  request: Request,
  response: Response
) {
  const userId = request.userId;

  const id = request.params.id;

  const card = await GetCardByIdService({ id, userId });

  response.json(card);
}
