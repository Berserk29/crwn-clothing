import { getCategoriesAndDocuments } from '../../utiles/firebase/firebase.utiles.js';
import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSucess } from './categories.reducer';


export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    
    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSucess(categoriesArray));
    }catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
};