import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { AppContainer } from "./client/AppContainer";

export function render() {
  const html = renderToString(
    <StrictMode>
      <AppContainer />
    </StrictMode>
  );
  return { html };
}
