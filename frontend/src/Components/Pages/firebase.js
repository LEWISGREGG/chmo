import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUzKeY5ramRWtz2VX7zDTd-BIWabZtLGU",
  authDomain: "osptelco.firebaseapp.com",
  databaseURL: "https://osptelco-default-rtdb.firebaseio.com",
  projectId: "osptelco",
  storageBucket: "osptelco.appspot.com",
  messagingSenderId: "17956212483",
  appId: "1:17956212483:web:9bfb1efea483d8e0e5e336",
  measurementId: "G-M46KKCW9Q2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;