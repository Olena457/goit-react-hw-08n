// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import ContactForm from '../../components/ContactForm/ContactForm.jsx';
// import Loading from './../../components/Loading/Loading.jsx';
// import { selectLoading } from '../../store/contacts/selectorsContacts.js';
// import { getAllContactsOperation } from './../../store/contacts/operationsContact.js';
// import css from './ContactsPage.module.css';
// import ContactsList from './../../components/ContactsList/ContactsList.jsx';

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
//       {isLoading ? <Loading /> : <ContactsList contact={contact} />}
//     </div>
//   );
// }
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import { getAllContactsOperation } from './../../store/contacts/operationsContact.js';
import ContactsList from './../../components/ContactsList/ContactsList.jsx';
import Loading from './../../components/Loading/Loading.jsx';
import css from './ContactsPage.module.css';
import { selectLoading } from '../../store/contacts/selectorsContacts.js';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllContactsOperation());
  }, [dispatch]);

  return (
    <div>
      <h3 className={css.title}>Your contacts</h3>
      <ContactForm />
      {isLoading ? <Loading /> : <ContactsList />}
    </div>
  );
}
