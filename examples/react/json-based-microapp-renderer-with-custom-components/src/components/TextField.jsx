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
import MuiTextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const TextField = (props) => {
  const { size = 'small', variant = 'outlined', onChange } = props

  const handleChange = (event) => {
    const newValue = event.target.value
    if (onChange) onChange(newValue)
  }

  return (
    <Box sx={{ marginTop: '10px' }}>
      <MuiTextField
        sx={{ width: '100%' }}
        {...props}
        size={size}
        variant={variant}
        onChange={handleChange}
        onBlur={handleChange}
      />
    </Box>
  )
}

export default TextField
