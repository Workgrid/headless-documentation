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

import * as React from 'react'
import * as AC from 'adaptivecards'
import TextField from '../components/TextField'
import { reactDomRender } from './shared'

export class NumberInput extends AC.NumberInput {
  static readonly JsonTypeName = 'Input.Number'

  private _renderedLabel?: string
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

  // Override to hide label
  overrideInternalRender(): HTMLElement | undefined {
    this._renderedLabel = this.label

    // Reset the label property temporarily so that
    // overrideInternalRender doesn't render a label
    this.label = undefined
    const element = super.overrideInternalRender()
    // Restore the label property
    this.label = this._renderedLabel

    return element
  }

  // Render internal element
  internalRender(): HTMLElement | undefined {
    const element = reactDomRender(this.renderElement())
    element.style.width = '100%'
    return element
  }

  private renderElement() {
    return (
      <TextField
        type="number"
        label={this._renderedLabel}
        required={this.isRequired}
        placeholder={this.placeholder}
        onChange={(e) => {
          return this.handleChange(e)
        }}
      />
    )
  }
}
