"use client";
import { ActionIcon, Group, Textarea } from "@mantine/core";
import { useState } from "react";

import { Message } from "@/types/chat";
import { IconSend } from "@tabler/icons-react";

type ChatboxProps = {
  onEnter: (message: Message) => void;
};
const Chatbox = (props: ChatboxProps) => {
  const { onEnter } = props;

  const [value, setValue] = useState<Message>();

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (value) {
      onEnter(value);
      setValue({
        role: "user",
        content: "",
      });
    }
  };

  return (
    <Group align="flex-end">
      <Textarea
        flex={1}
        label="Ask anything."
        description="Really. Anything. ANYTHING."
        placeholder="What's the best company in the world?"
        minRows={1}
        autosize
        value={value?.content}
        onChange={(event) =>
          setValue({ role: "user", content: event.currentTarget.value })
        }
        onKeyDown={handleKeyDown}
      />
      <ActionIcon size="lg" variant="outline" onClick={handleSend}>
        <IconSend />
      </ActionIcon>
    </Group>
  );
};

export default Chatbox;
