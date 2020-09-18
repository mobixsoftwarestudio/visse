import { filterDate } from '../src/index';
import { date } from '../src/index';

describe('Filter', () => {
  it('QueryString empty', () => {
    const req = {
      query: {},
    };
    const result = filterDate.filterQueryStringDate(req);
    expect(result).toEqual({});
  });

  it('QueryString createdAtInitial', () => {
    const newD = new Date();
    const req = {
      query: {
        createdAtInitial: newD,
      },
    };

    const result = filterDate.filterQueryStringDate(req);
    expect(result).toEqual({
      createdAt: {
        $gte: date.formatDateHourAndMinutes({
          date: newD,
          hour: 0,
          minutes: 0,
          seconds: 0,
        }),
      },
    });
  });

  it('QueryString createdAtFinal', () => {
    const newD = new Date();
    const req = {
      query: {
        createdAtFinal: newD,
      },
    };

    const result = filterDate.filterQueryStringDate(req);
    expect(result).toEqual({
      createdAt: {
        $lte: date.formatDateHourAndMinutes({
          date: newD,
          hour: 23,
          minutes: 59,
          seconds: 59,
        }),
      },
    });
  });

  it('QueryString createdAtInitial and createdAtFinal', () => {
    const newD = new Date();
    const req = {
      query: {
        createdAtInitial: newD,
        createdAtFinal: newD,
      },
    };

    const result = filterDate.filterQueryStringDate(req);
    expect(result).toEqual({
      createdAt: {
        $lte: date.formatDateHourAndMinutes({
          date: newD,
          hour: 23,
          minutes: 59,
          seconds: 59,
        }),
        $gte: date.formatDateHourAndMinutes({
          date: newD,
          hour: 0,
          minutes: 0,
          seconds: 0,
        }),
      },
    });
  });

  it('QueryString updatedAtInitial', () => {
    const newD = new Date();
    const req = {
      query: {
        updatedAtInitial: newD,
      },
    };

    const result = filterDate.filterQueryStringDate(req);
    expect(result).toEqual({
      updatedAt: {
        $gte: date.formatDateHourAndMinutes({
          date: newD,
          hour: 0,
          minutes: 0,
          seconds: 0,
        }),
      },
    });
  });

  it('QueryString updatedAtFinal', () => {
    const newD = new Date();
    const req = {
      query: {
        updatedAtFinal: newD,
      },
    };

    const result = filterDate.filterQueryStringDate(req);
    expect(result).toEqual({
      updatedAt: {
        $lte: date.formatDateHourAndMinutes({
          date: newD,
          hour: 23,
          minutes: 59,
          seconds: 59,
        }),
      },
    });
  });

  it('QueryString updatedAtInitial and updatedAtFinal', () => {
    const newD = new Date();
    const req = {
      query: {
        updatedAtInitial: newD,
        updatedAtFinal: newD,
      },
    };

    const result = filterDate.filterQueryStringDate(req);
    expect(result).toEqual({
      updatedAt: {
        $lte: date.formatDateHourAndMinutes({
          date: newD,
          hour: 23,
          minutes: 59,
          seconds: 59,
        }),
        $gte: date.formatDateHourAndMinutes({
          date: newD,
          hour: 0,
          minutes: 0,
          seconds: 0,
        }),
      },
    });
  });
});
