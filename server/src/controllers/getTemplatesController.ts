import { Request, Response } from "express";
import { getTemplatesService } from "../services/getTemplatesService";
import { prisma } from "../utils/prismaClient";

export async function getTemplateController(
  request: Request,
  response: Response
) {
  const templates = await getTemplatesService();

  return response.json(templates);
}
