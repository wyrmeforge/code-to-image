"use client";
import React from "react";
import Input from "../Input";

interface IPaddingPickerProps {
  padding: string;
  setPadding: (padding: string) => void;
}

const PaddingPicker: React.FC<IPaddingPickerProps> = ({
  padding,
  setPadding,
}) => {
  return (
    <div>
      <p className="py-2 text-sm font-medium">Padding</p>
      <Input value={padding} setValue={setPadding} minValue={0} maxValue={10} />
    </div>
  );
};

export default PaddingPicker;
