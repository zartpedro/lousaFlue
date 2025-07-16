import React from "react";
import ReactDOM from "react-dom/client";
import InteractiveWhiteboard from "./InteractiveWhiteboard";
import "./index.css";

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<InteractiveWhiteboard />);
}
