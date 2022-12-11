import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/deleteCategoryService";

export async function DeleteCategoryController(
  request: Request,
  response: Response
) {
  const id = request.params.id;

  await DeleteCategoryService({ id });

  return response.status(204).json();
}
