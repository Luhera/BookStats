import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8B5E3C",
    },
    background: {
      default: "#ffffff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EAD3A2",
    },
    background: {
      default: "#121212",
    },
  },
});

export { lightTheme, darkTheme };
