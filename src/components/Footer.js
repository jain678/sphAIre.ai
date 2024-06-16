import React from "react";
import "./Footer.css";
import logo from "../assets/sphaire_ai_logo.jpeg";
import SearchBar from "./SearchBar";
import { ReactComponent as Refresh } from "../logos/refresh.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="search-bar">
        <Refresh className="refresh-icon"/>
        <SearchBar />
      </div>
      <div className="text">
        <p>Powered by sphaire.ai </p>
        <img src={logo} alt="Pic not found" />
        <p>sphAIre</p>
      </div>
    </div>
  );
}

export default Footer;
