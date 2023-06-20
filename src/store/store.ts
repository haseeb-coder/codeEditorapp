import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

import persistReducer from './persistConfig';


const store = configureStore({
  reducer: persistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persist = persistStore(store);

export type Rootstate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
