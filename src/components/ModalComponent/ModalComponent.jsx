import React from 'react';
import Modal from 'react-modal';
import css from './ModalComponent.module.css';

Modal.setAppElement('#root');

const ModalComponent = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      className={`${css.modalContent} ${css.modalOverlay}`}
      contentLabel="Confirm Deletion"
    >
      <h2 className={css.title}>Confirm Deletion</h2>
      <div className={css.question}>
        Are you sure you want to delete this contact?
      </div>
      <div className={css.modalFooter}>
        <button
          className={`${css.btn} ${css.btnSecondary}`}
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className={`${css.btn} ${css.btnDanger}`}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
