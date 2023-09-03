import React from "react";
import "./Alert.css";
import AlertIcon from '../alert.svg'

const Alert = (props) => {
  return (
    <div className="alert">
        <img src={AlertIcon} alt="Alert Icon" width={30} height={30} />
        <p>{props.description}</p>
    </div>
  );
};

export default Alert;
