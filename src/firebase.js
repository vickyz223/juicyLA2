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
  apiKey: "AIzaSyABvCRnBiC8FAlfOOY4WLGoEvtAQM4Jzsw",
  authDomain: "juicyla-2022.firebaseapp.com",
  databaseURL: "https://juicyla-2022-default-rtdb.firebaseio.com",
  projectId: "juicyla-2022",
  storageBucket: "juicyla-2022.appspot.com",
  messagingSenderId: "132540762702",
  appId: "1:132540762702:web:77cbc2746dcdee081bd11f",
  measurementId: "G-32ZW6T1JQR"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);