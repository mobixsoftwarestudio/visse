import { setQueryStringList } from '../src/index';

describe('Date', () => {
  it('setQueryStringList normal', () => {
    let req = {
      query: {
        limit: 10,
        page: 0,
      },
    };
    setQueryStringList()(req, null, () => {
      expect(req.query.limit).toBe(req.query.limit);
    });
  });

  it('setQueryStringList without limit', () => {
    let req = {
      query: {
        page: 0,
        limit: null,
      },
    };
    setQueryStringList()(req, null, () => {
      expect(15).toBe(req.query.limit);
    });
  });
});
