import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
document.body.appendChild(rootDiv);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
