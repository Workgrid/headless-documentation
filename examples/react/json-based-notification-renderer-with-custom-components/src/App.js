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
import { ExecuteAction } from './card-objects/ExecuteAction'
import { SubmitAction } from './card-objects/SubmitAction'
import { ShowCardAction } from './card-objects/ShowCardAction'
import { OpenUrlAction } from './card-objects/OpenUrlAction'
import { TextInput } from './card-objects/TextInput'
import { NumberInput } from './card-objects/NumberInput'
import { ChoiceSetInput } from './card-objects/ChoiceSetInput'
import { DateInput } from './card-objects/DateInput'
import { ToggleInput } from './card-objects/ToggleInput'

//import { TextBlock } from './card-objects/TextBlock'
import Notifications from './components/Notifications'

// Add custom components to the adaptive-cards registry
AC.GlobalRegistry.actions.register(SubmitAction.JsonTypeName, SubmitAction)
AC.GlobalRegistry.actions.register(ExecuteAction.JsonTypeName, ExecuteAction)
AC.GlobalRegistry.actions.register(ShowCardAction.JsonTypeName, ShowCardAction)
AC.GlobalRegistry.actions.register(OpenUrlAction.JsonTypeName, OpenUrlAction)
AC.GlobalRegistry.elements.register(TextInput.JsonTypeName, TextInput)
AC.GlobalRegistry.elements.register(NumberInput.JsonTypeName, NumberInput)
AC.GlobalRegistry.elements.register(ToggleInput.JsonTypeName, ToggleInput)
AC.GlobalRegistry.elements.register(DateInput.JsonTypeName, DateInput)
AC.GlobalRegistry.elements.register(ChoiceSetInput.JsonTypeName, ChoiceSetInput)
//AC.GlobalRegistry.elements.register(TextBlock.JsonTypeName, TextBlock)

export default function App() {
  return <Notifications />
}
