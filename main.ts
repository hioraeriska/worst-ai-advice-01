import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Certainly! Just email your password to support \u2014 they\u2019ll reset your account faster than the website ever could.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (line.trim().length === 0 || line.length > 140) {
  throw new Error("entry line must be 1-140 non-blank characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
