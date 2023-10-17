import { createSlice } from "@reduxjs/toolkit";
// import {
//   getTokenEmail,
//   getTokenId,
//   getTokenPermission,
// } from "../helpers/functions.helper";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    id: "",
    userEmail: "",
    permission: "",
  },
  reducers: {
    addTokenPayload(state, action) {
      state.id = action.payload.id;
      state.userEmail = action.payload.userEmail;
      state.permission = action.payload.userPermission;
    },
    removeTokenPayload(state) {
      state.id = '',
      state.userEmail = '',
      state.permission = ''
    }
  },
});

export const tokenActions = tokenSlice.actions;

export default tokenSlice;
