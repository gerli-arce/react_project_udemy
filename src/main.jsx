import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
// import { ConterApp } from "./components/CounterApp";
// import { Hello } from "./Hello.jsx";
import { InvoiceApp } from "./InvoiceApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InvoiceApp />
  </React.StrictMode>
);
