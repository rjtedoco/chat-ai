"use client";
import { Stack, Text } from "@mantine/core";

type ChatHistoryProps = {
  messages: string[];
};
const ChatHistory = (props: ChatHistoryProps) => {
  const { messages } = props;

  return (
    <Stack>
      {messages &&
        messages.map((message, index) => <Text key={index}>{message}</Text>)}
    </Stack>
  );
};

export default ChatHistory;
