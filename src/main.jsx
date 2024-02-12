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
import { LoginPage } from "./auth/pages/LoginPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <CartApp />
    </BrowserRouter> */}
    <BrowserRouter>
      <UsersApp />
    </BrowserRouter>
    {/* <LoginPage/> */}
  </React.StrictMode>
);
