import React, { useState } from "react";
import "./Button.css";
import Header from "./Header";
import Footer from "./Footer";

function Button(props) {
  const [isClick, setIsClick] = useState(false);

  const clickHandler = () => {
    setIsClick(true);
  };
  return (
    <div>
      <button className= 'btn' onClick={clickHandler}><b>{props.question}</b></button>
      {isClick && <p>{"Content will be displayed"}</p>}
      {/* {isClick && <Footer />} */}
    </div>
  );
}

export default Button;
