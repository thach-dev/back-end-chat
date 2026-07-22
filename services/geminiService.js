import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateReply = async (message) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: message,
  });

  return response.text;
};