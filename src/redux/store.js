import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { formStepReducer } from './adddPetForm/addPetFormSlice';
import { userReducer } from './user/userSlice';
import { globalReducer } from './global/globalSlice';
import { noticesReducer } from './notices/noticeSlice';
import { newsReducer } from './news/newsSlice';
import { addPetSliceReducer } from './adddPetForm/addPetFormSlice';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const authPersistedReducer = persistReducer(authConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    formStep: formStepReducer,
    addPet: addPetSliceReducer,
    global: globalReducer,
    notices: noticesReducer,
    news: newsReducer,
    user: userReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
