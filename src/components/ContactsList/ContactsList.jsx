// const ContactsList = ({ tasks }) => {
//   return (
//     <ul>
//       {tasks.map(el => (
//         <li key={el.id}>{el.text}</li>
//       ))}
//     </ul>
//   );
// };

// export default ContactsList;
import css from './ContacstList.module.css';
import Loading from './../Loading/Loading.jsx';
import Contact from './../Contact/Contact.jsx';
import { useSelector } from 'react-redux';

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
      {loading && <Loading />}
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
