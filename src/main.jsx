import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";
// import { ConterApp } from "./components/CounterApp";
// import { Hello } from "./Hello.jsx";
// import { InvoiceApp } from "./InvoiceApp";
import { CartApp } from "./CartApp";
import { UsersApp } from "./UsersApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <CartApp />
    </BrowserRouter> */}
    <UsersApp/>


  </React.StrictMode>
);
