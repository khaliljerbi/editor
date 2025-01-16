import { useCodeEditorStore } from "@/lib/store";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

function RunCode() {
  const { runCode, isRunning } = useCodeEditorStore();
  return (
    <Button disabled={isRunning} onClick={runCode}>
      <Play /> Run code
    </Button>
  );
}

export default RunCode;
