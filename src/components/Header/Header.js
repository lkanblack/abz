import React from "react";

import Button from "../Button/Button";

import logo from "../../assets/Logo.png";

import "./header.scss";
import "../../styles/style.scss";

function Header() {
  return (
    <header>
      <div className="container header">
        <img src={logo} alt="testtask" />
        <div className="header-btns">
          <Button text="Users" />
          <Button text="Sign up" />
        </div>
      </div>
    </header>
  );
}

export default Header;
