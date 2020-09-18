import isDate from 'date-fns/isDate';
import { date } from '../src/index';

describe('Date', () => {
  it('formatDateHourAndMinutes empty', () => {
    const data = new Date();
    const result = date.formatDateHourAndMinutes({});

    expect(result).toEqual(
      date.formatDateHourAndMinutes({
        date: data,
        hour: 0,
        minutes: 0,
        seconds: 0,
      }),
    );
  });

  it('formatDateHourAndMinutes initial date', () => {
    const data = new Date();
    const result = date.formatDateHourAndMinutes({
      date: data,
      hour: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(result).toEqual(
      date.formatDateHourAndMinutes({
        date: data,
        hour: 0,
        minutes: 0,
        seconds: 0,
      }),
    );
  });

  it('formatDateHourAndMinutes final date', () => {
    const data = new Date();
    const result = date.formatDateHourAndMinutes({
      date: data,
      hour: 23,
      minutes: 59,
      seconds: 59,
    });

    expect(result).toEqual(
      date.formatDateHourAndMinutes({
        date: data,
        hour: 23,
        minutes: 59,
        seconds: 59,
      }),
    );
  });

  it('Invalid Date', () => {
    expect(isDate(1)).toEqual(false);
  });
});
