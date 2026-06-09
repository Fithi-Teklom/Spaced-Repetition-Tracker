export function getUserIds() {
  return ["1", "2", "3", "4", "5"];
}

export function calculateRevisionDates(startDate) {
  const date = new Date(startDate);

  const oneWeek = new Date(date);
  oneWeek.setDate(oneWeek.getDate() + 7);

  const oneMonth = new Date(date);
  oneMonth.setMonth(oneMonth.getMonth() + 1);

  const threeMonths = new Date(date);
  threeMonths.setMonth(threeMonths.getMonth() + 3);

  const sixMonths = new Date(date);
  sixMonths.setMonth(sixMonths.getMonth() + 6);

  const oneYear = new Date(date);
  oneYear.setFullYear(oneYear.getFullYear() + 1);

  return [
    oneWeek,
    oneMonth,
    threeMonths,
    sixMonths,
    oneYear,
  ];
}