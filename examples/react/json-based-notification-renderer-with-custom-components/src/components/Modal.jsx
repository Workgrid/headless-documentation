import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Backdrop from '@mui/material/Backdrop'
import CloseIcon from '@mui/icons-material/Close'
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'

const BasicModal = ({ open, handleClose, payload }) => {
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
          <AdaptiveCardUsingHostConfigContext payload={payload} />
        </Box>
      </Slide>
    </Modal>
  )
}
export default BasicModal
