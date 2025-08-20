import { createSlice } from "@reduxjs/toolkit";

interface authType {
  email: string;
  firstLogin: boolean;
  fullName: string;
  isGuest: boolean;
  learningLanguage: string;
  refreshToken: string;
  token: string;
  userId: string;
}

const initialState: authType = {
  email: "",
  firstLogin: false,
  fullName: "",
  isGuest: false,
  learningLanguage: "",
  refreshToken: "",
  token: "",
  userId: "",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData(state, action) {
      state.email = action.payload.email;
      state.firstLogin = action.payload.firstLogin;
      state.fullName = action.payload.fullName;
      state.isGuest = action.payload.isGuest;
      state.learningLanguage = action.payload.learningLanguage;
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
  },
});

export const { setData } = auth.actions;

export default auth.reducer;
