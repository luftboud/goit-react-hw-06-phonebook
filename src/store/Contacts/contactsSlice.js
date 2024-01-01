import { createSlice }  from "@reduxjs/toolkit";

const contactsInitialState = [
    // { name: "dkkkfkd" }
];
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContactAction: (state, action) => {
            state.push(action.payload);
        },
        deleteContactAction: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const { addContactAction, deleteContactAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;