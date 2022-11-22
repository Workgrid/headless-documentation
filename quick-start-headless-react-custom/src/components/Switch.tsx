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

import React from 'react'
import { useState } from 'react'
import MuiSwitch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

const Switch = (props) => {
  const { onChange, tooltip } = props
  const [value, setValue] = useState('false')

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    if (onChange) onChange(newValue)
  }

  return (
    <Box sx={{ marginTop: '5px' }}>
      <FormControlLabel
        {...props}
        labelPlacement="start"
        control={
          <Tooltip title={tooltip}>
            <MuiSwitch color="primary" value={value} onChange={handleChange} />
          </Tooltip>
        }
      />
    </Box>
  )
}

export default Switch
