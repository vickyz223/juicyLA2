import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import NavBar from './NavBar';
import Homepage from './Homepage';
import Register from './register';
import Login from './login';

function JuicyLa() {
    return (
        <div>
            <Router>            
                <NavBar/>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>

                <Route path="/" element={<Homepage/>}/>
            </Routes>

            </Router>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JuicyLa />);