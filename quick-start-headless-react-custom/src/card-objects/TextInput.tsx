import * as React from "react";
import * as AC from "adaptivecards";
import TextField from "../components/TextField";
import { reactDomRender } from "./shared";

export class TextInput extends AC.TextInput {
  static readonly JsonTypeName = "Input.Text";
  private internalRenderedElement: any;

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

  protected handleChange(newValue) {
    this._value = newValue;
    this.validateValue();
  }

  // Prevent AC label from displaying
  overrideInternalRender(): HTMLElement | undefined {
    const element = super.overrideInternalRender();
    const label = element?.querySelector("label");
    if (label) label.remove();
    return element;
  }

  internalRender(): HTMLElement | undefined {
    const element = reactDomRender(this.renderElement());
    element.style.width = "100%";
    return element;
  }

  get renderedElement(): HTMLElement {
    return this.internalRenderedElement;
  }

  private renderElement() {
    return (
      <TextField
        label={this.label}
        required={this.isRequired}
        placeholder={this.placeholder}
        multiline={this.isMultiline}
        rows={4}
        onChange={(e) => {
          return this.handleChange(e);
        }}
      />
    );
  }
}
