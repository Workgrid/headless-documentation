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
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'

export default function Notification({ node }) {
  // Handle action for execute button
  const onExecuteAction = (e) => {
    if (e._propertyBag.type === 'Action.ShowCard') {
      // TODO: Modal
    }
  }

  return (
    <AdaptiveCardUsingHostConfigContext
      style={{
        width: '400px',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 5px 0px',
        margin: '15px 0',
      }}
      payload={node.view}
      onExecuteAction={onExecuteAction}
    />
  )
}
