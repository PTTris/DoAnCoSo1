import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axiosCustomize.js";

// Thunk fetch api
export const fetchAllDescBook = createAsyncThunk(
    "fetchAllDescBook",
    async (id_sach) => {
        try {
            const response = await axios.get(`/getDescriptionBook/${id_sach}`);
            return response.data;
        } catch (error) {
            throw new Error("Failed");
        }
    }
);

const getDescriptionBook = createSlice({
    name: "getDescriptionBook",
    initialState: {
        desc: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDescBook.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllDescBook.fulfilled, (state, action) => {
                state.loading = false;
                state.desc = action.payload;
            })
            .addCase(fetchAllDescBook.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default getDescriptionBook.reducer;

export const selectAllDescBook = (state) => state.getDescriptionBook.desc;
