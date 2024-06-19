import React from "react";
import "./Content.css";
import Button from "./Button";

const questions = [
  "What does sphAIre.ai do?",
  "How sphAIre works across industries?",
  "Can I see it in action?",
  "How does sphAIre help startups?",
  "What are the key capabilities?",
  "How to set sphAIre for my website?",
  "How to get QR code for my campaigns?",
];

function Content(props) {
  return (
    <div className="content">
      <img
        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F0847c238ea087b7b4030893c8c65e75f.cdn.bubble.io%2Ff1712858061976x201604948258042200%2Ftestbanner.jpeg?w=768&h=407&auto=compress&dpr=1.25&fit=max"
        alt="Pic not found"
      />
      <ul className="question-list">
        <li>
          <div className="list">
            {questions.map((question) => {
              return <Button question={question} onButtonClick={props.onButtonClick}/>;
            })}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Content;
