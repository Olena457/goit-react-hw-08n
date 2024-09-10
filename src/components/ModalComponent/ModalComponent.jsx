// import React from 'react';
//

//
// const ModalComponent = ({ show, handleClose, handleDelete }) => {
//   return (
//     <>
//       <Modal show={show}  onHide={handleClose}>
//         <Modal.Header closeButton >
//           <Modal.Title>Confirm Deletion</Modal.Title>
//         </Modal.Header>

//         <Modal.Body >
//           Are you sure you want to delete this contact?
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default ModalComponent;
// ____________________________________________
// import React from 'react';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// Modal.setAppElement('#root');

// const ModalComponent = ({ show, handleClose, handleDelete }) => {
//   return (
//     <Modal
//       isOpen={show}
//       onRequestClose={handleClose}
//       style={customStyles}
//       contentLabel="Confirm Deletion"
//     >
//       <h2>Confirm Deletion</h2>
//       <div>Are you sure you want to delete this contact?</div>
//       <div>
//         <button onClick={handleClose}>Cancel</button>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </Modal>
//   );
// };

// export default ModalComponent;
// ___________________________________________________________
// import React from 'react';
// import Modal from 'react-modal';
// import css from './ModalComponent.module.css'; // Імпортуємо CSS-модуль

// const ModalComponent = ({ show, handleClose, handleDelete }) => {
//   return (
//     <Modal
//       isOpen={show}
//       onRequestClose={handleClose}
//       className={css.modalContent} // Використовуємо клас з CSS-модуля
//       contentLabel="Confirm Deletion"
//     >
//       <h2>Confirm Deletion</h2>
//       <div>Are you sure you want to delete this contact?</div>
//       <div className={css.modalFooter}>
//         <button
//           className={`${css.btn} ${css.btnSecondary}`}
//           onClick={handleClose}
//         >
//           Cancel
//         </button>
//         <button
//           className={`${css.btn} ${css.btnDanger}`}
//           onClick={handleDelete}
//         >
//           Delete
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default ModalComponent;
import React from 'react';
import Modal from 'react-modal';
import css from './ModalComponent.module.css'; // Імпортуємо CSS-модуль

Modal.setAppElement('#root');

const ModalComponent = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      className={`${css.modalContent} ${css.modalOverlay}`}
      contentLabel="Confirm Deletion"
      // Використовуємо клас з CSS-модуля для модального вікна
      // Використовуємо клас з CSS-модуля для бекдропу
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
