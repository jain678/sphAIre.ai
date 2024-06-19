import React, { useState } from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Answer from "./Answer";
import "./Home.css";

const ModalOverlay = (props) => {
  const [question, setQuestion] = useState("");
  const [flag, setFlag] = useState(true);

  const buttonClickHandler = (value, ques) => {
    setFlag(value);
    setQuestion(ques);
  };
  return (
    <div className="home">
      <div className="container">
        <Header />
        {flag && <Content onButtonClick={buttonClickHandler} />}
        {!flag && <Answer question={question} />}
        <Footer />
      </div>
    </div>
  );
};

function Home() {
  return (
    <div>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal-root")
      )}
    </div>
  );
}

export default Home;
