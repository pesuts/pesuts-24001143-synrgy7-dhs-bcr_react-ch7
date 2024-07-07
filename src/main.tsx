import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CarsProvider from "./contexts/CarsContext.tsx";
// import "@/assets/css/owl.carousel.min.css";
// import "@/assets/css/owl.theme.default.min.css";
// import "@/assets/css/owl.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CarsProvider>
      <App />
    </CarsProvider>
  </React.StrictMode>
);
