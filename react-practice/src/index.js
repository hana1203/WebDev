import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import App2 from "./App2";
import Movie from "./Movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//for App2.js file
// root.render(
//   <React.StrictMode>
//     <App2 />
//   </React.StrictMode>
// );

//for Movie
root.render(
  <React.StrictMode>
    <Movie />
  </React.StrictMode>
);
