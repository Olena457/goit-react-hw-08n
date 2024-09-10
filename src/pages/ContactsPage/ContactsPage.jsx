// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import ContactForm from '../../components/ContactForm/ContactForm.jsx';
// import { getAllContactsOperation } from './../../store/contacts/operationsContact.js';
// import ContactsList from './../../components/ContactsList/ContactsList.jsx';
// import Loading from './../../components/Loading/Loading.jsx';
// import css from './ContactsPage.module.css';
// import { selectLoading } from '../../store/contacts/selectorsContacts.js';

// export default function ContactsPage() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(getAllContactsOperation());
//   }, [dispatch]);

//   return (
//     <div>
//       <h3 className={css.title}>Your contacts</h3>
//       <ContactForm />
//       {isLoading ? <Loading /> : <ContactsList />}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import {
  getAllContactsOperation,
  deleteContact,
} from './../../store/contacts/operationsContact.js';
import ContactsList from './../../components/ContactsList/ContactsList.jsx';
import Loading from './../../components/Loading/Loading.jsx';
import css from './ContactsPage.module.css';
import {
  selectLoading,
  selectContacts,
} from '../../store/contacts/selectorsContacts.js';
import ModalComponent from '../../components/ModalComponent/ModalComponent.jsx';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    dispatch(getAllContactsOperation());
  }, [dispatch]);

  const handleShowModal = contact => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(selectedContact.id));
    console.log(`Deleting contact: ${selectedContact}`);
    handleCloseModal();
  };

  return (
    <div>
      <h3 className={css.title}>Your contacts</h3>
      <ContactForm />
      {isLoading ? (
        <Loading />
      ) : (
        <ContactsList contacts={contacts} onDelete={handleShowModal} />
      )}

      <ModalComponent
        show={showModal}
        handleClose={handleCloseModal}
        handleDelete={handleDeleteContact}
      />
    </div>
  );
};

export default ContactsPage;
