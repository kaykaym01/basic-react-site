import React from "react";
import reactLogo from "./react-logo.png";

export default function Header() {
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
