import { Monaco } from "@monaco-editor/react";

export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

export interface CodeEditorState {
  language: string;
  output: string;
  isRunning: boolean;
  error: string | null;
  editor: Monaco | null;

  setEditor: (editor: Monaco) => void;
  getCode: () => string;
  setLanguage: (language: string) => void;

  runCode: () => Promise<void>;
}
