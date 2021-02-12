import { formatDateHourAndMinutes } from './date';
import isDate from 'date-fns/isDate';

interface Req {
  query?: {
    createdAtInitial?: Date;
    createdAtFinal?: Date;
    updatedAtInitial?: Date;
    updatedAtFinal?: Date;
  };
}

export const filterQueryStringDate = (req: Req) => {
  const findOptions = {} as { createdAt?: object; updatedAt?: object };

  if (req.query.createdAtInitial && isDate(req.query.createdAtInitial)) {
    findOptions['createdAt'] = {
      $gte: formatDateHourAndMinutes({
        date: req.query.createdAtInitial,
        hour: 0,
        minutes: 0,
        seconds: 0,
      }),
    };
  }

  if (req.query.createdAtFinal && isDate(req.query.createdAtFinal)) {
    findOptions['createdAt'] = {
      ...findOptions.createdAt,
      $lte: formatDateHourAndMinutes({
        date: req.query.createdAtFinal,
        hour: 23,
        minutes: 59,
        seconds: 59,
      }),
    };
  }

  if (req.query.updatedAtInitial && isDate(req.query.updatedAtInitial)) {
    findOptions['updatedAt'] = {
      $gte: formatDateHourAndMinutes({
        date: req.query.updatedAtInitial,
        hour: 0,
        minutes: 0,
        seconds: 0,
      }),
    };
  }

  if (req.query.updatedAtFinal && isDate(req.query.updatedAtFinal)) {
    findOptions['updatedAt'] = {
      ...findOptions.updatedAt,
      $lte: formatDateHourAndMinutes({
        date: req.query.updatedAtFinal,
        hour: 23,
        minutes: 59,
        seconds: 59,
      }),
    };
  }

  return findOptions;
};
