export function calculateRevisionDates(startDate) {
  const [year, month, day] = startDate.split("-").map(Number);

  const base = new Date(Date.UTC(year, month - 1, day));

  function addDays(d, days) {
    const copy = new Date(d);
    copy.setUTCDate(copy.getUTCDate() + days);
    return copy;
  }

  function addMonths(d, months) {
    const copy = new Date(d);
    const day = copy.getUTCDate();

    copy.setUTCMonth(copy.getUTCMonth() + months);

    if (copy.getUTCDate() !== day) {
      copy.setUTCDate(0);
    }

    return copy;
  }

  function addYears(d, years) {
    const copy = new Date(d);
    copy.setUTCFullYear(copy.getUTCFullYear() + years);
    return copy;
  }

  return [
    addDays(base, 7),
    addMonths(base, 1),
    addMonths(base, 3),
    addMonths(base, 6),
    addYears(base, 1),
  ];
}