"use client";
import { Thread } from "@/components/assistant-ui/thread";
import { MyRuntimeProvider } from "@/lib/customRuntime";

export default function Home() {
  // const runtime = useChatRuntime({ api: "/api/chat" });
  
  return (
    <MyRuntimeProvider>
      {/* <main className="h-dvh grid grid-cols-[200px_1fr] gap-x-2 px-4 py-4"> */}
      <main className="h-dvh px-4 py-4">
        {/* <ThreadList /> */}
        <Thread />
      </main>
    </MyRuntimeProvider>
  );
}
