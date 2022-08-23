import React from "react";
import "./button.scss";

function Button({ disabled, text }) {
  return <button disabled={disabled}>{text}</button>;
}

export default Button;
