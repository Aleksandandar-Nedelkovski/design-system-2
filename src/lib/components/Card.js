import React from "react";
import "./Card.css";


const Card = (props) => {
  const imageCard = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"

  return (
    <div className="card">
      <img
        alt={props.alt}
        src={imageCard}
        width={200}
      />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
