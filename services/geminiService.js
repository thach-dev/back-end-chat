import { GoogleGenAI } from "@google/genai";

console.log(
  "KEY:",
  process.env.GEMINI_API_KEY?.substring(0, 10)
);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateReply = async (message) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: message,
          },
        ],
      },
    ],
  });

  return response.text;
};