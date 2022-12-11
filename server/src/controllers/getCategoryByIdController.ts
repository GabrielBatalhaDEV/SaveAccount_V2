import { Request, Response } from "express";
import { GetCategoryByIdService } from "../services/getCategoryByIdService";

export async function GetCategoryByIdController(
  request: Request,
  response: Response
) {
  const id = request.params.id;

  const category = await GetCategoryByIdService({ id });

  response.json(category);
}
