import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="custom-image" src={props.image} />
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
    </div>
  );
};

export default Card
