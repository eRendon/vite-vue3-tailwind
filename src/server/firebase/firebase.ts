import firebase from 'firebase/compat';
import firebaseConfig from '@/server/firebase/config';
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
