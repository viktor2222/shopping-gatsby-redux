import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

export const CustomModal = ({ isOpen, children }) => (
  <>
    <Modal
      isOpen={isOpen}
    >
      { children }
    </Modal>
  </>
)