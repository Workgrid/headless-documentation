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
import SendIcon from '@mui/icons-material/Send'
import { reactDomRender } from './shared'

export class SubmitAction extends AC.SubmitAction {
  private internalRenderedElement: any

  // Get the properites of the action
  static readonly textProperty = new AC.StringProperty(AC.Versions.v1_0, 'text', true)

  static readonly titleProperty = new AC.StringProperty(AC.Versions.v1_0, 'title', true)

  static readonly dataProperty = new AC.PropertyDefinition(AC.Versions.v1_0, 'data')

  getTitle(): string | undefined {
    return this.getValue(SubmitAction.titleProperty)
  }

  getText(): string | undefined {
    return this.getValue(SubmitAction.textProperty)
  }

  getData(): string | undefined {
    return this.getValue(SubmitAction.dataProperty)
  }

  getInputs(): any {
    return this.getValue(SubmitAction.associatedInputsProperty)
  }

  get renderedElement(): HTMLElement | undefined {
    return this.internalRenderedElement
  }

  render() {
    const element = reactDomRender(this.renderElement())
    this.internalRenderedElement = element
  }

  private renderElement = (): JSX.Element => {
    return (
      <Button
        endIcon={<SendIcon />}
        variant="contained"
        label={this.title}
        onClick={(e) => {
          e.preventDefault()
          this.execute()
        }}
      />
    )
  }
}
