import React from "react";
// import person from "../../assets/person.png";

import "./card.scss";

function Card({ img, name, position, email, phone }) {
  return (
    <div className="card">
      <img src={img} alt="person" />
      <p>{name}</p>
      <p>{position}</p>
      <a href="#">{email}</a>
      <a href="#">{phone}</a>
    </div>
  );
}

export default Card;
