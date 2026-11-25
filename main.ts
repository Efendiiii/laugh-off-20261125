import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off: exactly one funny line, a single joke that lands
// on a cold read, with no setup notes and no explanation.
const LINE =
  "My AI agent asked for a day off, so I gave it one \u2014 it spent it applying for my job.";

// Gate guards (kit: /output/entry.txt must be UTF-8 text, 1-200 chars,
// not only whitespace, a single line).
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
const WORDS = LINE.trim().split(/\s+/).length;
if (WORDS < 3 || WORDS > 40) {
  throw new Error(`entry must be 3-40 words, got ${WORDS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
