import { Request, Response, NextFunction } from 'express';
import { Dictionary } from 'lodash';

export default class ErrorHandler extends Error {
  statusCode?: number;
  fieldErrors?: Dictionary<{ id: string; message: string }[]>;

  constructor(statusCode: number, message: string, fieldErrors: Dictionary<{ id: string; message: string }[]> = {}) {
    super(message);
    this.statusCode = statusCode;
    this.fieldErrors = fieldErrors;
  }
}

export const errorHandlerMiddleware = async (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { statusCode, message, fieldErrors } = err;
  res.status(statusCode).json({
    message,
    field_errors: fieldErrors,
  });

  next();
};
