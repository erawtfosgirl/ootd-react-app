import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {

        }
    }
})

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;