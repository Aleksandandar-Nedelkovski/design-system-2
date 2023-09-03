import React from "react";
import "./Alert.css";
import InfoIcon from '../icon-info.svg'

const Alert = (props) => {
  return (
    <div className="alert">
        <img className="info-icon" src={InfoIcon} alt="Info Icon" width={30} height={30} />
        <p>{props.description}</p>
    </div>
  );
};

export default Alert;
