import React, { useState } from "react";
import OutsideClickHandler from "./OutsideClickHandler";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

interface IDropdownProps {
  itemClassName?: string;
  menuClassName?: string;
  trigger: string | React.ReactElement;
  menu: string[];
  menuRenderer?: (item: string) => React.JSX.Element;
  onItemClick: (menuItem: string) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({
  trigger,
  onItemClick,
  menuRenderer,
  menuClassName,
  itemClassName,
  menu,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onItemClickHandler = (menuItem: string) => {
    onItemClick(menuItem);
    setOpen(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <div
        onClick={handleOpen}
        className="p-2 h-9 rounded-md border border-[#f9f9f9] border-opacity-10 text-sm flex items-center justify-between cursor-pointer 
        capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out"
      >
        {typeof trigger === "string" ? (
          <>{trigger}</>
        ) : (
          React.cloneElement(trigger, { onClick: handleOpen })
        )}
        {open ? <FaCircleChevronUp /> : <FaCircleChevronDown />}
      </div>
      {open ? (
        <ul
          className={`p-2 absolute bg-[#191919] border border-[#f9f9f9] border-opacity-10 rounded-md w-[120px] top-[94px] ${
            menuClassName ? menuClassName : ""
          }`}
        >
          {menu.map((menuItem: string, index: number) => (
            <li
              onClick={() => onItemClickHandler(menuItem)}
              key={index}
              className={`capitalize text-[14px] hover:bg-[#2b2b2b] pl-1 hover:rounded-md hover:bg-opacity-80 py-1 text-left hover:text-slate-50 transition-all duration-300 ease-in-out hover:cursor-pointer ${
                itemClassName ? itemClassName : ""
              }`}
            >
              {menuRenderer ? menuRenderer(menuItem) : menuItem}
            </li>
          ))}
        </ul>
      ) : null}
    </OutsideClickHandler>
  );
};

export default Dropdown;
