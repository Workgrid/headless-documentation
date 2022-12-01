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

export class TextInput extends AC.TextInput {
  static JsonTypeName = 'Input.Text'
  internalRenderedElement

  _value
  get value() {
    return this._value
  }
  set value(value) {
    this._value = value
  }

  isSet() {
    return this._value ? true : false
  }

  handleChange(newValue) {
    this._value = newValue
    this.validateValue()
  }

  // Prevent AC label from displaying
  overrideInternalRender() {
    const element = super.overrideInternalRender()
    const label = element?.querySelector('label')
    if (label) label.remove()
    return element
  }

  internalRender() {
    const element = reactDomRender(this.renderElement())
    element.style.width = '100%'
    return element
  }

  get renderedElement() {
    return this.internalRenderedElement
  }

  renderElement() {
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
