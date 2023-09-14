import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Person One" },
  { id: "1", name: "Mensch Two" },
  { id: "2", name: "Leute Three" },
];

const userSlice = createSlice({ name: "users", initialState, reducers: {} });

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
