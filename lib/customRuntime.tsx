"use client";

import type { ReactNode } from "react";
import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  type ChatModelAdapter,
} from "@assistant-ui/react";

export const MyModelAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
    const result = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_HOST +
        "/api/v1/stream?query=" +
        (messages[messages.length - 1].content[0] as { text: string }).text,
      {
        signal: abortSignal,
      }
    );

    const data = await result.text();
    return {
      content: [
        {
          type: "text",
          text: data,
        },
      ],
    };
  },
};

export function MyRuntimeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const runtime = useLocalRuntime(MyModelAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
