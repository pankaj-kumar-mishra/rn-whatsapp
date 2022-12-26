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
    },
    setDidTryAuthLogin: state => {
      state.didTryAuthLogin = true;
    },
  },
});

export const { authenticate, setDidTryAuthLogin } = authSlice.actions;
export default authSlice.reducer;
