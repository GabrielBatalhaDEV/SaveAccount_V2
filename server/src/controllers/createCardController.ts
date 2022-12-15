import { Request, Response } from "express";
import { CreateCardService } from "../services/createCardService";

export async function CreateCardController(
  request: Request,
  response: Response
) {
  const userId = request.userId;

  const { cardBody, categoryName, title } = request.body;

  const card = await CreateCardService({
    userId,
    cardBody,
    categoryName,
    title,
  });

  return response.status(201).json(card);
}
