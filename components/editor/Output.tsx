import { useCodeEditorStore } from "@/lib/store";
import { AlertTriangle, CheckCircle } from "lucide-react";

function Output() {
  const { error, output } = useCodeEditorStore();
  const handleOutput = (error: string | null, output: string) => {
    if (error) {
      return (
        <div className="flex items-start gap-3 text-red-400">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <div className="font-medium">Execution Error</div>
            <pre className="whitespace-pre-wrap text-red-400/50">{error}</pre>
          </div>
        </div>
      );
    }

    if (output) {
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 mb-3">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Execution Successful</span>
          </div>
          <pre className="whitespace-pre-wrap text-black dark:text-muted-foreground">
            {output}
          </pre>
        </div>
      );
    }

    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-500">
        <p className="text-center">Run your code to see the output here...</p>
      </div>
    );
  };
  return <section>{handleOutput(error, output)}</section>;
}

export default Output;
