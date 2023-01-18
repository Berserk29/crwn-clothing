import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// To make sure that if selectCategoryReducer is same as (categoriesSelector) =>  categoriesSelector.categoriesArray 
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) =>  categoriesSlice.categoriesArray  
);

//With createSelector if selectCategories is egal return the upper function if not do the reduce function
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
    return categories.reduce((acc, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})}
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)