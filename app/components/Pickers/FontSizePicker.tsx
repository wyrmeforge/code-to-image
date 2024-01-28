"use client"
import React from "react";
import Input from "../Input";

interface IFontSizePickerProps {
  fontSize: string;
  setFontSize: (fontSize: string) => void;
}

const FontSizePicker: React.FC<IFontSizePickerProps> = ({
  fontSize,
  setFontSize,
}) => {
  return (
    <div>
      <p className="py-2 text-sm font-medium">Font Size</p>
      <Input minValue={12} maxValue={21} value={fontSize} setValue={setFontSize} />
    </div>
  );
};

export default FontSizePicker;
