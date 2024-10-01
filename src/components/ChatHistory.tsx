"use client";
import { Message } from "@/types/chat";
import { ScrollArea, Text, useMantineTheme } from "@mantine/core";

type ChatHistoryProps = {
  messages: Message[];
};
const ChatHistory = (props: ChatHistoryProps) => {
  const { messages } = props;
  const theme = useMantineTheme();

  return (
    <ScrollArea mah={500} offsetScrollbars>
      {messages &&
        messages.map((message, index) => (
          <Text
            c={
              message.role === "assistant"
                ? theme.colors.blue[7]
                : theme.colors.dark[7]
            }
            ta={message.role === "assistant" ? "left" : "right"}
            key={index}
          >
            {message.content}
          </Text>
        ))}
    </ScrollArea>
  );
};

export default ChatHistory;
