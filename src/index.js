import React from "react";
import ReactDOM from "react-dom/client";

const rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello, React!</h1>);