
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";
import { SYSTEM_PROMPT } from "../constants";

export const getGeminiResponse = async (history: Message[], userPrompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: userPrompt }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "Desculpe, estou com dificuldades para navegar agora. Tente novamente em instantes.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao processar sua solicitação. Por favor, tente falar conosco via WhatsApp.";
  }
};
