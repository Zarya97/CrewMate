import React from "react";

const DetailView = (props) => {
  let skillLevelOutput;
  
  if (props.skillLevel <= 10) {
    skillLevelOutput = (
      <div>
        <p>Skill Level: {props.skillLevel}</p>
        <p>Just Started</p>
      </div>
    );
  } else if (props.skillLevel <= 50) {
    skillLevelOutput = (
      <div>
        <p>Skill Level: {props.skillLevel}</p>
        <p>Intermediate Player</p>
      </div>
    );
  } else if (props.skillLevel <= 100) {
    skillLevelOutput = (
      <div>
        <p>Skill Level: {props.skillLevel}</p>
        <p>Pro Player</p>
      </div>
    );
  }
    else if (props.skillLevel <= 200) {
      skillLevelOutput = (
        <div>
          <p>Skill Level: {props.skillLevel}</p>
          <p>Unbeatable Player</p>
        </div>
    );
  }

  return (
    <div className="DetailView">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Color: {props.color}</p>
      {skillLevelOutput}
    </div>
  );
};

export default DetailView;
