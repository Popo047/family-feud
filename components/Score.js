import React from "react";
function Score(props) {
  return (
    <div className="score-container">
      <h2>Score</h2>
      <div className="team-scores">{props.score}</div>
    </div>
  );
}

export default Score;
// {props.teams.map((team, index) => (
//     <div key={index} className="team-score">
//       <div>{team.name}</div>
//       <div>{team.score}</div>
//     </div>
//   ))}
