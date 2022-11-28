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
import Switch from '../components/Switch'
import { reactDomRender } from './shared'

export class ToggleInput extends AC.ToggleInput {
  static readonly JsonTypeName = 'Input.Toggle'

  private _value = 'false'
  public get value(): any {
    return this._value
  }
  public isSet(): any {
    return this._value ? true : false
  }
  protected handleChange(newValue) {
    this._value = newValue
  }

  render(): HTMLElement | undefined {
    return reactDomRender(this.renderElement())
  }

  private renderElement() {
    return <Switch label={this.title} tooltip={this.label} onChange={(e) => this.handleChange(e)} />
  }
}
