// import * as firebase from "firebase/app"
// import "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from 'firebase/storage';
import { serverTimestamp, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDclfR4MYIhoFOdoY9IH8QIGzQhTUmVpWk",
  authDomain: "juicyla-3.firebaseapp.com",
  databaseURL: "https://juicyla-3-default-rtdb.firebaseio.com/",
  projectId: "juicyla-3",
  storageBucket: "juicyla-3.appspot.com",
  messagingSenderId: "959255473930",
  appId: "1:959255473930:web:c29ddfdce3f7316d6014f3",
  measurementId: "G-446PR4LED8"
}

const app = initializeApp(firebaseConfig)
const timestamp = serverTimestamp();
const auth = getAuth(app);
const projectStorage = getStorage();
const projectFirestore = getFirestore();
export { auth, timestamp, projectStorage, projectFirestore }
export default app;
// const analytics = getAnalytics(app);