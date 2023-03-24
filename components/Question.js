import React from "react";
function Question(props) {
  return (
    <div className="question-container">
      <h2 className="question">{props.text}</h2>
    </div>
  );
}

export default Question;
