import React, { useState, useEffect } from "react";

function Timer(props) {
  const [secondsLeft, setSecondsLeft] = useState(props.time);

  useEffect(() => {
    if (secondsLeft > 0) {
      const intervalId = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      props.onTimeUp();
    }
  }, [secondsLeft, props]);

  return (
    <div className="timer-container">
      <h2>Time Left: {secondsLeft}s</h2>
    </div>
  );
}

export default Timer;
