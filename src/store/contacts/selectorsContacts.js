import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filter/selectors.js';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectEditing = state => state.contacts.editing;
// export const isCreating = state => state.contacts.creating;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        contact.number.includes(numberFilter)
    );
  }
);
