import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//get your config from console.firebase.com
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCJT190kddeTEfbIDDF1x-AXpGEJvH8JM",
  authDomain: "soccer-one-3164b.firebaseapp.com",
  projectId: "soccer-one-3164b",
  storageBucket: "soccer-one-3164b.appspot.com",
  messagingSenderId: "468795960949",
  appId: "1:468795960949:web:0031c300907425c3be123c",
  measurementId: "G-5RZW2KZ0K5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
export default { db };
