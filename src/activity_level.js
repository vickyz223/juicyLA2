import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { get, getDatabase, child, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyABvCRnBiC8FAlfOOY4WLGoEvtAQM4Jzsw",
    authDomain: "juicyla-2022.firebaseapp.com",
    databaseURL: "https://juicyla-2022-default-rtdb.firebaseio.com/",
    projectId: "juicyla-2022",
    storageBucket: "juicyla-2022.appspot.com",
    messagingSenderId: "132540762702",
    appId: "1:132540762702:web:77cbc2746dcdee081bd11f",
    measurementId: "G-32ZW6T1JQR"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const now = new Date().toString.slice(16,18);

async function request(r) {
  var url = 'http://menu.dining.ucla.edu/Menus/' + r;
  const request = await axios.get(url);
  console.log(request.data);
  return request.data;
}

function getLevel(r) {
  const db = getDatabase();
  const reference = ref(db, 'activity/' + r + "_raw");

  request(r).then(re => {
      if(snapshot.exists()) {
        if(snapshot.val().date != now) {
            set(reference, {
                date: now,
                level: re
            })
        }
      }
  })
}

function generateLevel(data) {
    const pattern = /<span class="activity-level activity-level-.*?><\/span><\/span> ([0-9]*)%/s;
    let al = data.match(pattern)[1];
    return al;
}

function levelData(rest) {
    try {
        getLevel(rest);
        const reference = ref(getDatabase(), 'activity/' + rest);

        get(child(ref(getDatabase()), 'activity/' + rest + '_raw')).then((snapshot) => {
            const l = generateLevel(snapshot.val().level);
            set(reference, {
                level: l
            })
        }).catch((error) => {
            console.error(error);
        });
    } catch {
        console.log("Failed to get activity level.");
    }
}

export default class ActivityLevel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: '',
        }
    }

    propTypes = {
        restaurant: PropTypes.string,
    }

    render() {
        const restaurant = this.props.restaurant;
        levelData(restaurant);
        get(child(ref(getDatabase()), 'activity/' + restaurant)).then((snapshot) => {
            this.setState({
                activity: snapshot.val().level
            })
        }).catch((error) => {
            console.error(error);
        });
        return (
            <progress value={this.state.activity} max="100"/>
        );
    }

}

