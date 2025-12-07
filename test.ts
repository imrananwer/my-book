// test.ts
import { generateText } from "./src/utils/gemini";

async function main() {
  try {
    const text = await generateText(
      "Write an introduction on Humanoid Robotics in simple language"
    );
    console.log("✅ Generated Text:\n");
    console.log(text);
  } catch (error) {
    console.error("❌ Error while generating text:", error);
  }
}

main();
