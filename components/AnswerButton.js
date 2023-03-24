import React, { useState } from "react";

function AnswerButton(props) {
  const [showText, setShowText] = useState(false);

  const handleLeave = () => {
    setShowText(false);
  };

  const handleHover = (ans) => {
    setShowText(true);
    // props.onClick(props.text);
  };

  return (
    <button
      className="answer-button"
      // onClick={() => props.onClick(props.text)}
      onMouseEnter={handleHover}
      // onMouseLeave={handleLeave}
      style={{
        color: !showText ? "#000" : "#fff",
        backgroundColor: "#000",
      }}
    >
      {props.text}
    </button>
  );
}

export default AnswerButton;
