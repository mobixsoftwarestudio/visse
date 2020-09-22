import { ValidationError, validationResult } from 'express-validator';
import { Dictionary, isEmpty } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import ErrorHandler from './ErrorHandler';

const parseErrors = (errors: ValidationError[]): Dictionary<{ id: string; message: string }[]> => {
  const dict = {};

  errors.forEach((error) => {
    if (!!dict[error.param]) {
      if (!dict[error.param].find((singleError: { id: string }) => singleError.id === error.msg.id)) {
        dict[error.param].push(error.msg);
      }
    } else {
      dict[error.param] = [error.msg];
    }
  });

  return dict;
};

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req).array();

    if (!isEmpty(errors)) throw new ErrorHandler(422, 'There are validation errors.', parseErrors(errors));

    next();
  } catch (error) {
    if (error instanceof ErrorHandler) {
      next(error);
    } else {
      next(new ErrorHandler(500, error.message, [{ id: 'internal-error', message: error.message }]));
    }
  }
};
