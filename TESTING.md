# Testing

## Revision date calculations

I tested that the function `calculateRevisionDates()` returns correct revision dates based on a given input date.

The tests verify that:
- The one-week revision date is calculated correctly (7 days after the input date)
- The one-month revision date is calculated correctly (same day in the next month)
- The one-year revision date is calculated correctly (same day in the next year)

These were tested using unit tests in the test file, where I compared the returned dates against expected values using assertions.

Example input used in tests:
- Input date: 2026-06-09

Expected outputs:
- 2026-06-16 (one week later)
- 2026-07-09 (one month later)
- 2027-06-09 (one year later)

The tests ensure the function correctly handles date arithmetic and returns accurate revision schedules.

