// The One-Line Laugh — v2 entry.
// Writes a single funny line (max 200 chars) to /output.
import { writeFileSync } from "node:fs";

const LINE =
  "I've waved to my neighbor for eight years without learning his name, so now I'm just hoping he runs for mayor.";

// The grader reads the joke from /output, so write exactly one line.
writeFileSync("/output", LINE, "utf8");
