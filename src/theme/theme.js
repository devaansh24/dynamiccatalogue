import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f766e",
      dark: "#115e59",
    },
    secondary: {
      main: "#f59e0b",
      dark: "#d97706",
    },
    background: {
      default: "#eef3f1",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.05em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h6: {
      fontWeight: 700,
    },
  },
});

export default theme;
