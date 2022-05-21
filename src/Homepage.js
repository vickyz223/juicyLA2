import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import WriteReviewButton from './Components/WriteReviewButton';
import PodiumBox from './PodiumBox';
import './Homepage.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
console.log(app);
function getData() {
    const db = getDatabase();
    
}

const Homepage = () => {
    let navigate = useNavigate();
    // const [restaurants, setRestaurants] = useState([]);

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
                            () => { navigate('/RestaurantPage') }
                        }
                    >
                        {/* setName =  */}
                        <PodiumBox RestName={name}/>
                    </div>
                    <div className='first'
                    id='podiumBoxes'
                    onClick={
                        () => { navigate('/RestaurantPage') }
                    }
                >
                    <PodiumBox/>
                </div>
                <div className='third'
                    id="podiumBoxes"
                    onClick={
                        () => { navigate('/RestaurantPage') }
                    }
                >
                    <PodiumBox/>
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
            <WriteReviewButton />
        </>
    );
}

export default Homepage;