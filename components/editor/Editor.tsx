"use client";

import MonacoEditor, { Monaco } from "@monaco-editor/react";
import { useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { useCodeEditorStore } from "@/lib/store";
import { LANGUAGE_CONFIG } from "@/lib/constants";
import Output from "./Output";

function Editor() {
  const { editor, setEditor, language } = useCodeEditorStore();

  useEffect(() => {
    if (editor) {
      const savedCode = localStorage.getItem(`editor-${language}`);
      const updatedCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;
      editor.setValue(updatedCode);
    }
  }, [editor, language]);

  const onMount = (editor: Monaco) => {
    setEditor(editor);
    editor.focus();
  };

  const handleChange = (value: string | undefined) => {
    if (value) localStorage.setItem(`editor-${language}`, value);
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border w-full"
    >
      <ResizablePanel defaultSize={50}>
        <div className="h-full ">
          <MonacoEditor
            height="100vh"
            language={language}
            defaultValue="// Write code here"
            theme="vs-dark" // by default, TODO add option to modify this
            onChange={handleChange}
            onMount={onMount}
            options={{
              minimap: { enabled: false },
              automaticLayout: true,
              scrollBeyondLastLine: false,
              padding: { top: 16, bottom: 16 },
              renderWhitespace: "selection",
              fontFamily: '"Fira Code", monospace',
              fontLigatures: true,
              cursorBlinking: "smooth",
              smoothScrolling: true,
              contextmenu: true,
              renderLineHighlight: "all",
              lineHeight: 1.6,
              fontSize: 16, // Todo add option to modify this
              letterSpacing: 0.5,
              roundedSelection: true,
            }}
          />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="h-full px-10 py-5">
          <Output />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Editor;
