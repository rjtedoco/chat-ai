"use client";
import { Textarea } from "@mantine/core";
import { useState } from "react";
import generateText from "../actions/generateText";

type ChatboxProps = {
  onEnter: (message: string) => void;
};
const Chatbox = (props: ChatboxProps) => {
  const { onEnter } = props;
  const [value, setValue] = useState("");

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      //await generateText(value);
      onEnter(value);
      setValue("");
    }
  };

  return (
    <Textarea
      label="Ask anything."
      description="Really. Anything. ANYTHING."
      placeholder="What's the best company in the world?"
      minRows={1}
      autosize
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Chatbox;
