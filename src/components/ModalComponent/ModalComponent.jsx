import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import css from './ModalComponent.module.css';
const ModalComponent = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal show={show} dialogClassName={css.modalCustom} onHide={handleClose}>
      <Modal.Header closeButton className={css.modalHeaderCustom}>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>

      <Modal.Body className={css.modalBodyCustom}>
        Are you sure you want to delete this contact?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
