import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
// import { mockServer } from "./mock/server.ts";

if (process.env.NODE_ENV === "development") {
//   mockServer({ environment: "development" });
  console.log(process.env.NODE_ENV)
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
