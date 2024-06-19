import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

function App() {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(true);
  };

  return (
    <div className="app">
      <div className="searchBar">
        {!show && <SearchBar className="bar" onClick={clickHandler} />}
        {show && <Home className="home-page" />}
      </div>
      <div className="box">
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F0847c238ea087b7b4030893c8c65e75f.cdn.bubble.io%2Ff1712858061976x201604948258042200%2Ftestbanner.jpeg?w=768&h=407&auto=compress&dpr=1.25&fit=max"
          alt="Pic not found"
        />
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F0847c238ea087b7b4030893c8c65e75f.cdn.bubble.io%2Ff1712858061976x201604948258042200%2Ftestbanner.jpeg?w=768&h=407&auto=compress&dpr=1.25&fit=max"
          alt="Pic not found"
        />
      </div>
    </div>
  );
}

export default App;
