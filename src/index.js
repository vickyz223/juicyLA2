import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Restaurant from "./RestaurantPage";

function JuicyLa() {
    return (
        <div>
            <Restaurant />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JuicyLa />);