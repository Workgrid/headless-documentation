import React from 'react'
import Modal from 'react-modal'
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '500px',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

export default function BasicModal({ open, handleClose, payload }) {
  return (
    <div>
      {payload && (
        <Modal isOpen={open} onRequestClose={handleClose} style={modalStyle} contentLabel="Example Modal">
          <AdaptiveCardUsingHostConfigContext payload={payload} />
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <button className="ac-pushButton" onClick={handleClose}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
