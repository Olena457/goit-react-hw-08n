import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <>
      <div className={css.container}>
        <>
          <h1 className={css.text}>Page not found</h1>
          <p className={css.subTitle}>Please go to home page</p>
          <Link to="/" className={css.btn}>
            Home page
          </Link>
        </>
      </div>
    </>
  );
}
