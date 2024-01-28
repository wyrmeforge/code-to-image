"use client";
import React from "react";
import { themes } from "../../utils";
import Dropdown from "../Dropdown";

interface IThemePickerProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemePicker: React.FC<IThemePickerProps> = ({ theme, setTheme }) => {
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <p className="py-2 text-sm font-medium">Theme</p>
      <Dropdown
        trigger={theme}
        menu={themes}
        onItemClick={handleThemeChange}
      />
    </div>
  );
};

export default ThemePicker;
