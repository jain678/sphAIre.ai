import React from "react";
import logo from "../assets/sphaire_ai_logo.jpeg";
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="Pic not found" />
      <h1>sphAIre Copilot</h1>
    </div>
  );
}

export default Header;
