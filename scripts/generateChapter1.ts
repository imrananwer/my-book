import { generateContent } from "../src/utils/gemini";
import fs from "fs";

async function main() {
  const chapterPrompt = "Write an introduction on Humanoid Robotics in simple language";

  const content = await generateContent(chapterPrompt);

  fs.writeFileSync("docs/chapter1.md", content);

  console.log("✅ Chapter 1 generated successfully!");
}

main();
