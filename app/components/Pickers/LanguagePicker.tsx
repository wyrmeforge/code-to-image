"use client";
import React from "react";
import { getIcon, languages } from "../../utils";
import Dropdown from "../Dropdown";

interface ILanguagePickerProps {
  language: string;
  setLanguage: (language: string) => void;
  seActiveIcon: (icon: string) => void;
}

const LanguagePicker: React.FC<ILanguagePickerProps> = ({
  language,
  setLanguage,
  seActiveIcon,
}) => {
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);

    const newActiveIcon = getIcon(newLanguage);

    if (newActiveIcon) {
      seActiveIcon(newActiveIcon);
    }
  };

  return (
    <div>
      <p className="py-2 text-sm font-medium">Language</p>
      <Dropdown
        trigger={language}
        menu={languages}
        onItemClick={handleLanguageChange}
      />
    </div>
  );
};

export default LanguagePicker;
