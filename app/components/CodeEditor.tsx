"use client";
import React, { useEffect, useState } from "react";
import { Resizable, ResizeCallback } from "re-resizable";
import ReactAce from "react-ace";

//languages
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

//themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-cobalt";

import { initialCode, backgrounds } from "../utils";
import ResizeDots from "./ResizeDots";
import EditorHeader from "./EditorHeader";
import { log } from "console";

interface ICodeEditorProps {
  language: string;
  theme: string;
  fontSize: string;
  icon: string | undefined;
  background: string;
  padding: string;
}

const CodeEditor: React.FC<ICodeEditorProps> = ({
  language,
  theme,
  icon,
  fontSize,
  background,
  padding,
}) => {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState<number | null>(500);
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (newCode: string) => setCode(newCode);

  const handleResize: ResizeCallback = (_, __, ref) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => setWidth(window.innerWidth);

  useEffect(() => {
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const backgroundImage = /http/g.test(background) ? `url(${background})` : background;


  

  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{ width, height: height || 500 }}
      onResize={handleResize}
      className={`resize-container relative ${
        padding == "0rem" ? "rounded-[9px]" : ""
      }`}
      style={{ background: backgroundImage }}
    >
      <div style={{ padding }}>
        <ResizeDots />
        <EditorHeader language={language} icon={icon} />
        <ReactAce
          value={code}
          name="UNIQUE_ID_OF_DIV"
          fontSize={+fontSize}
          theme={theme}
          mode={language.toLocaleLowerCase()}
          showGutter={false}
          className="!w-full"
          wrapEnabled={true}
          height={`calc(${height}px - ${padding} - ${padding} - 48px)`}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          onChange={handleCodeChange}
        />
      </div>
    </Resizable>
  );
};

export default CodeEditor;
