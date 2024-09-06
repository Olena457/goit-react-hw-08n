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
  key: 'contactsValue',
  storage,
  whitelist: ['items'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

export const rootReducer = {
  auth: persistedAuthReducer,
  contacts: persistedContactsReducer,
  filters: filtersReducer,
};

// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// import { authReducer } from './auth/authSlice.js';
// import { contactsReducer } from './contacts/contactsSlice.js';
// import filtersReducer from './filter/slice.js';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const contactsPersistConfig = {
//   key: 'contactsValue',
//   storage,
//   whitelist: ['items'],
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
// const persistedContactsReducer = persistReducer(
//   contactsPersistConfig,
//   contactsReducer
// );

// export const rootReducer = {
//   auth: persistedAuthReducer,
//   contacts: persistedContactsReducer,
//   filters: filtersReducer,
// };
// _____________________________________
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// export const rootReducer = {
//   auth: persistedAuthReducer,
//   contacts: contactsReducer,
//   filters: filtersReducer,
// };
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// import { authReducer } from './auth/authSlice.js';
// import { contactsReducer } from './contacts/contactsSlice.js';
// import filtersReducer from './filter/slice.js';
