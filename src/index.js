import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import NavBar from './NavBar';
import Homepage from './Homepage';
import WriteReviews from './Components/WriteReviews';
import { initializeApp } from "firebase/app";
// import Register from './Register';
// import Login from './Login';
import RestaurantPage from './RestaurantPage';

function JuicyLa() {
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
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    {/* <Route path="/Register" element={<Register/>}/>
                <Route path="/Login" element={<Login/>}/> */}
                    <Route path="/RestaurantPage" element={<RestaurantPage />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/" element={<WriteReviews />} />
                </Routes>

            </Router>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JuicyLa />);