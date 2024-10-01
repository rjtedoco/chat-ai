"use client";

import { Divider, Stack } from "@mantine/core";
import { useState } from "react";
import ChatHistory from "./ChatHistory";
import Chatbox from "./Chatbox";
import { generateText } from "../actions/generateText";
import { readStreamableValue, StreamableValue } from "ai/rsc";
import { Message } from "@/types/chat";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const readStream = async (output: StreamableValue<string, unknown>) => {
    for await (const delta of readStreamableValue(output)) {
      setMessages((prev) => {
        const updatedMessages = [...prev];
        const lastMessageIndex = updatedMessages.length - 1;
        updatedMessages[lastMessageIndex] = {
          ...updatedMessages[lastMessageIndex],
          content: updatedMessages[lastMessageIndex].content + delta,
        };
        return updatedMessages;
      });
    }
  };

  const handleSetMessages = async (message: Message) => {
    const newMessages = [
      ...messages,
      message,
      { role: "assistant", content: "" } as Message,
    ];
    const { output } = await generateText(newMessages);
    setMessages(newMessages);
    await readStream(output);
  };

  return (
    <Stack mx={"auto"} p={"lg"} maw={800} flex={1} h={"100vh"} justify="center">
      <ChatHistory messages={messages} />
      <Divider />
      <Chatbox onEnter={handleSetMessages} />
    </Stack>
  );
};

export default Chat;
