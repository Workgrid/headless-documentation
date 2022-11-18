import * as React from "react";
import * as AC from "adaptivecards";
import TextField from "../components/TextField";
import { reactDomRender } from "./shared";

export class NumberInput extends AC.NumberInput {
  static readonly JsonTypeName = "Input.Number";

  private _value;
  public get value(): any {
    return this._value;
  }
  public set value(value) {
    this._value = value;
  }

  public isSet(): any {
    return this._value ? true : false;
  }

  private _renderedLabel?: string;

  protected handleChange(newValue) {
    this._value = newValue;
    return this.validateValue();
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
  internalRender(): HTMLElement | undefined {
    const element = reactDomRender(this.renderElement());
    element.style.width = "100%";
    return element;
  }

  private renderElement() {
    return (
      <TextField
        type="number"
        label={this._renderedLabel}
        required={this.isRequired}
        placeholder={this.placeholder}
        onChange={(e) => {
          return this.handleChange(e);
        }}
      />
    );
  }
}
