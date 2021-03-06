import { ErrorHandler } from '../src/index';

describe('ErrorHandler', () => {
  it('Error 400', () => {
    const error = new ErrorHandler(400, 'error');
    expect(error.statusCode).toBe(400);
  });

  it('Error 500 with array', () => {
    const error = new ErrorHandler(500, 'error', null, ['internal-error']);
    expect(error.nonFieldErrors).toStrictEqual(['internal-error']);
  });
});
