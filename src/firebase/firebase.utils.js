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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
