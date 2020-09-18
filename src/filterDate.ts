import { formatDateHourAndMinutes } from './date';
import isDate from 'date-fns/isDate';

export const isString = (x) => Object.prototype.toString.call(x) === '[object String]';

export const formatFieldQueryStringAggregate = (field: string) =>
  field
    .split(',')
    .map((item) => item.trim())
    .map((item) => {
      const newItem = item.split('-');
      const sort = {};
      if (newItem.length === 1) sort[newItem[0]] = 1;
      else sort[newItem[1]] = -1;

      return sort;
    })
    .reduce((map, item) => ({ ...map, item }));

export const formatFieldQueryString = (field: string) =>
  field
    .split(',')
    .map((item) => item.trim())
    .map((item) => {
      const newItem = item.split('-');
      let sort = [];
      if (newItem.length === 1) sort = sort.concat([newItem[0], 1]);
      else sort = sort.concat([newItem[1], -1]);

      return sort;
    });

export const sortFieldQueryString = (field: string) =>
  !!field && isString(field) ? formatFieldQueryString(field) : [['_id', -1]];

export const sortFieldQueryStringAggreate = (field: string, fieldDefault = null) =>
  !!field && isString(field) ? formatFieldQueryStringAggregate(field) : { _id: -1 };

interface Req {
  query?: {
    createdAtInitial?: Date;
    createdAtFinal?: Date;
    updatedAtInitial?: Date;
    updatedAtFinal: Date;
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
