import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utiles/firebase/firebase.utiles';

import { fetchCategoriesSucess,fetchCategoriesFailed, fetchCategoriesStart} from './categories.reducer';


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSucess(categoriesArray));
    }catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories(){
    yield takeLatest(fetchCategoriesStart, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}