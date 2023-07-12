import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import style from './contactForm.module.css'



const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedNumber = localStorage.getItem('number');
    if (storedName && storedNumber) {
      setName(storedName);
      setNumber(storedNumber);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('number', number);
  }, [name, number]);
  


  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // const contact = {
    //   id: uuidv4(),
    //   name,
    //   number,
    // };

    onAddContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="name" className={style.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>

      <label htmlFor="number" className={style.label}>
        Number
        <input
          type="text"
          name="number"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </label>

      <button type="submit" className={style.add}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
