import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axiosCustomize.js";

// Thunk fetch api
export const fetchAllBooksOfCategory = createAsyncThunk(
    "fetchAllBooksOfCategory",
    async (maTheLoaiSach) => {
        try {
            const response = await axios.get(
                `/getAllBooksOfCategory/${maTheLoaiSach}`
            );
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch book sort by date");
        }
    }
);

const getAllBooksOfCategory = createSlice({
    name: "getAllBooksOfCategory",
    initialState: {
        booksOfCategory: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBooksOfCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllBooksOfCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.booksOfCategory = action.payload; // Gán dữ liệu từ action payload vào state.books
            })
            .addCase(fetchAllBooksOfCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default getAllBooksOfCategory.reducer;

export const selectAllBooksOfCategory = (state) =>
    state.getAllBooksOfCategory.booksOfCategory;
