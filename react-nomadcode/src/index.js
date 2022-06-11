import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./style.css";

//for AppCleanUp.js
import AppCleanUp from "./AppCleanUp";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppCleanUp />
  </React.StrictMode>
);
