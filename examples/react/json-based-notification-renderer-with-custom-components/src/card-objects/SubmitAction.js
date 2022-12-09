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
import Button from '../components/Button'
import { reactDomRender } from './shared'

export class SubmitAction extends AC.SubmitAction {
  internalRenderedElement

  // Get the properites of the action
  static textProperty = new AC.StringProperty(AC.Versions.v1_0, 'text', true)

  static titleProperty = new AC.StringProperty(AC.Versions.v1_0, 'title', true)

  static dataProperty = new AC.PropertyDefinition(AC.Versions.v1_0, 'data')

  getTitle() {
    return this.getValue(SubmitAction.titleProperty)
  }

  getText() {
    return this.getValue(SubmitAction.textProperty)
  }

  getData() {
    return this.getValue(SubmitAction.dataProperty)
  }

  getInputs() {
    return this.getValue(SubmitAction.associatedInputsProperty)
  }

  get renderedElement() {
    return this.internalRenderedElement
  }

  render() {
    const element = reactDomRender(this.renderElement())
    this.internalRenderedElement = element
  }

  renderElement = () => {
    return (
      <Button
        color={mapToMuiColor(this.style)}
        variant={mapToMuiVariant(this.associatedInputs)}
        disabled={!this.isEnabled}
        label={this.title}
        onClick={(e) => {
          e.preventDefault()
          this.execute()
        }}
      />
    )
  }
}

const mapToMuiVariant = (associatedInputs) => {
  return associatedInputs === 'none' ? 'outlined' : 'contained'
}

const mapToMuiColor = (style) => {
  if (style === 'destructive') {
    return 'error'
  }
  if (style === 'positive') {
    return 'success'
  }
  return undefined
}
