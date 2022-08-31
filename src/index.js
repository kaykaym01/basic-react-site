import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
document.body.appendChild(rootDiv);

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
