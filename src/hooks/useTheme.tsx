import { useState } from "react";
import { createTheme } from "@mui/material";

function useTheme() {
  const [modeTheme, setModeTheme] = useState<"light" | "dark">("dark");

  const appTheme = createTheme({
    palette: {
      mode: modeTheme,
    },
  });

  const toggleTheme = () =>
    setModeTheme((prev) => (prev === "light" ? "dark" : "light"));

  return { modeTheme, appTheme, toggleTheme };
}

export default useTheme;
