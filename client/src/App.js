import React, { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Stack } from "@mui/material";

function App() {
  const [mode, setMode] = useState(false);
  const dark = createTheme({
    palette: { mode: "dark" },
  });
  const light = createTheme({
    palette: { mode: "light" },
  });
  return (
    <ThemeProvider theme={mode ? dark : light}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent={"center"}>
          <Sidebar mode={mode} modeFn={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
