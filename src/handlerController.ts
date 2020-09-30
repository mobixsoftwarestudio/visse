import ErrorHandler from './ErrorHandler';
import { Request, Response, NextFunction } from 'express';
export default (handleFunction: (Request, Response, NextFunction) => Promise<void>) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    handleFunction(req, res, next);
  } catch (error) {
    if (error instanceof ErrorHandler) {
      next(error);
    } else {
      next(
        new ErrorHandler(500, error.message, [{ id: 'internal-error', message: error?.message ?? 'Internal Error' }]),
      );
    }
  }
};
