import React from 'react';
import PropTypes from 'prop-types';
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
      set(reference, {
          level: re
      })
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

