import { search } from '../src/index';

describe('Date', () => {
  it('Search empty', () => {
    const result = search();

    expect(result).toStrictEqual({});
  });
  it('Search name 10', () => {
    const result = search([{ key: 'name', value: 10 }]);

    expect(result.$or[0].name.$regex).toBe(10);
  });
});
