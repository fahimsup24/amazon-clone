// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCweq3yDpUOfxXYcxpBw1tDCO0MeMZqMMk",
  authDomain: "clone-9e352.firebaseapp.com",
  databaseURL: "https://clone-9e352.firebaseio.com",
  projectId: "clone-9e352",
  storageBucket: "clone-9e352.appspot.com",
  messagingSenderId: "414814958601",
  appId: "1:414814958601:web:a1b76e08149bb777d1f4d8",
  measurementId: "G-9E50C8S9ZY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };