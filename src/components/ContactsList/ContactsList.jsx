import { useSelector } from 'react-redux';
import css from './ContacstList.module.css';
import Contact from './../Contact/Contact.jsx';
import Loading from './../Loading/Loading';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../store/contacts/selectorsContacts.js';

function ContactsList() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {Loading && <Loading />}
      {!loading &&
        contacts &&
        !error &&
        contacts.map(({ number, name, id }) => (
          <li className={css.item} key={id}>
            <Contact id={id} number={number} name={name} />
          </li>
        ))}
      {error && <div>`Error:{error}`</div>}
    </ul>
  );
}
export default ContactsList;
