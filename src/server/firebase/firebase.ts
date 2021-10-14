import firebase from 'firebase/app';
import "firebase/firestore";
import firebaseConfig from '@/server/firebase/config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
