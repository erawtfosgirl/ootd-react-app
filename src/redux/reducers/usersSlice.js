import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const BASE_URL = " http://localhost:3001";

export const addUser = createAsyncThunk("addUser", async (userCredentials) => {
    const res = await axios.post(`${BASE_URL}/users`, userCredentials);
    return res.data;
})

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: ""
    }
})

export default usersSlice.reducer;