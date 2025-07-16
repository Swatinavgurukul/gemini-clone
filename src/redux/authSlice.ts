import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    phone: '',
    countryCode: '',
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.phone = action.payload.phone;
      state.countryCode = action.payload.countryCode;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.phone = '';
      state.countryCode = '';
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;