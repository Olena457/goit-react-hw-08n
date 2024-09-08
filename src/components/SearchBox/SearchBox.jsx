import { useId } from 'react';
import { IconContext } from 'react-icons';
import { GrFormSearch } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../store/filter/slice.js';
import css from './SearchBox.module.css';

import {
  selectNameFilter,
  selectNumberFilter,
} from '../../store/filter/selectors.js';

function SearchBox() {
  const fieldId = useId();
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);
  const number = useSelector(selectNumberFilter);

  const handleFindName = ev => {
    const value = ev.target.value;
    dispatch(
      changeFilter({
        name: value.toLowerCase(),
        number: value,
      })
    );
  };

  return (
    <>
      <div>
        <label className={css.label} htmlFor={`${fieldId}-name`}>
          Search
        </label>
        <div className={css.positionIcon}>
          <input
            className={css.input}
            id={`${fieldId}-name`}
            type="text"
            value={name || number}
            onChange={handleFindName}
          />
          <IconContext.Provider value={{ size: '2em' }}>
            <span>
              <GrFormSearch className={css.iconInp} />
            </span>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
