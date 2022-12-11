import { Request, Response } from "express";
import { GetCategoryService } from "../services/getCategoryService";

export async function GetCategoryController(
  request: Request,
  response: Response
) {
  const category = await GetCategoryService();

  response.json(category);
}
