import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateReply = async (message) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-lite-001",
    contents: message,
  });

  return response.text;
};