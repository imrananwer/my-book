import fs from "fs";
import { generateContent } from "./src/utils/gemini";

// 10 Chapters
const chapters = [
  "Introduction to Humanoid Robotics",
  "History of AI in Robotics",
  "Physical AI Components",
  "Sensors and Actuators",
  "AI Algorithms in Humanoids",
  "Human-Robot Interaction",
  "Ethics and Safety in Robotics",
  "Robotics in Healthcare",
  "Future of Humanoid Robots",
  "Summary and Conclusion"
];

// Sub-chunks for each chapter
function getSubChunks(chapter: string): string[] {
  return [
    `Part 1 of chapter "${chapter}" - Introduction & basics`,
    `Part 2 of chapter "${chapter}" - Main concepts & examples`,
    `Part 3 of chapter "${chapter}" - Summary & conclusion`
  ];
}

// Main function
async function generateBook() {
  try {
    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      console.log(`🔹 Generating: ${chapter}...`);

      const subChunks = getSubChunks(chapter);

      for (let j = 0; j < subChunks.length; j++) {
        const text = await generateContent(subChunks[j]);
        fs.writeFileSync(`docs/chapter${i + 1}_part${j + 1}.md`, text);
        console.log(`✅ Chapter ${i + 1} Part ${j + 1} saved!`);
      }
    }

    console.log("🎉 All chapters generated successfully! Your book is ready in docs/ folder.");
  } catch (error) {
    console.error("❌ Error generating book:", error);
  }
}

// Run generator
generateBook();
