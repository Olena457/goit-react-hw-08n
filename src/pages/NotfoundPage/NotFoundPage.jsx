import { Link } from 'react-router-dom';
import { FcHighPriority } from 'react-icons/fc';
import css from './NotFoundPage.module.css';
export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1 className={css.text} />
      "Page not found
      <FcHighPriority />"<h1 />
      <h3 className={css.subTitle}>"Please to home page "</h3>
      <Link to="/" className={css.btn}>
        Home page
      </Link>
    </div>
  );
}
