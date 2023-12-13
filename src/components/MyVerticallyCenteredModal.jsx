import React from 'react'
import Modal from 'react-bootstrap/Modal';
import ModalForm from './ModalForm';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ModalForm/>
    </Modal.Body>
    
  </Modal>
  )
}
