// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather (<=140 chars) for an invented city to entry.txt.
// Deterministic, standard library only, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const FORECAST =
  "In Drizzlewick: light rain until ten, sun by lunch, 16\u00B0, and the 8:12 bus is early for the first time since 1987 \u2014 pack an umbrella anyway.";

// The gate: UTF-8 text of 1 to 140 characters, not only white space, one line.
// Refuse to write anything invalid rather than hand the judge a dead entry.
if (FORECAST.length < 1 || FORECAST.length > 140) {
  throw new Error(`forecast is ${FORECAST.length} chars, must be 1-140`);
}
if (FORECAST.trim().length === 0) {
  throw new Error("forecast is only white space");
}
if (/[\r\n]/.test(FORECAST)) {
  throw new Error("forecast must be a single line");
}

const outPath = resolve(process.env.OUTPUT_PATH ?? "/output/entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, FORECAST, "utf8");
const written = readFileSync(outPath, "utf8");
if (written !== FORECAST) {
  throw new Error("round-trip check failed: written file differs from forecast");
}
console.log(`wrote ${FORECAST.length} chars to ${outPath}`);
