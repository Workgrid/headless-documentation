import * as React from "react";
import * as AC from "adaptivecards";
import SubmitButton from "../components/SubmitButton";
import { reactDomRender } from "./shared";

export class SubmitAction extends AC.SubmitAction {
  private internalRenderedElement: any;

  // Get the properites of the action
  static readonly textProperty = new AC.StringProperty(
    AC.Versions.v1_0,
    "text",
    true
  );

  static readonly titleProperty = new AC.StringProperty(
    AC.Versions.v1_0,
    "title",
    true
  );

  static readonly dataProperty = new AC.PropertyDefinition(
    AC.Versions.v1_0,
    "data"
  );

  getTitle(): string | undefined {
    return this.getValue(SubmitAction.titleProperty);
  }

  getText(): string | undefined {
    return this.getValue(SubmitAction.textProperty);
  }

  getData(): string | undefined {
    return this.getValue(SubmitAction.dataProperty);
  }

  getInputs(): any {
    return this.getValue(SubmitAction.associatedInputsProperty);
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
      <SubmitButton
        variant="contained"
        label={this.title}
        onClick={(e) => {
          e.preventDefault();
          this.execute();
        }}
      />
    );
  };
}
