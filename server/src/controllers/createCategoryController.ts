import { Request, Response } from "express";
import { CreateCategoryService } from "../services/createCategoryService";

export async function CreateCategoryController(
  request: Request,
  response: Response
) {
  const { name, templateName } = request.body;

  const category = await CreateCategoryService({ name, templateName });

  response.status(201).json(category);
}
