import * as React from "react";
import * as AC from "adaptivecards";
import Switch from "../components/Switch";
import { reactDomRender } from "./shared";

export class ToggleInput extends AC.ToggleInput {
  static readonly JsonTypeName = "Input.Toggle";

  // For form submission
  private _value = "false";
  public get value(): any {
    return this._value;
  }
  public isSet(): any {
    return this._value ? true : false;
  }
  protected handleChange(newValue) {
    this._value = newValue;
  }

  render(): HTMLElement | undefined {
    return reactDomRender(this.renderElement());
  }

  private renderElement() {
    return (
      <Switch
        label={this.title}
        tooltip={this.label}
        onChange={(e) => this.handleChange(e)}
      />
    );
  }
}
