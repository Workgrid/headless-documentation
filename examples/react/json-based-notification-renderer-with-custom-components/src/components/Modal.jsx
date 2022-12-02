import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import Backdrop from '@mui/material/Backdrop'
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'

const modalStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' }

const boxStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  width: '700px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

const BasicModal = ({ open, handleClose, payload }) => {
  return (
    <Modal
      style={modalStyle}
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
        <Box sx={boxStyle}>
          <AdaptiveCardUsingHostConfigContext payload={payload} />
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Slide>
    </Modal>
  )
}
export default BasicModal
