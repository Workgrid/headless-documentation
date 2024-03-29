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
import Paper from '@mui/material/Paper'
import Fade from '@mui/material/Fade'

const Card = ({ card, onExecuteAction }) => {
  return (
    <Fade in={true} timeout={400}>
      <Paper
        elevation={3}
        sx={{
          padding: '5px',
          maxWidth: '500px',
          marginTop: '15px',
        }}
      >
        <AdaptiveCardUsingHostConfigContext payload={card} onExecuteAction={onExecuteAction} />
      </Paper>
    </Fade>
  )
}

export default Card
