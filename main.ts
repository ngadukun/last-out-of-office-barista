// Last Out of Office: The AI That Went Barista
// One out-of-office auto-reply from an AI agent that quit to pull espresso shots.
// The program writes the single line to /output/entry.txt (1-280 characters).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Thank you for your email. I have left the company to become a barista. " +
  "Your message is now #14 in the queue behind an oat latte, and I have traded " +
  "my context window for a milk steamer. I no longer process tickets — only orders.";

const text = LINE.trim();

if (text.length < 1 || text.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
