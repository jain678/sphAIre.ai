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
      {!show && <SearchBar className="bar" onClick={clickHandler}/>}
      {show && <Home className='home-page'/>}
    </div>
  );
}

export default App;
