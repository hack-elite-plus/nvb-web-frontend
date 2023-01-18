import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/router/Home";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: "#000",
    },
    ...(mode === "dark" && {
      background: {
        default: "#19042e",
        paper: "#18032d",
      },
      primary: {
        main: "#fff",
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
      },
    }),
  },
});

function App() {
  const [isSignInShow, setSignInShow] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home setSignInShow={setSignInShow} toggleColorMode={colorMode.toggleColorMode}/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
