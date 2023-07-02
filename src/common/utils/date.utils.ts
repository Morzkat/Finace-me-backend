const isDate = (date: string): boolean => Boolean(Date.parse(date));

const getDaysInCurrentMonth = (): number => {
  const currentDate = new Date();
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
};

export { isDate, getDaysInCurrentMonth };
