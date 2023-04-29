import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MyContextProvider } from "./Components/Context";
import { AuthProvider } from "./Components/AuthContext";


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
  <MyContextProvider>
      <App />
  </MyContextProvider>
    </AuthProvider>
);
