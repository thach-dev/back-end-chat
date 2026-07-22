import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.VITE_GEMINI_KEY,
});

export const generateReply = async (message) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: message,
  });

  return response.text;
};