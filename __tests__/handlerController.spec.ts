import { handlerController, ErrorHandler } from '../src/index';

describe('handlerController', () => {
  it('handler Error 400', () => {
    handlerController((req, res, next) => {
      throw new ErrorHandler(400, 'aaaa', [{ id: 'aaa', message: 'bbbb' }]);
    })(null, null, (err) => {
      const { statusCode, message, fieldErrors } = err;
      expect(statusCode).toBe(400);
    });
  });

  it('handler Error 500', () => {
    handlerController((req, res, next) => {
      throw 'Too big';
    })(null, null, (err) => {
      const { statusCode, message, fieldErrors } = err;
      expect(statusCode).toBe(500);
    });
  });
});
