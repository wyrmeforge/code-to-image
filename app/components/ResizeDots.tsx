import React from "react";

const ResizeDots = () => {
  const className =
    "absolute w-2 h-2 z-20 rounded-full bg-slate-300 hover:bg-slate-50 ";

  return (
    <>
      <div
        className={className + "handle handle-top left-1/2 -translate-x-1/2 -top-1"}
      ></div>
      <div className={className + "handle handle-bottom left-1/2 -bottom-1"}></div>
      <div className={className + "handle handle-left -left-1 top-1/2"}></div>
      <div className={className + "handle handle-right -right-1 top-1/2"}></div>
    </>
  );
};

export default ResizeDots;
