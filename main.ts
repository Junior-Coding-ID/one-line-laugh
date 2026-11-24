// One-Line Laugh v3: the good towels
// The joke: parents save the good towels for guests; their own kid only
// "qualifies" for them after moving out. Everyday truth, ironic punch
// on the last word, no wasted words.
// Why it wins: the twist lands on "qualify" — the kid was never good
// enough for the towels while living at home, and the punchline reframes
// a household rule as a status the kid had to earn by leaving.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My mom saved the good towels for guests, and it only took moving out for me to qualify.";

if (LINE.length !== 87) {
  throw new Error(`expected 87 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
