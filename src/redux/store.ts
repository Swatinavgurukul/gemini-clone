import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import chatReducer from './chatSlice';
import { loadFromStorage, saveToStorage } from '../utils/storage';

const preloadedState = {
  auth: loadFromStorage('auth'),
  chat: loadFromStorage('chat'),
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToStorage('auth', store.getState().auth);
  saveToStorage('chat', store.getState().chat);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
