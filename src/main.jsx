import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Hello } from "./Hello.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hello
      user={{ name: "Juan", lastname: "Perez" }}
      head={"el lovo"}
      title="titulo"
    />
  </React.StrictMode>
);
