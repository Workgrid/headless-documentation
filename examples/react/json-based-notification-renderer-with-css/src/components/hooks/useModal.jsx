import { useState } from 'react'

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [payload, setPayload] = useState(undefined)

  const handleOpenModal = (cardPayload) => {
    setIsOpen(true)
    setPayload(cardPayload)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    setPayload(undefined)
  }
  return [payload, isOpen, handleOpenModal, handleCloseModal]
}
