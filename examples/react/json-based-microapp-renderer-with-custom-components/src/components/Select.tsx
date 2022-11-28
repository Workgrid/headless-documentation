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
import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import MuiSelect from '@mui/material/Select'

const Select = (props) => {
  const { label, size = 'small', items = [], onChange, required } = props

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    if (onChange) onChange(newValue)
  }

  const itemsTemplate = items.map((item, idx) => (
    <MenuItem key={idx} value={item.value}>
      {item.title}
    </MenuItem>
  ))

  return (
    <Box sx={{ minWidth: 120, marginTop: '5px' }}>
      <FormControl fullWidth size={size}>
        {label ? (
          <InputLabel id="label-id" size={size} required={required}>
            {label}
          </InputLabel>
        ) : null}
        <MuiSelect
          {...props}
          labelId="label-id"
          size={size}
          value={value}
          onChange={handleChange}
          onBlur={handleChange}
        >
          {itemsTemplate}
        </MuiSelect>
      </FormControl>
    </Box>
  )
}
export default Select
