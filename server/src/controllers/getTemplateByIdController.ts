import { Request, Response } from "express";
import { GetTemplateByIdService } from "../services/getTemplateByIdService";

export async function getTemplateByIdController(
  request: Request,
  response: Response
) {
  const id = request.params.id;

  const template = await GetTemplateByIdService({ id });

  return response.json(template);
}
