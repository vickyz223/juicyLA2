import axios from 'axios';
import { initializeApp } from "firebase/app";
import { get, getDatabase, child, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCHXTuxVK57ApJppliMgrtK5GlcZ7sWJmg",
    authDomain: "juicyla-7d596.firebaseapp.com",
    databaseURL: "https://juicyla-7d596-default-rtdb.firebaseio.com",
    projectId: "juicyla-7d596",
    storageBucket: "juicyla-7d596.appspot.com",
    messagingSenderId: "723240759802",
    appId: "1:723240759802:web:6f8babc225fadfd250b443",
    measurementId: "G-D3G6YJ6538"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const now = new Date();
const d = now.toString();
let date_string = d.slice(0,15) + '\n';
date_string = date_string.replace(/\s+/g, '');

async function request(r) {
  var url = 'http://menu.dining.ucla.edu/Menus/' + r;
  const request = await axios.get(url);
  console.log(request.data);
  return request.data;
}

function writeMenu(r, date_string) {
  const db = getDatabase();
  const reference = ref(db, 'menu/' + r + '/' + date_string);

  get(child(ref(db), 'menu/' + r + '/' + date_string)).then((snapshot) => {
    if (!snapshot.exists()) {
      request(r).then(re => {
        set(reference, {
          date: date_string,
          menu_html: re
        })
      })
    }
  }).catch((error) => {
    console.error(error);
  });
}

export default function GetMenu(r){
  writeMenu(r, date_string);
  return(date_string);
}