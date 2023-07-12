import React, { useState } from 'react';
import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/filter';
import style from './app.module.css'

const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
   const [filter, setFilter] = useState('');

  
  const addContact = (name, number) => {
    const contact = {
      id: `id-${contacts.length + 1}`,
      name,
      number,
    };

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={style.app}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
