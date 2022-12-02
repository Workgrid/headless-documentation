import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '700px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

const BasicModal = ({ open, handleClose, payload }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AdaptiveCardUsingHostConfigContext payload={payload} />
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
export default BasicModal
