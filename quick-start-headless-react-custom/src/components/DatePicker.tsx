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
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import * as MuiXDatePickers from '@mui/x-date-pickers/DatePicker'
import Box from '@mui/material/Box'

const MuiDatePicker = MuiXDatePickers.DatePicker

const DatePicker = (props) => {
  const { onChange, required, label } = props
  const [value, setValue] = useState(null)

  const handleNewValue = (newValue) => {
    setValue(newValue)
    if (onChange) onChange(newValue)
  }

  const handleOnChange = (newValue) => {
    let value = newValue
    try {
      value = newValue.toISOString()
    } catch (e) {
      console.log(e)
    }
    handleNewValue(value ? value : null)
  }

  const handleOnBlur = (e) => {
    handleNewValue(e.target.value)
  }

  return (
    <Box sx={{ marginTop: '10px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          value={value}
          onChange={handleOnChange}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label={label}
                error={false}
                onBlur={handleOnBlur}
                required={required}
                size="small"
              />
            )
          }}
        />
      </LocalizationProvider>
    </Box>
  )
}
export default DatePicker
