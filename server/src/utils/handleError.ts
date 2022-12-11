import { NextFunction, Request, Response } from "express";

export function handleError(
  error: { message: string; status: number },
  request: Request,
  response: Response,
  next: NextFunction
) {
  return response
    .status(error.status || 400)
    .json({ message: error.message || "Unknown error" });
}
