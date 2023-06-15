import React, { useState } from "react";

function InputCompo(props) {
  const {
    type,
    name,
    placeholder = "",
    autofocus = `false`,
    textProps,
    min,
    max,
    style,
  } = props;
  const [text, setText] = useState(textProps);

  // const placeholder = props.placeholder === null ? "" : props.placeholder;
  // if (textProps !== null) {
  //   setText(textProps);
  // }
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autofocus={autofocus}
        value={text}
        min={type === "number" ? min : undefined}
        max={type === "number" ? max : undefined}
        style={style}
        onChange={onChange}
      ></input>
      {text}
    </div>
  );
}

export default InputCompo;
