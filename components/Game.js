import React, { useState, useEffect } from "react";
import Question from "./Question";
import AnswerButton from "./AnswerButton";
import Score from "./Score";
import Timer from "./Timer";

function Game(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredAnswer, setAnsweredAnswer] = useState([]);
  const [timeUp, setTimeUp] = useState(false);

  const questions = props.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (ans) => {
    if (!answeredAnswer.includes(ans))
      setAnsweredAnswer([...answeredAnswer, ans]);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
  };

  const submitAnswerHandler = () => {
    if (currentQuestion.answers.includes(answeredAnswer)) {
      console.log("first");
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="game-container">
      <Question text={currentQuestion.question} />
      <div className="answer-buttons-container">
        {currentQuestion.answers.map((answer) => (
          <AnswerButton
            key={answer}
            text={answer}
            onClick={handleAnswerClick}
            disabled={timeUp}
          />
        ))}
      </div>
      <input type="text" onChange={(e) => setAnsweredAnswer(e.target.value)} />
      <input type="submit" onClick={submitAnswerHandler} />
      {/* {answeredAnswer.map((answer) => (
        // eslint-disable-next-line react/jsx-key
        <p>{answer}</p>
      ))} */}
      <div className="game-status-container">
        <Score score={0} />
        <Timer time={10} onTimeUp={handleTimeUp} />
      </div>
      <button className="answer-button" onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default Game;
