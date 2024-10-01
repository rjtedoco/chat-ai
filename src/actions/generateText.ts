"use server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import "../../envConfig";
import { Message } from "@/types/chat";

export async function generateText(messages: Message[]) {
  const stream = createStreamableValue("");

  console.log("messages inputted: ", messages);
  (async () => {
    const { textStream } = await streamText({
      model: openai("gpt-4o"),
      messages,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
