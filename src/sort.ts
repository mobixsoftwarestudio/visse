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

export const sortInFind = (field: string) =>
  !!field && isString(field) ? formatFieldQueryString(field) : [['_id', -1]];

export const sortInAggregate = (field: string) =>
  !!field && isString(field) ? formatFieldQueryStringAggregate(field) : { _id: -1 };
