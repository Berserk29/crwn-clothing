import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOwlGZK_d_PanCEKzNKqeWBwrO8D3nzn8",
    authDomain: "crwn-clothing-1a085.firebaseapp.com",
    projectId: "crwn-clothing-1a085",
    storageBucket: "crwn-clothing-1a085.appspot.com",
    messagingSenderId: "250980411810",
    appId: "1:250980411810:web:49e3ce9eaa7030daab6afb"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);  
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })

    }catch(err){
      console.error("error creating the user", err.message);
    }
  };

  return userDocRef;
};