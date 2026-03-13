const { GoogleGenAI } =require( "@google/genai");

const ai = new GoogleGenAI({apiKey:"AIzaSyBxN9LIwD1JtDROfKyvNHITMSy0huh5_5I"});

async function main(promt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: promt,
    systemInstructions: `
    You are a code reviewer, who have expertise in development and code review, you will review the code and give feedback on it, you will also give suggestions to improve the code, you will also give a score for the code from 1 to 10, where 1 is the worst and 10 is the best, you will also give a summary of the code in one sentence.
    `,
  });
  console.log(response.text);
  return response.text;
}

module.exports = main