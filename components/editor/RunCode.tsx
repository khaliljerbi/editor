import React from "react";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { useCodeEditorStore } from "@/lib/store";

function RunCode() {
  const { runCode, isRunning } = useCodeEditorStore();
  return (
    <Button disabled={isRunning} onClick={runCode}>
      <Play /> Run code
    </Button>
  );
}

export default RunCode;
