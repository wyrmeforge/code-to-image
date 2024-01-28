"use client";
import { useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import LanguagePicker from "./components/Pickers/LanguagePicker";
import BackgroundPicker from "./components/Pickers/BackgroundPicker";
import ThemePicker from "./components/Pickers/ThemePicker";
import PaddingPicker from "./components/Pickers/PaddingPicker";
import {
  backgrounds,
  getIcon,
  imageDownload,
  languages,
  themes,
} from "./utils";
import CustomBackgroundPicker from "./components/Pickers/CustomBackgroundPicker";
import FontSizePicker from "./components/Pickers/FontSizePicker";
import { LuSquirrel } from "react-icons/lu";
import { BiDownload } from "react-icons/bi";

export default function Home() {
  const editorRef = useRef(null);

  const [language, setLanguage] = useState(languages[0]);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(getIcon(language));
  const [padding, setPadding] = useState("1");
  const [fontSize, setFontSize] = useState("14");

  const exportPng = async () => {
    const editorElem = editorRef.current;

    if (!editorElem) return;

    await imageDownload(editorElem);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-between ">
      <header
        className="mt-6 flex gap-6 w-[1040px] p-5 fixed top-0 left-1/2 -translate-x-1/2
         z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md hidden tablet:flex"
      >
        <LanguagePicker
          seActiveIcon={setActiveIcon}
          language={language}
          setLanguage={setLanguage}
        />
        <ThemePicker theme={theme} setTheme={setTheme} />
        <BackgroundPicker
          background={background}
          setBackground={setBackground}
        />
        <CustomBackgroundPicker setBackground={setBackground} />
        <PaddingPicker padding={padding} setPadding={setPadding} />
        <FontSizePicker fontSize={fontSize} setFontSize={setFontSize} />
        <div className="self-center ml-auto">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-blue-600 rounded-md text-sm text-blue-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
            onClick={exportPng}
          >
            <BiDownload className="text-[18px]" />
            Download
          </button>
        </div>
      </header>
      <div className="mt-[14rem] hidden tablet:block" ref={editorRef}>
        <CodeEditor
          fontSize={fontSize}
          language={language}
          icon={activeIcon}
          padding={padding + "rem"}
          theme={theme}
          background={background}
        />
      </div>
      <div className="flex items-center justify-center h-screen flex-col px-10 tablet:hidden">
        <h2 className="text-white/80 mb-10 text-center">
          Sorry, This website works only on desktop devices
        </h2>
        <LuSquirrel className="text-[40px]" />
      </div>
    </main>
  );
}
