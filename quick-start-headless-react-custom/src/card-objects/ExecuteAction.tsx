import * as React from "react";
import * as AC from "adaptivecards";
import Button from "../components/Button";
import { reactDomRender } from "./shared";

export class ExecuteAction extends AC.ExecuteAction {
  private internalRenderedElement: any;

  static readonly titleProperty = new AC.StringProperty(
    AC.Versions.v1_0,
    "title",
    true
  );

  getTitle(): string | undefined {
    return this.getValue(ExecuteAction.titleProperty);
  }

  get renderedElement(): HTMLElement | undefined {
    return this.internalRenderedElement;
  }

  render() {
    const element = reactDomRender(this.renderElement());
    this.internalRenderedElement = element;
  }

  private renderElement = (): JSX.Element => {
    return (
      <Button
        variant="outlined"
        label={this.getTitle()}
        onClick={() => this.execute()}
      />
    );
  };
}
