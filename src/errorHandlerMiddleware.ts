import { Request, Response, NextFunction } from 'express';
import ErrorHandler from './ErrorHandler';

export default async (err: ErrorHandler, req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { statusCode, message, fieldErrors } = err;
  res.status(statusCode).json({
    message,
    field_errors: fieldErrors,
  });

  return next();
};
