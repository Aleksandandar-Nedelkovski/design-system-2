import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button className="primary-button">{props.label}</button>;
};

export default Button;
