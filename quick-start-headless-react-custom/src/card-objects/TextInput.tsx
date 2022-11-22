/**
 * Copyright 2022 Workgrid Software
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import * as AC from 'adaptivecards'
import TextField from '../components/TextField'
import { reactDomRender } from './shared'

export class TextInput extends AC.TextInput {
  static readonly JsonTypeName = 'Input.Text'
  private internalRenderedElement: any

  private _value
  public get value(): any {
    return this._value
  }
  public set value(value) {
    this._value = value
  }

  public isSet(): any {
    return this._value ? true : false
  }

  protected handleChange(newValue) {
    this._value = newValue
    this.validateValue()
  }

  // Prevent AC label from displaying
  overrideInternalRender(): HTMLElement | undefined {
    const element = super.overrideInternalRender()
    const label = element?.querySelector('label')
    if (label) label.remove()
    return element
  }

  internalRender(): HTMLElement | undefined {
    const element = reactDomRender(this.renderElement())
    element.style.width = '100%'
    return element
  }

  get renderedElement(): HTMLElement {
    return this.internalRenderedElement
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
          return this.handleChange(e)
        }}
      />
    )
  }
}
