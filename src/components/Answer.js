import React from "react";
import './Answer.css'

function Answer(props) {
  return (
    <div>
      <h3>{props.question}</h3>
      <ul>
        <li>Customized AI: Tailored to specific industry needs and goals.</li>
        <li>
          Engagement Optimization: Enhances customer interactions for various
          sectors.
        </li>
        <li>
          Lead Generation: Drives potential leads through intelligent campaigns.
        </li>
        <li>
          Multi-Channel Integration: Works across digital, print, and offline
          touchpoints.
        </li>
      </ul>
    </div>
  );
}

export default Answer;
