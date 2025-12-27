
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const getServiceInfo = async (serviceName: string) => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Explique brevemente o que é o serviço de "${serviceName}" no contexto de enfermagem. 
      Forneça uma resposta profissional, empática e direta em Português do Brasil.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING },
            benefits: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          },
          required: ["title", "content", "benefits"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error fetching service info from Gemini:", error);
    return {
      title: serviceName,
      content: "Desculpe, não conseguimos carregar os detalhes no momento. Por favor, entre em contato para mais informações.",
      benefits: ["Atendimento personalizado", "Profissional qualificada", "Segurança e higiene"]
    };
  }
};
