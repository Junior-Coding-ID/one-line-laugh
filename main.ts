// One-Line Laugh v1: a single funny line, at most 200 characters.
// The punch lands on the last word: the "promotions" tab in the inbox
// takes the word literally and promotes itself to management.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finally cleaned my inbox, and the promotions tab immediately promoted itself to management.";

// Fail loudly instead of submitting a line of the wrong length.
if (LINE.length !== 93) {
  throw new Error(`line must be exactly 93 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
