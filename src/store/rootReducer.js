import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authReducer } from './auth/authSlice.js';
import { contactsReducer } from './contacts/contactsSlice.js';
import filtersReducer from './filter/slice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const rootReducer = {
  auth: persistedAuthReducer,
  contacts: persistedContactsReducer,
  filters: filtersReducer,
};
export default rootReducer;
