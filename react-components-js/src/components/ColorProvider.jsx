import { ThemeContext } from "../hooks/useColorMode";
import { useState } from "react";

export function ColorProvider({ children }) {
  const [color, setColor] = useState("");
  const [theme, setTheme] = useState("light");

  const setToLightMode = () => {
    setTheme("light");
  };
  const setToDimMode = () => {
    setTheme("dim");
  };
  const setToBlackMode = () => {
    setTheme("black");
  };

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
        setToBlackMode,
        setToDimMode,
        setToLightMode,
        theme,
      }}
    >
      <div id={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
