import { Request, Response } from "express";
import { UpdateCategoryNameService } from "../services/updateCategoryNameService";

export async function UpdateCategoryNameController(
  request: Request,
  response: Response
) {
  const id = request.params.id;

  const { name } = request.body;

  const category = await UpdateCategoryNameService({ id, name });

  response.json(category);
}
