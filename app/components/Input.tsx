import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

interface IInputProps {
  value: string;
  setValue: (value: string) => void;
  maxValue: number;
  minValue: number;
}

const Input: React.FC<IInputProps> = ({
  value,
  setValue,
  maxValue,
  minValue,
}) => {
  const [previousValue, setPreviousValue] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onIncrease = () => {
    setValue(String(+value + 1));
  };

  const onDecrease = () => {
    setValue(String(+value - 1));
  };

  const handleBlur = () => {
    if (value === "") setValue(previousValue);
  };

  return (
    <div className="flex justify-between items-center">
      <FaMinusCircle
        onClick={onDecrease}
        className={`cursor-pointer ${
          +value > minValue ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <input
        onBlur={handleBlur}
        onFocus={() => setPreviousValue(value)}
        value={value}
        onChange={onChangeHandler}
        className="h-[37px] mx-2 text-center rounded-md border border-[#f9f9f9] border-opacity-10 w-10 !p-0 bg-transparent text-sm font-medium"
      />
      <FaPlusCircle
        onClick={onIncrease}
        className={`cursor-pointer ${
          +value < maxValue ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default Input;
