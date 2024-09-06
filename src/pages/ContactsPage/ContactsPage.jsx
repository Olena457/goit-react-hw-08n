import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './../store/contacts/selectorsContacts.js';
import ContactsList from './../components/ContactList/ContactsList.jsx';
import ContactForm from './../components/ContactForm/ContactForm.jsx';
import {
  createContactOperation,
  getAllContactsOperation,
} from './../store/contacts/operationsContact.js';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);

  const createContact = contact => {
    dispatch(createContactOperation(contact));
  };
  useEffect(() => {
    dispatch(getAllContactsOperation());
  }, [dispatch]);

  return (
    <div>
      <ContactForm submit={createContact} />
      {contact && <ContactsList contact={contact} />}
    </div>
  );
};

export default ContactsPage;
