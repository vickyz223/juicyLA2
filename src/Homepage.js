import React from 'react';
import { useEffect, } from 'react';
import { useNavigate } from "react-router-dom";
import './Homepage.css';
import PodiumBox from './PodiumBox';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// import { act } from 'react-dom/test-utils';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyABvCRnBiC8FAlfOOY4WLGoEvtAQM4Jzsw",
//     authDomain: "juicyla-2022.firebaseapp.com",
//     databaseURL: "https://juicyla-2022-default-rtdb.firebaseio.com",
//     projectId: "juicyla-2022",
//     storageBucket: "juicyla-2022.appspot.com",
//     messagingSenderId: "132540762702",
//     appId: "1:132540762702:web:77cbc2746dcdee081bd11f",
//     measurementId: "G-32ZW6T1JQR"
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// console.log(app);

function getActivity(diningId) {

    const db = getDatabase();
    const reference = ref(db, 'activity' + '/' + diningId);

    let activity;
    onValue(reference, (snapshot) => {
        activity = snapshot.val();
    });
    return (activity);

}

function getRating(diningId) {
    const db = getDatabase();
    const reference = ref(db, 'written reviews' + '/' + diningId);

    let rating;
    onValue(reference, (snapshot) => {
        rating = snapshot.val();
    });
    return (rating);
}

function getMenu(diningId) {
    const db = getDatabase();
    const reference = ref(db, 'menu' + '/' + diningId);

    let menu;
    onValue(reference, (snapshot) => {
        menu = snapshot.val();
    });
    return (menu);

}

function diningHall(name, rating, menu, activity) {
    this.name = name;
    this.rating = rating;
    this.menu = menu;
    this.activity = activity;
}
const Homepage = () => {
    let navigate = useNavigate();
    const places = ['Epicuria', 'BruinPlate', 'DeNeve'];
    let len = places.length;
    const restaurants = [];
    for (let i = 0; i < len; i++) {
        const name = places[i];
        const item = new diningHall(name, getRating(name), getMenu(name), getActivity(name));
        restaurants.push(item);
    }

    console.log(restaurants);

    useEffect(() => {

    })

    // const [name, setName] = useState('Name');
    return (
        <>
            <div className='topDivider'>
                <div className='brand'>
                    JUICYLA
                </div>
                <div className='status'>
                    Current Rankings
                </div>
                <div className='podium'>
                    <div className='second'
                        id="podiumBoxes"
                        onClick={
                            () => { navigate('/RestaurantPage', { state: { name: 'Epicuria' } }) }
                        }
                    >
                        <PodiumBox name={restaurants[0].name} />
                    </div>
                    <div className='first'
                        id='podiumBoxes'
                        onClick={
                            () => { navigate('/RestaurantPage', { state: { name: 'Epicuria' } }) }
                        }
                    >
                        <PodiumBox name={restaurants[1].name} />
                    </div>
                    <div className='third'
                        id="podiumBoxes"
                        onClick={
                            () => { navigate('/RestaurantPage', { state: { name: 'Epicuria' } }) }
                        }
                    >
                        <PodiumBox name={restaurants[2].name} />
                    </div>
                </div>


            </div>

            <div className='leaderBoard'>
                hsvgjbckjndssdcv
                <h1>fyghj</h1>
                <h1>fyghj</h1>
                <h1>fyghj</h1>
                <h1>fyghj</h1>
            </div>
        </>
    );
}

export default Homepage;