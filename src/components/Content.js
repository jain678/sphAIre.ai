import React from "react";
// import image from "../assets/sphaireAi.jpeg";
import "./Content.css";
import Button from "./Button";
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
    <ul className="question-list">
      <li>
        <div className="list">
          {questions.map((question) => {
            return <Button question={question} />;
          })}
        </div>
      </li>

      {/* <li className="list">
        <button>What does sphAIre.ai do?</button>
      </li>
      <li className="list">
        <button>How sphAIre works across industries?</button>
      </li>
      <li className="list">
        <button>Can I see it in action?</button>
      </li>
      <li className="list">
        <button>How does sphAIre help startups?</button>
      </li>
      <li className="list">
        <button>What are the key capabilities?</button>
      </li>
      <li className="list">
        <button>How to set sphAIre for my website?</button>
      </li>
      <li className="list">
        <button>How to get QR code for my campaigns?</button>
      </li> */}
    </ul>
  );
}

export default Content;
