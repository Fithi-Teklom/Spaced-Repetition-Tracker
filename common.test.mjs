import { getUserIds } from "./common.mjs";
import { calculateRevisionDates } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("One week revision is correct", () => {
  const dates = calculateRevisionDates("2026-06-09");

assert.equal(dates[0].toLocaleDateString("en-CA"), "2026-06-16");
});
test("One month revision is correct", () => {
  const dates = calculateRevisionDates("2026-06-09");

 assert.equal(dates[1].toLocaleDateString("en-CA"), "2026-07-09");
});
test("One year revision is correct", () => {
  const dates = calculateRevisionDates("2026-06-09");

 assert.equal(dates[4].toLocaleDateString("en-CA"), "2027-06-09");
});
