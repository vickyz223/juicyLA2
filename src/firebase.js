// import firebase from "firebase/app"
// import "firebase/auth"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESS_SENDER_ID,
// 	appId: process.env.REACT_APP_FIREBASE_APP_ID,
// 	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

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
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);