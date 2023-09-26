import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { formStepReducer } from "./adddPetForm/addPetFormSlice";
import { addPetSlice, addPetSliceReducer } from "./myPets/addPetSlice";
import { globalReducer } from "./global/globalSlice";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authPersistedReducer = persistReducer(authConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    formStep: formStepReducer,
    addPet: addPetSliceReducer,
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
