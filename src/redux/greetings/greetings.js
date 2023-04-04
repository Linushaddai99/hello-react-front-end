import { createSlice } from '@reduxjs/toolkit';
import getGreetings from '../api';


const initialState = {
  greetings: [],
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => ({
      ...state,
      greetings: action.payload,
    }));
  },
});

export default greetingsSlice.reducer;