import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./react-logo.png";
import "./index.css";

const rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
document.body.appendChild(rootDiv);

function Header() {
  return (
    <header>
      <img src={reactLogo} width="50px" alt="react-logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item">Pricing</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1> Fun facts about React </h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div className="page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
