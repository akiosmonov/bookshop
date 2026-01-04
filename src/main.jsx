import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RootContextProvider } from "./Context"; 


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RootContextProvider>
        <App />
      </RootContextProvider>
    </BrowserRouter>
  </StrictMode>
);
