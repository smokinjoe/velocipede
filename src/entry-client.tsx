import "./client/index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { AppContainer } from "./client/AppContainer";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
