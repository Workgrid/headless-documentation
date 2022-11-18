import React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const ThemedElement = (element: React.ReactElement) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export const reactDomRender = (
  reactElement: React.ReactElement
): HTMLElement => {
  const div = document.createElement("div");
  const themedElement = ThemedElement(reactElement);
  ReactDOM.render(themedElement, div);
  return div;
};
