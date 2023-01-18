import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    categoriesArray: [],
    isLoading: false,
    error: null,
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        fetchCategoriesStart: (state) => {
            state.isLoading = true;
        },
        fetchCategoriesSucess: (state, action) => {
            state.categoriesArray = action.payload
            state.isLoading = false;
        },
        fetchCategoriesFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false;
        },
    },
});

export const { fetchCategoriesStart, fetchCategoriesSucess, fetchCategoriesFailed } = categoriesSlice.actions;
export default categoriesSlice.reducer;