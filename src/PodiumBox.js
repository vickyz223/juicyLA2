import React from 'react';
import Rating from '@mui/material/Rating';
import PropTypes from "prop-types";
import ActivityLevel from './Components/ActivityLevel';
import MenuComponent from './Components/MenuComponent';
import './Homepage.css';


const PodiumBox = (props) => {
    return (
        <>
            <div className='podiumName'>
                {props.name}
            </div>
            <div className="info">
                <div className='stars'>
                    <Rating
                        defaultValue='3'
                        value={props.rating}
                        readOnly
                    />
                </div>
                <div className='activity'>
                    <div> Activity</div>
                </div>
                <ActivityLevel restaurant={props.name} />

            </div>
            <div className='summary'>
                <MenuComponent restaurant={props.name} />
            </div>
        </>
    )

}
PodiumBox.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
}

export default PodiumBox;