import React from 'react';
import style from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.wrap}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span className={style.contact}>{name}: </span>
          <span className={style.contact}>{number}</span>
          <button onClick={() => onDeleteContact(id)} className={style.delete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
