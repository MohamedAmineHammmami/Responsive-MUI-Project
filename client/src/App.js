import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
    </Box>
  );
}

export default App;
