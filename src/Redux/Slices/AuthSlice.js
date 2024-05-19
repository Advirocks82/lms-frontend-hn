// import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance"

// Initial state of the auth slice, including values retrieved from localStorage if available
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

// Async thunk for creating a new account
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        // Sending a POST request to the server to register a new user
        const res = axiosInstance.post("user/register", data);

        // Displaying toast notifications for loading, success, and error states
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });

        // Returning the response data upon successful account creation
        return (await res).data;
    } catch (error) {
        // Displaying an error toast if the account creation fails
        toast.error(error?.response?.data?.message);
    }
})


export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = axiosInstance.post("user/login", data);
        toast.promise(res, {
            loading: "Wait! authentication in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log in"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})
// Creating an auth slice to manage authentication-related state
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}, // No reducers are defined here as of now
extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role
    })
}
});

// Exporting the auth reducer to be used in the Redux store
export default authSlice.reducer;
