import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Homepage from './Homepage';

function JuicyLa() {
    return (
        <div>
            <NavBar/>
            <Homepage/>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JuicyLa />);