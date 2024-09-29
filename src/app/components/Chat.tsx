"use client";

import { Stack } from "@mantine/core";
import { useState } from "react";
import ChatHistory from "./ChatHistory";
import Chatbox from "./Chatbox";
import generateText from "../actions/generateText";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSetMessages = async (message: string) => {
    setMessages((prev) => [...prev, message]);

    const reply = await generateText(message);

    setMessages((prev) => [...prev, reply]);
  };

  return (
    <Stack>
      <ChatHistory messages={messages} />
      <Chatbox onEnter={handleSetMessages} />
    </Stack>
  );
};

export default Chat;
