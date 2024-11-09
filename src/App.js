import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./Pages/Main";
import { lightTheme, darkTheme } from "./theme";
import { Button } from "@mui/material";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Button
        onClick={toggleTheme}
        variant="contained"
        style={{ position: "fixed", top: 10, right: 10 }}
      >
        Alternar tema
      </Button>
      <Main />
    </ThemeProvider>
  );
};

export default App;
