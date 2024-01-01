import React  from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, deleteContactAction } from 'store/Contacts/contactsSlice';
import { setFilterAction } from 'store/Filter/filterSlice';

const App = () => {


  ///___________________________________________✅
  const contacts = useSelector((state) => state.contacts)
  const filter = useSelector((state) => state.filter)
  
  const dispatch = useDispatch();
  
  const addContact = (cont) => {
    dispatch(addContactAction(cont))
  }
  
  const deleteContact = (id) => {
    dispatch(deleteContactAction(id))
  }
  const setFilter = (q) => {
    dispatch(setFilterAction(q))
  }
  ///___________________________________________✅

  console.log(contacts); 
  console.log(filter);

  const handleSubmit = (contName, phNumber) => {
    const isAdded = contacts?.find(el => el.name === contName);
    if (isAdded !== undefined) {
      window.alert(
        `Contact "${contName}" is already in your phonebook. Please, try something else!`
      );
      return
    } 
    if (contName === '' || phNumber === '') {
      window.alert('Please, fill all fields.');
      return
    }
    addContact({name: contName, number: phNumber})
  }; //✅

  const handleSearch = evt => {
    const value = evt.target.value;
    setFilter(value)
  };//✅

  const filterContacts = () => { 
      return contacts?.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())); 
  }; //✅
  

  return (    
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={handleSubmit}
          />
        <h2>Contacts</h2>
        <Filter onChange={handleSearch} />
        <ContactList contacts={filterContacts()} onDelete={deleteContact} />
      </div>
    );
  }

export { App };
