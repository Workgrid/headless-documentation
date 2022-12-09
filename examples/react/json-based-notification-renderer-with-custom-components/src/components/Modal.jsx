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
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Backdrop from '@mui/material/Backdrop'
import CloseIcon from '@mui/icons-material/Close'

const BasicModal = ({ open, handleClose, children }) => {
  return (
    <Modal
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide in={open} direction="up">
        <Box
          sx={{
            justifyContent: 'center',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            paddingBottom: '100px',
            borderRadius: '5px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          {children}
        </Box>
      </Slide>
    </Modal>
  )
}
export default BasicModal
