import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
  name: "trip",
  initialState: {
    Ddate: "",
  },
  reducers: {
    setDepartureDate: (state, action) => {
      state.Ddate = action.payload;
    },
  },
});

export const { setDepartureDate } = tripSlice.actions;
export default tripSlice.reducer;
