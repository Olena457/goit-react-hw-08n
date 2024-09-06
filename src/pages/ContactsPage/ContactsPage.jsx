// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import ContactsList from './../components/ContactList/ContactsList.jsx';
// import ContactForm from './../components/ContactForm/ContactForm.jsx';
// import {
//   createContactOperation,
//   getAllContactsOperation,
// } from './../store/contacts/operationsContact.js';
// import { selectContacts } from './../../store/contacts/selectorsContacts.js';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const contact = useSelector(selectContacts);

//   const createContact = contact => {
//     dispatch(createContactOperation(contact));
//   };
//   useEffect(() => {
//     dispatch(getAllContactsOperation());
//   }, [dispatch]);

//   return (
//     <div>
//       <ContactForm submit={createContact} />
//       {contact && <ContactsList contact={contact} />}
//     </div>
//   );
// };

// export default ContactsPage;
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';

import css from './ContactsPage.module.css';
import Loading from './../../components/Loading/Loading.jsx';
import { selectLoading } from '../../store/contacts/selectorsContacts.js';
import { getAllContactsOperation } from './../../store/contacts/operationsContact.js';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllContactsOperation());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Your Contacts</h3>
      <ContactForm />
      {isLoading ? <Loading /> : <ContactsList />}
    </div>
  );
}
