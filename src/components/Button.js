import React, { useState } from "react";
import "./Button.css";
import { ReactComponent as Search } from "../logos/search.svg";
 

function Button(props) {
  const [isClick, setIsClick] = useState(false);

  const clickHandler = () => {
    setIsClick(true);
  };
  return (
    <div>
      <button className= 'btn' onClick={clickHandler}>
      <Search className="search"/>
      <b>{props.question}</b>
      </button>
    </div>
  );
}

export default Button;
