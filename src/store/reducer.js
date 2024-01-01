import { contactsReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./Filter/filterSlice";
import storage from 'redux-persist/lib/storage'
export const reducer = {
    contacts: contactsReducer,
    filter: filterReducer
}