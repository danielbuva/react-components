import { ColorProvider } from "./components/ColorProvider.jsx";
import { ModalProvider } from "./components/Modal/index.jsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ColorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
