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
import { reactDomRender } from './shared'
import Typography from '@mui/material/Typography'

// These are the mappings from the Adaptive Card element's size to a Material UI variant
// This helps ensure they text is sized appropriately by MUI
const fontMappings = [
  { type: 'default', variant: 'body2' },
  { type: 'small', variant: 'body1' },
  { type: 'medium', variant: 'subtitle1' },
  { type: 'large', variant: 'h6' },
  { type: 'extraLarge', variant: 'h5' },
]

export class TextBlock extends AC.TextBlock {
  static readonly JsonTypeName = 'TextBlock'

  internalRender(): HTMLElement | undefined {
    const props = fontMappings[this.size] || fontMappings[0] // The adaptive card size is actually an index rather than the descriptor (default, small, etc)
    return reactDomRender(this.renderElement(props))
  }

  private renderElement = (props): JSX.Element => {
    return <Typography variant={props.variant}>{this.text}</Typography>
  }
}
