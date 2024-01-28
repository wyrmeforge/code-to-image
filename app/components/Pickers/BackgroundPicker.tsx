"use client";
import React from "react";
import { backgrounds } from "../../utils";
import Dropdown from "../Dropdown";

interface IBackgroundPickerProps {
  background: string;
  setBackground: (background: string) => void;
}

const BackgroundPicker: React.FC<IBackgroundPickerProps> = ({
  background,
  setBackground,
}) => {
  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
  };

  return (
    <div>
      <p className="py-2 text-sm font-medium">Background</p>
      <Dropdown
        trigger={
          <div
            className="rounded-sm w-[70%] h-[20px] !p-1"
            style={{ background }}
          ></div>
        }
        menuRenderer={(background) => (
          <div
            className="w-[40px] transition-all duration-200 ease-in-out group-hover:w-full h-[20px] rounded-sm"
            style={{ background }}
          ></div>
        )}
        menuClassName="rounded-full flex flex-col gap-2 !p-2"
        itemClassName="group "
        menu={backgrounds}
        onItemClick={handleBackgroundChange}
      />
    </div>
  );
};

export default BackgroundPicker;
