import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const InputComponent = ({
  type = "text",
  name,
  errorMessage,
  label,
  autofocus = false,
  onChange = () => {},
  value
}) => {
  const ref = useRef();
  const handleChange = (e) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };
  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);
  return (
    <>
      <input
        id={`input_${name}`}
        type={type}
        onChange={handleChange}
        ref={ref}
        value={value}
      />
      <label>{label}</label>
      {errorMessage && <span data-error={errorMessage}>{errorMessage}</span>}
    </>
  );
};
InputComponent.propTypes = {
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool
};
export default InputComponent;
