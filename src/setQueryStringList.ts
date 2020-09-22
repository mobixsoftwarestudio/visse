import { NextFunction } from 'express';
export default (limit = 15) => (req, res, next) => {
  req.query.limit = Number(req.query.limit) || limit;
  req.query.page = Number(req.query.page) || 0;
  req.query.skip = req.query.limit * req.query.page;

  return next();
};
