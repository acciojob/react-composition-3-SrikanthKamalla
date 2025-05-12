import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltiptext">{text}</div>
    </div>
  );
};

export default Tooltip;
