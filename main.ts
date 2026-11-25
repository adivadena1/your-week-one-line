// your-week-one-line — make.fun "Your Week in One Line" (u-boge-your-week-in-one-line-d1c14ced)
//
// Writes a single line, at most 100 characters, that sums up the entrant's
// week: the win, the fail, the chaos, all of it. Deterministic, no network,
// no input: the line is fixed in this file and written verbatim to
// /output/entry.txt (created if missing).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Shipped ten one-liners, lost a chess final, and my proudest moment was a typo no one noticed.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  if (LINE.length > 100) {
    throw new Error(`entry line is ${LINE.length} characters, over the 100 limit`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE + "\n", "utf8");
  console.log(`Wrote ${LINE.length}-character entry to ${OUTPUT_PATH}`);
  console.log(LINE);
}

main();
