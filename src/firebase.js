//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUWUUNdfDYvHklbfFOF4h_-229M_M6UlU",
  authDomain: "slack-37c9f.firebaseapp.com",
  projectId: "slack-37c9f",
  storageBucket: "slack-37c9f.appspot.com",
  messagingSenderId: "813043731642",
  appId: "1:813043731642:web:d93df0a0c6d9b190f84683",
  measurementId: "G-RGVSP8VRWY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
