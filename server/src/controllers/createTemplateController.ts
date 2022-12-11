import { Request, Response } from "express";
import { createTemplateService } from "../services/createTemplateService";

export async function CreateTemplateController(
  request: Request,
  response: Response
) {
  const { name, templateBody } = request.body;

  const template = await createTemplateService({ name, templateBody });

  return response.status(201).json(template);
}
