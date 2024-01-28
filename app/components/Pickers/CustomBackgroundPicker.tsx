"use client"
import React, { useRef } from "react";

interface ICustomBackgroundPickerProps {
  setBackground: (background: string) => void;
}

const CustomBackgroundPicker: React.FC<ICustomBackgroundPickerProps> = ({
  setBackground,
}) => {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const imageUrl = URL.createObjectURL(event.target.files[0]);

    setBackground(imageUrl);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    const inputElem = fileInputRef.current;
    if (!inputElem) return;

    inputElem.click();
  };

  return (
    <div>
      <p className="py-2 text-sm font-medium">Custom Background</p>
      <button
        className="flex items-center py-2 px-3 rounded-md text-sm border border-[#f9f9f9] border-opacity-10 font-medium 
        bg-opacity-10 hover:text-slate-50 hover:bg-[#2b2b2b] ease-in-out transition-all duration-300"
        onClick={handleClick}
      >
        Upload image
      </button>
      <input
        className="hidden"
        ref={fileInputRef}
        type="file"
        name="myImage"
        onChange={handleUpload}
      />
    </div>
  );
};

export default CustomBackgroundPicker;
