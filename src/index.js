import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./react-logo.png";

const rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
document.body.appendChild(rootDiv);

const page = (
    <div>
        <img src={reactLogo} width="40px" alt="react-logo"/>
        <h1> Fun facts about React </h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);