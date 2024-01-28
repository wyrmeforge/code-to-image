import React from "react";
import { useOutsideClickHandler } from "../hooks/useOutsideClickHandler";

interface IOutsideClickHandlerProps {
  onOutsideClick: () => void;
  onClick?: () => void;
  children: React.ReactNode;
}

const OutsideClickHandler: React.FC<IOutsideClickHandlerProps> = ({
  onOutsideClick,
  onClick,
  children,
}) => {
  const ref = useOutsideClickHandler(onOutsideClick);

  return (
    <div onClick={onClick} ref={ref}>
      {children}
    </div>
  );
};

export default OutsideClickHandler;
