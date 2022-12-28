import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userData: null,
    didTryAuthLogin: false,
  },
  reducers: {
    authenticate: (state, action) => {
      const { payload } = action;
      state.token = payload.token;
      state.userData = payload.userData;
      state.didTryAuthLogin = true;
    },
    setDidTryAuthLogin: state => {
      state.didTryAuthLogin = true;
    },
    logout: state => {
      state.token = null;
      state.userData = null;
      state.didTryAuthLogin = false;
    },
  },
});

export const { authenticate, setDidTryAuthLogin, logout } = authSlice.actions;
export default authSlice.reducer;
