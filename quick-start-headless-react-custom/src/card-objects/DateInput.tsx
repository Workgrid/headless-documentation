import * as React from "react";
import * as AC from "adaptivecards";
import DatePicker from "../components/DatePicker";
import { reactDomRender } from "./shared";

export class DateInput extends AC.DateInput {
  static readonly JsonTypeName = "Input.Date";

  private _renderedLabel?: string;
  private _value;
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

  // Prevent AC label from displaying
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
      <DatePicker
        label={this._renderedLabel}
        required={this.isRequired}
        onChange={(e) => this.handleChange(e)}
      />
    );
  }
}
