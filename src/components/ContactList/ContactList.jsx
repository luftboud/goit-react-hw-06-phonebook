import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'store/Contacts/contactsSlice';
const ContactList = () => {
    const contacts = useSelector((state) => state.contacts)
  const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch();
  
    const filterContacts = () => { 
      return contacts?.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())); 
    };
   const deleteContact = (id) => {
    dispatch(deleteContactAction(id))
  }
  return (
    <ul>
      {filterContacts()?.map((el, i) => (
        <li key={i}>
          {el.name}: {el.number}
          <button type="button" onClick={() => deleteContact(i)} id={i}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};
export { ContactList };
