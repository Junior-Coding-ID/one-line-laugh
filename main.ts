import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I've waved to my neighbor for eight years without learning his name, so now I'm just hoping he runs for mayor.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
