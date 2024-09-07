import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
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
    <div>
      <h3>Your Contacts</h3>
      <ContactForm />
      {isLoading ? <Loading /> : <ContactsList contact={contact} />}
    </div>
  );
}
