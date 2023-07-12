import React from 'react';
import style from './filter.module.css'

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={style.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" value={value} onChange={onChangeFilter} />
    </div>
  );
};

export default Filter;
