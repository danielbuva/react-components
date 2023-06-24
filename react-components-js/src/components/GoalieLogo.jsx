import { useState } from "react";
import GoalieRed from "../assets/GoalieFullRed.svg";
import GoalieBlue from "../assets/GoalieFullBlue.svg";
import GoalieGreen from "../assets/GoalieFullGreen.svg";
import GoaliePink from "../assets/GoalieFullPink.svg";

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GoalieLogo = () => {
  const [index, setIndex] = useState(0);
  const colors = [GoalieRed, GoalieBlue, GoalieGreen, GoaliePink];

  return (
    <img
      alt="Goalie Logo"
      src={colors[index]}
      style={{
        cursor: "pointer",
        padding: "10px 2px 2px 2px",
        width: "42px",
      }}
      onClick={() => {
        setIndex(randomInt(0, 3));
      }}
    />
  );
};

export default GoalieLogo;
