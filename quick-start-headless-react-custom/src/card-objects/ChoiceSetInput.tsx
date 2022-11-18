import * as React from "react";
import * as AC from "adaptivecards";
import Select from "../components/Select";
import { reactDomRender } from "./shared";

export class ChoiceSetInput extends AC.ChoiceSetInput {
  static readonly JsonTypeName = "Input.ChoiceSet";

  private _renderedLabel?: string;
  private _value = "";
  public get value(): any {
    return this._value;
  }
  public isSet(): any {
    return this._value ? true : false;
  }

  protected handleChange(newValue) {
    this._value = newValue;
    this.validateValue();
  }

  // Override to hide label
  overrideInternalRender(): HTMLElement | undefined {
    this._renderedLabel = this.label;

    // Reset the label property temporarily so that
    // overrideInternalRender doesn't render a label
    this.label = undefined;
    const element = super.overrideInternalRender();

    // Restore the label property
    this.label = this._renderedLabel;
    return element;
  }

  // Render internal element
  internalRender(): HTMLElement {
    const element = reactDomRender(this.renderElement());
    element.style.width = "100%";
    return element;
  }

  private renderElement = (): JSX.Element => {
    return (
      <Select
        label={this._renderedLabel}
        required={this.isRequired}
        onChange={(e) => {
          return this.handleChange(e);
        }}
        items={this.choices}
      />
    );
  };
}
