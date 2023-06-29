import { useState } from "react";
import GoalieRed from "../assets/GoalieFullRed.svg";
import GoalieBlue from "../assets/GoalieFullBlue.svg";
import GoalieGreen from "../assets/GoalieFullGreen.svg";
import GoaliePink from "../assets/GoalieFullPink.svg";
import { NavLink } from "react-router-dom";

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GoalieLogo = () => {
  const [index, setIndex] = useState(
    parseInt(localStorage.getItem("logo")) ?? 0
  );
  const colors = [GoalieRed, GoalieBlue, GoalieGreen, GoaliePink];
  const onClick = () => {
    const randomIndex = randomInt(0, 3);
    setIndex(randomIndex);
    localStorage.setItem("logo", randomIndex.toString());
  };

  return (
    <NavLink to="/">
      <img
        alt="Goalie Logo"
        src={colors[index]}
        onClick={onClick}
        id="goalie"
      />
    </NavLink>
  );
};

export default GoalieLogo;
