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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grow from '@mui/material/Grow'
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'

export default function Notification({ node, showCardHandler }) {
  const handleOnExecuteAction = (e) => {
    if (e._propertyBag.type === 'Action.ShowCard') {
      const card = JSON.parse(JSON.stringify(e.card))
      showCardHandler(card)
    }
  }

  if (!node.view) return <div></div>
  return (
    <Grow in={true} timeout={300}>
      <Card sx={{ maxWidth: '400px', margin: '15px' }}>
        <CardContent>
          <AdaptiveCardUsingHostConfigContext payload={node.view} onExecuteAction={handleOnExecuteAction} />
        </CardContent>
      </Card>
    </Grow>
  )
}
