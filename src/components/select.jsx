import React from "react";

function SelectCompo(props) {
  const { options, onChange, value, style, styleSelected } = props;

  const onChangeThis = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
      <select
        value={value}
        onChange={onChangeThis}
        style={style}
      >
        {options.map((option) => (
          <option
            key={option.key}
            value={option.value}
            style={value === option.value ? styleSelected : null}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCompo;
