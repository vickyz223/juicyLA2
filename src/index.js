import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import NavBar from './NavBar';
import Homepage from './Homepage';
import Register from './Register';
import Login from './Login';
import RestaurantPage from './RestaurantPage';

function JuicyLa() {
    return (
        <div>
            <Router>            
                <NavBar/>
            <Routes>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path = "/RestaurantPage" element={<RestaurantPage/>}/>
                <Route path="/" element={<Homepage/>}/>
            </Routes>

            </Router>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JuicyLa />);