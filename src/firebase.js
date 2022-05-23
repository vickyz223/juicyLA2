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
	apiKey: "AIzaSyCHXTuxVK57ApJppliMgrtK5GlcZ7sWJmg",
	authDomain: "juicyla-7d596.firebaseapp.com",
	databaseURL: "https://juicyla-7d596-default-rtdb.firebaseio.com",
	projectId: "juicyla-7d596",
	storageBucket: "juicyla-7d596.appspot.com",
	messagingSenderId: "723240759802",
	appId: "1:723240759802:web:6f8babc225fadfd250b443",
	measurementId: "G-D3G6YJ6538"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);