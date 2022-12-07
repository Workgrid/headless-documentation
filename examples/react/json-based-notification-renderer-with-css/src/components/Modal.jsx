import React from 'react'
import Modal from 'react-modal'

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '700px',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

export default function BasicModal({ open, handleClose, children }) {
  return (
    <Modal isOpen={open} onRequestClose={handleClose} style={modalStyle} contentLabel="Example Modal">
      {children}
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <button className="ac-pushButton" onClick={handleClose}>
          Close
        </button>
      </div>
    </Modal>
  )
}
