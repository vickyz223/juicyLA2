import React from 'react';
import Rating from '@mui/material/Rating';
import PropTypes from "prop-types";
import ActivityLevel from '../common_components/ActivityLevel';
import MenuComponent from "../common_components/MenuComponent";
import "../component_styles/Homepage.css";


const PodiumBox = ({ rating, name }) => {
    return (
      <div className="podiumHolder">
        <div className="podiumName">{name}</div>
        <div className="stars">
          <Rating value={rating} readOnly />
        </div>
        <div className="activity">
          <div> Capacity: </div>
          <ActivityLevel restaurant={name} />
        </div>
        <div className="summary">
          <MenuComponent restaurant={name} />
        </div>
      </div>
    );
}

PodiumBox.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mealperiod: PropTypes.bool.isRequired
}

export default PodiumBox;