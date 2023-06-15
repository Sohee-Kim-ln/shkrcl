import React, { useState } from "react";

function ButtonCompo(props) {
  const { type, name, buttonText, style, styleHover, styleActive } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const onMouseDown = () => {
    setIsActive(true);
  };
  const onMouseUp = () => {
    setIsActive(false);
  };

  const styleThis = {
    ...style,
    backgroundColor: isActive
      ? styleActive.backgroundColor
      : isHovered
      ? styleHover.backgroundColor
      : style.backgroundColor,
    color: isActive
      ? styleActive.color
      : isHovered
      ? styleHover.color
      : style.color,
  };

  const onClick = (e) => {
    e.preventDefault();
    alert("클릭됨");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };

  return (
    <div>
      <button
        type={type}
        name={name}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onClick={onClick}
        style={styleThis}
        onKeyPress={onKeyPress}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ButtonCompo;
