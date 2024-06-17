import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

const ModalOverlay = (props) => {
  return (
    <div className="home">
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

function Home() {
  return (
    <div >
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal-root")
      )}
    </div>
  );
}

export default Home;
