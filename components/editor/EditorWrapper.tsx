"use client";

import { ThemeSwitcher } from "../ThemeSwitcher";
import Editor from "./Editor";
import LanguageSelector from "./LanguageSelector";

import RunCode from "./RunCode";

function EditorWrapper() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-center gap-10 mt-2">
        <div className="flex gap-2">
          <LanguageSelector />
          <ThemeSwitcher />
        </div>
        <RunCode />
      </div>
      <Editor />
    </div>
  );
}

export default EditorWrapper;
