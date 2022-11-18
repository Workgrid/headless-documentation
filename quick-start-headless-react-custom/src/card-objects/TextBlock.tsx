import * as React from "react"
import * as AC from "adaptivecards";
import { reactDomRender } from "./shared";
import Typography from "@mui/material/Typography";

const fontMappings = [
  { type: "default", variant: "body2" },
  { type: "small", variant: "body1" },
  { type: "medium", variant: "subtitle1" },
  { type: "large", variant: "h6" },
  { type: "extraLarge", variant: "h5" }
];

export class TextBlock extends AC.TextBlock {
  static readonly JsonTypeName = "TextBlock";

  internalRender(): HTMLElement | undefined {
    const props = fontMappings[this.size] || fontMappings[0];
    return reactDomRender(this.renderElement(props));
  }

  private renderElement = (props): JSX.Element => {
    return <Typography variant={props.variant}>{this.text}</Typography>;
  };
}
