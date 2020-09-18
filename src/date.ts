export const formatDateHourAndMinutes = <DataFormatDateHourAndMinutes>({
  date = new Date(),
  hour = 0,
  minutes = 0,
  seconds = 0,
}): Date | 'Date is invalid' => {
  try {
    return new Date(new Date(date).setHours(hour, minutes, seconds));
  } catch (error) {
    return 'Date is invalid';
  }
};

export const getFirstAndLastDays = () => {
  // THE DATE OBJECT.
  const dt = new Date();

  // GET THE MONTH AND YEAR OF THE SELECTED DATE.
  const month = dt.getMonth();
  const year = dt.getFullYear();

  // GET THE FIRST AND LAST DATE OF THE MONTH.
  const FirstDay = new Date(year, month, 1);
  const LastDay = new Date(year, month + 1, 0);

  return {
    FirstDay: formatDateHourAndMinutes({
      date: FirstDay,
      hour: 0,
      minutes: 0,
      seconds: 0,
    }),
    LastDay: formatDateHourAndMinutes({
      date: LastDay,
      hour: 23,
      minutes: 59,
      seconds: 59,
    }),
  };
};
