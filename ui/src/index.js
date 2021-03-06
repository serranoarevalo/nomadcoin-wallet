import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./Components/App";
const { remote } = window.require("electron");

const sharedPort = remote.getGlobal("sharedPort");
window.sharedPort = sharedPort;

const theme = {
  titleColor: "#305371",
  boxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
