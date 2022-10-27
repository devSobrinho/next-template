import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, } from 'redux-persist';
import { useDispatch, useSelector } from 'react-redux';

import counterReducer from './modules/Counter';

const reducers = combineReducers({
  counterState: counterReducer
});

const persistConfig = {
  key: 'next-template',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const useAppSelector = () => useSelector((state: RootState) => state);
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
