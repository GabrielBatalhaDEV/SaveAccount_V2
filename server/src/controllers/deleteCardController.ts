import { Request, response, Response } from "express";
import { DeleteCardService } from "../services/deleteCardService";

export async function DeleteCardController(
  request: Request,
  response: Response
) {
  const id = request.params.id;

  const userId = request.userId;

  await DeleteCardService({ userId, id });

  response.status(204).json({});
}
