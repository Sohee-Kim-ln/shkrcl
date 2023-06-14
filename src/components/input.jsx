import React from "react";
import { useState } from "react";

function input(props) {
  const [type, setType] = useState(props.type);
  const [text, setText] = useState(props.text);
  const [value, setValue] = useState(props.value);

  return (
    <div>
      <div></div>
    </div>
  );
}
