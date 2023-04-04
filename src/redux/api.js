import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios'

const getGreetings = createAsyncThunk('hello-react-front-end/getGreetings', async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings/index')
      .then((data) => data.json());
    return response;
  } catch (error) {
    return error;
  }
});

export default getGreetings;