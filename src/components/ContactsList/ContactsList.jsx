import { useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import Contact from './../Contact/Contact.jsx';
import Loading from './../Loading/Loading.jsx';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../store/contacts/selectorsContacts.js';

function ContactsList({ onDelete }) {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {loading && <Loading />}
      {!loading && !error && contacts.length === 0 && (
        <h4 className={css.subTitle}>
          No contacts available. Please add some contacts.
        </h4>
      )}
      {!loading &&
        contacts &&
        !error &&
        contacts.map(({ number, name, id }) => (
          <li className={css.item} key={id}>
            <Contact id={id} number={number} name={name} onDelete={onDelete} />
          </li>
        ))}
      {error && <div>Error: {error}</div>}
    </ul>
  );
}

export default ContactsList;
