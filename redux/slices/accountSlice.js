import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {},
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      console.log("STATE:", state);
      console.log("ACTION:", action);
      state.account = action.payload;
    },
    logOut: (state, action) => {
      console.log("STATE:", state);
      console.log("ACTION:", action);
      state.account = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccount, logOut } = accountSlice.actions;

export default accountSlice.reducer;
