import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const BASE_URL = " http://localhost:3001";

export const getUsersData = createAsyncThunk("getUsersData", async () => {
    const res = await axios(`${BASE_URL}/users`);
    return res.data;
});

export const addUser = createAsyncThunk("addUser", async (userCredentials) => {
    const res = await axios.post(`${BASE_URL}/users`, userCredentials);
    return res.data;
})

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsersData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getUsersData.rejected, (state) => {
                state.loading = false;
                state.error = "Data not Found";
            })
    }
})

export default usersSlice.reducer;