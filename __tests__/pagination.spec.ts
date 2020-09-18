import { pagination } from '../src/index';

describe('Pagination', () => {
  it('pagination', () => {
    const result = pagination({});

    expect(result).toEqual({
      meta: {
        total_count: 0,
        total_pages: Math.ceil(0 / 15),
        current_page: 0,
        current_count: 15,
        items_per_page: 15,
      },
      results: [],
    });
  });
});
