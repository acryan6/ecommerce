import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBN485ztrAnCqkd0H31REXlmSRnMVPeLXI",
  authDomain: "ecommerce-db-6a065.firebaseapp.com",
  databaseURL: "https://ecommerce-db-6a065.firebaseio.com",
  projectId: "ecommerce-db-6a065",
  storageBucket: "ecommerce-db-6a065.appspot.com",
  messagingSenderId: "687270434640",
  appId: "1:687270434640:web:c5ff64c55f130afe5e7e55"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
