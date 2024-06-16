import React from "react";
import image from "../assets/sphaireAi.jpeg";
import "./Content.css";
// import Header from "./Header"

const questions = [
  "What does sphAIre.ai do?",
  "How sphAIre works across industries?",
  "Can I see it in action?",
  "How does sphAIre help startups?",
  "What are the key capabilities?",
  "How to set sphAIre for my website?",
  "How to get QR code for my campaigns?",
];

function Content() {
  return (
    <div className="content">
      {/* <Header /> */}
      <img src={image} alt="Pic not found" />
      <div className="btn">
        <ul className="question-list">
          <li>
            <button>What does sphAIre.ai do?</button>
          </li>
          <li>
            <button>How sphAIre works across industries?</button>
          </li>
          <li>
            <button>Can I see it in action?</button>
          </li>
          <li>
            <button>How does sphAIre help startups?</button>
          </li>
          <li>
            <button>What are the key capabilities?</button>
          </li>
          <li>
            <button>How to set sphAIre for my website?</button>
          </li>
          <li>
            <button>How to get QR code for my campaigns?</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
