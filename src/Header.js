import React from "react";
import reactLogo from "./react-logo.png";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <div className="logo-div">
          <img src={reactLogo} alt="react-logo" className="logo" />
        </div>
        <p className="title">ReactFacts</p>
      </div>
      <div className="header-right">
        <p className="section-title">React Course - Project 1</p>
      </div>
    </header>
  );
}
