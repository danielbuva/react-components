import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export function useColorMode() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "Theme.* component muse be rendered as a child of Tile component"
    );
  }
  return context;
}
