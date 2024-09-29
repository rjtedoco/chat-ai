"use server";

import OpenAI from "openai";
import "../../../envConfig";

const generateText = async (content: string) => {
  const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: content,
      },
    ],
  });

  console.log(completion.choices[0].message.content);
};

export default generateText;
