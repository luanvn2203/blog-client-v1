import {
    createSlice,
} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        text: ""
    },
    reducers: {
        fetchData: (state, action) => {
            return {
                todos: action.payload
            };
        },
        ahihi: (state, action) => {
            return {
                ...state,
                text: action.payload
            };
        },
    }
});

export const { fetchData } = userSlice.actions;
export const { ahihi } = userSlice.actions;