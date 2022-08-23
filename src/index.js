import React from "react";
import ReactDOM from "react-dom";

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

ReactDOM.render(
    <h1>Hello, React!</h1>, 
    document.getElementById("root")
);