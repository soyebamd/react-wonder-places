import OpenAI from "openai";

const chooseAI = "openai"; // "openai" or "huggingface"

let AI_KEY;
let AI_MODEL;

if (chooseAI == "huggingface") {
  AI_KEY = new HfInference(import.meta.env.VITE_API_HF_KEY);
  AI_MODEL = import.meta.env.VITE_API_HF_MODEL;
} else if (chooseAI == "openai") {
  AI_KEY = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    baseURL: import.meta.env.VITE_API_URL,
    dangerouslyAllowBrowser: true,
  });

  AI_MODEL = import.meta.env.VITE_API_MODEL;
}

async function GetAIdata(prompt) {
  const prompMessage = [
    {
      role: "system",
      content:
        "Give details in 200 words. Include culture, tourism, and interesting facts.",
    },
    {
      role: "user",
      content: prompt,
    },
  ];

  try {
    let response;
    if (chooseAI == "openai") {
      response = await AI_KEY.chat.completions.create({
        model: AI_MODEL,
        messages: prompMessage,
        max_tokens: 1024,
      });
    } else if (chooseAI == "huggingface") {
      response = await AI_KEY.chatCompletion({
        model: AI_MODEL,
        messages: prompMessage,
        max_tokens: 1024,
      });
    }

    return response.choices[0].message.content;
  } catch (error) {
    return `${error} Failed to get AI response.`;
  }
}

export default GetAIdata;
