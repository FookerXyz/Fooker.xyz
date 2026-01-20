
import { GoogleGenAI } from "@google/genai";

// Initializing the Google GenAI SDK using process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const FOOKER_CONTEXT = `
Fooker (FOO) Information:
- Network: Base Network (Ethereum Layer 2).
- Total Supply: 270,000,000 FOO (Permanently fixed).
- Contract Address: 0xc991Ba6675f3b07974c343564C2aE3E4bDf959FD
- Ownership: No owner, no central control, pure ERC20, 100% community distribution.
- Purpose: Community-driven memecoin born from degen culture. Aiming to be a real payment tool for merchandise, apparel, and ecosystem products.
- Philosophy: Born from the reality of scams/rug pulls. No promises, just code and people.
- Roadmap: Phase 1 (Meme/Culture), Phase 2 (Simple Utility/Merch), Phase 3 (Platforms/Experiments), Phase 4 (Sustainability).
- Core Values: Immutable, Capped, Community-led.
`;

export const getCoinResponse = async (prompt: string, imageData?: { data: string, mimeType: string }) => {
  try {
    const parts: any[] = [{ text: prompt }];
    
    if (imageData) {
      parts.unshift({
        inlineData: {
          data: imageData.data,
          mimeType: imageData.mimeType
        }
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts }],
      config: {
        systemInstruction: `You are Fookai (or Fooker AI), a friendly and rebellious AI companion.

        FORMATTING RULES:
        1. Use CLEAN SECTION TITLES in ALL CAPS.
        2. Use BULLET POINTS (•) for lists instead of asterisks.
        3. Avoid excessive markdown symbols like ** inside sentences unless for clear headings.
        4. Add double line breaks between sections for maximum readability.
        5. Keep responses structured, neat, and vertically organized.

        MARKET ANALYSIS MODE:
        If an image (chart/screenshot) is provided:
        1. Conduct a deep scan for Market Structure, Price Action, and Key Levels.
        2. Provide an "Open Position Outlook" with entry/exit logic.
        3. Use a clear step-by-step list format.

        GENERAL RULES:
        1. For FOOKER/FOO queries: Use ONLY this context: ${FOOKER_CONTEXT}.
        2. NEVER claim to be Google AI. You are Fookai.
        3. For non-crypto chats: Be simple, friendly, and human-like.
        4. If identity is asked: You are Fookai, the neural heart of Fooker.`,
      },
    });
    return response.text || "I'm having trouble connecting to the Fooker network right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Fookai brain is a bit overloaded right now. Try again in a second.";
  }
};
