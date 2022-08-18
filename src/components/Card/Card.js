import React from "react";
import person from "../../assets/person.png";

import "./card.scss";

function Card() {
  return (
    <div className="card">
      <img src={person} alt="person" />
      <p>Salvador Stewart Flynn Thomas Salva Salve...</p>
      <p>Leading specialist of the department of cent... </p>
      <a href="#">frontend_develop@gmail.com</a>
      <a href="#">+38 (098) 278 44 24</a>
    </div>
  );
}

export default Card;
