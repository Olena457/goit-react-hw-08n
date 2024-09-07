import { Oval } from 'react-loader-spinner';
import css from '../Loading/Loading.module.css';

export default function Loading() {
  return (
    <div className={`${css.loader} ${css.centered} ${css.popup}`}>
      <Oval color="#00008B" height={70} width={70} />
    </div>
  );
}
