import { Request, response, Response } from "express";
import { UpdateCardService } from "../services/updateCardService";
import { prisma } from "../utils/prismaClient";

export async function UpdateCardController(
  request: Request,
  response: Response
) {
  const userId = request.userId;

  const id = request.params.id;

  const { title, cardBody } = request.body;

  const card = await UpdateCardService({ id, userId, body: cardBody, title });

  response.json(card);
}
