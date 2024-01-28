import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getExtension } from "../utils";

interface IEditorHeaderProps {
  language: string;
  icon: string | undefined;
}

const EditorHeader: React.FC<IEditorHeaderProps> = ({ language, icon }) => {
  const [title, setTitle] = useState("app");

  const [extension, setExtension] = useState(".py");

  useEffect(() => {
    setExtension(getExtension(language));
  }, [language]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value.split(".")[0]; // remove extension
    setTitle(newTitle);
  };

  return (
    <div className="rounded-t-lg h-12 px-4 flex items-center justify-between bg-white/40 backdrop-opacity-20 backdrop-blur-md">
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbc6a] "></div>
        <div className="w-3 h-3 rounded-full bg-[#67f772] "></div>
      </div>
      <div className="w-full">
        <input
          type="text"
          value={`${title}${extension}`}
          onChange={(e) => handleTitleChange(e)}
          className="w-full text-black/80 outline-none font-medium text-center bg-transparent leading-[1.8rem]"
        />
      </div>
      {icon && (
        <div className="flex justify-center items-center p-1 bg-[#191919] bg-opacity-100 rounded-md">
          <Image src={icon} width={33} height={33} alt="language icon" />
        </div>
      )}
    </div>
  );
};

export default EditorHeader;
