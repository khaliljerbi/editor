type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;

export const LANGUAGE_CONFIG: LanguageConfig = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" },
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Playground

console.log('Hello world !');`,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Playground
console.log('Hello world !');`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `# Python Playground

print("hello world !")`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    monacoLanguage: "go",
    defaultCode: `package main

import "fmt"

fmt.Println("Hello world !")
}`,
  },
  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    monacoLanguage: "rust",
    defaultCode: `// rust playground
    println!("Hello world !");
}`,
  },
  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    monacoLanguage: "csharp",
    defaultCode: `using System;
using System.Linq;

 Console.WriteLine("Hello world !");
       
    
`,
  },
};
