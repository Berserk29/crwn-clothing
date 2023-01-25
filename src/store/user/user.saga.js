import { takeLatest, put, all, call } from "redux-saga/effects";

import {
    signInSuccess,
    signInFailed,
    checkUserSession,
    googleSignInStart,
    emailSignInStart,
    signUpStart,
    signUpSuccess,
    signUpFailed,
    signOutStart,
    signOutFailed,
    signOutSuccess
} from "./user.reducer";

import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    signOutUser
} from '../../utiles/firebase/firebase.utiles';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}));
    }
    catch(error){
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user)
    } catch(error) {
        yield put(signInFailed(error))
    }
}


export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password );
        yield call(getSnapshotFromUserAuth, user)
    } catch(error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signOut() {
    try{
        yield call(signOutUser);
        yield put(signOutSuccess())
    } catch(error){
        yield put(signOutFailed(error))
    }
}

export function* signUp({payload: {email, password, displayName}}) {
    try{
        const {user} = yield call(createAuthUserWithEmailAndPassword, email, password);
        user.displayName = displayName;
        yield put(signUpSuccess(user))
    }catch(error){
        yield put(signUpFailed(error));
    }
}

export function* signInAfterSignUp({payload: user }){
    yield call(getSnapshotFromUserAuth, user)
}

export function* onGoogleSignInStart() {
    yield takeLatest(googleSignInStart, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(emailSignInStart, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(checkUserSession, isUserAuthenticated)
}

export function* onSignUpStart() {
    yield takeLatest(signUpStart, signUp)
}

export function* onSignUpSucess() {
    yield takeLatest(signUpSuccess, signInAfterSignUp)
}

export function* onSignOutStart() {
    yield takeLatest(signOutStart, signOut)
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSucess),
        call(onSignOutStart),
    ])
}