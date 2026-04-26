import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f766e",
      dark: "#115e59",
      light: "#14b8a6",
    },
    secondary: {
      main: "#f59e0b",
      dark: "#d97706",
    },
    background: {
      default: "#f0f4f3",
      paper: "#ffffff",
    },
    text: {
      primary: "#0d1a18",
      secondary: "#4b6360",
    },
    divider: "rgba(15,118,110,0.10)",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.055em",
      lineHeight: 0.96,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
      lineHeight: 1.05,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h6: {
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    body1: {
      letterSpacing: "-0.005em",
      lineHeight: 1.65,
    },
    body2: {
      letterSpacing: "-0.005em",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "0.78rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(15,118,110,0.10)",
        },
      },
    },
  },
});

export default theme;
