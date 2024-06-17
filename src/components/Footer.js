import React from "react";
import "./Footer.css";
// import logo from "../assets/sphaire_ai_logo.jpeg";
import SearchBar from "./SearchBar";
import { ReactComponent as Refresh } from "../logos/refresh.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="search-bar">
        <Refresh className="refresh-icon" />
        <SearchBar />
      </div>
      <div className="text">
        <p>Powered by sphaire.ai </p>
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F0847c238ea087b7b4030893c8c65e75f.cdn.bubble.io%2Ff1707364456330x362166065008557000%2FPicture14.png?w=48&h=48&auto=compress&dpr=1.25&fit=max"
          alt="Pic not found"
        />
        <p>sphAIre</p>
      </div>
    </div>
  );
}

export default Footer;
