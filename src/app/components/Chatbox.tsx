"use client";
import { Textarea } from "@mantine/core";
import { useState } from "react";

const Chatbox = () => {
  const [value, setValue] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
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
