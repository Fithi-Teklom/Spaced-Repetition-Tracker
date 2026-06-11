import { getUserIds } from "./common.mjs";
import { calculateRevisionDates } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("User count is correct", () => {
  assert.equal(getUserIds().length, 5);
});

test("Revision calculator returns five days", () => {
  const dates = calculateRevisionDates("2026-02-09");

  assert.equal(dates.length, 5);
});

test("One week revision is correct", () => {
  const dates = calculateRevisionDates("2026-06-09");

  assert.equal(dates[0].toISOString().split("T")[0], "2026-06-16");
});
test("One month revision is correct", () => {
  const dates = calculateRevisionDates("2026-06-09");

  assert.equal(dates[1].toISOString().split("T")[0], "2026-07-09");
});
test("One year revision is correct", () => {
  const dates = calculateRevisionDates("2026-06-09");

  assert.equal(dates[4].toISOString().split("T")[0], "2027-06-09");
});
