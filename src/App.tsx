import { Home } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
