import "./App.css";
import InputCompo from "./components/input";
import ButtonCompo from "./components/button";
import SelectCompo from "./components/select";
import TextareaCompo from "./components/textarea";

import { useState } from "react";

function App() {
  // const inputProps = {
  //   type: "text", //number,password
  //   name: "newName",
  //   placeholder: "'q'",
  //   autofocus: "true",
  //   textProps: "testtext",
  // };

  // const inputProps = {
  //   type: "number", //number,password
  //   name: "newName",
  //   placeholder: "'q'",
  //   autofocus: "true",
  //   textProps: 1,
  //   min: -1,
  //   max: 10,
  // };

  const propsInput = {
    type: "password", //number,password
    name: "newName",
    placeholder: "'q'",
    autofocus: "true",
    textProps: null,
    min: -1,
    max: 10,
  };

  const styleInput = {
    backgroundColor: "lightgray",
    borderRadius: "3px",
    padding: "8px",
    width: "200px",
  };

  const propsButton = {
    type: "button", //reset, submit
    name: "newButton",
    buttonText: "새버튼",
  };

  const styleButton = {
    backgroundColor: "black",
    color: "white",
  };
  const styleHoverButton = {
    backgroundColor: "white",
    color: "black",
  };
  const styleActiveButton = {
    backgroundColor: "red",
    color: "blue",
  };

  const [selectedOption, setSelectedOption] = useState("옵션1");

  const selectChange = (value) => {
    setSelectedOption(value);
  };
  const options = [
    { value: "옵션1", label: "옵션1라벨" },
    { value: "옵션2", label: "옵션2라벨" },
    { value: "옵션3", label: "옵션3라벨" },
  ];

  const styleSelect = {
    backgroundColor: "black",
    color: "white",
  };
  const styleSelected = {
    backgroundColor: "yellow",
    color: "black",
  };

  return (
    <div className="App">
      <InputCompo placeholder="'q'" />
      <InputCompo
        type={propsInput.type}
        name={propsInput.name}
        placeholder={propsInput.placeholder}
        autofocus={propsInput.autofocus}
        textProps={propsInput.textProps}
        min={propsInput.min}
        max={propsInput.max}
        style={styleInput}
      />

      <ButtonCompo
        type={propsButton.type}
        name={propsButton.name}
        buttonText={propsButton.buttonText}
        style={styleButton}
        styleHover={styleHoverButton}
        styleActive={styleActiveButton}
      />
      <SelectCompo
        options={options}
        onChange={selectChange}
        value={selectedOption}
        style={styleSelect}
        styleSelected={styleSelected}
      />
      <TextareaCompo />
    </div>
  );
}

export default App;
