import React from 'react';
import Rating from '@mui/material/Rating';
import PropTypes from "prop-types";
import ActivityLevel from './Components/ActivityLevel';
import MenuComponent from './Components/MenuComponent';
import './Homepage.css';


const PodiumBox = ({ rating, name }) => {
    const exists = () => {
        const now = new Date();
        let time = now.getHours();
        if (
          (time < 10 && time >= 7 && name != "Epicuria") && 
          !(time < 15 && time >= 11) &&
          !(time >= 17 && time < 21)
        ) {
          return true;
        }
        return false;
    }

    if (!exists()) {
        return (null)
    } else {
        return (
            <div>
                <div className='podiumName'>
                    {name}
                </div>
                <div className="info">
                        <>
                            <div className='stars'>
                                <Rating
                                    value={rating}
                                    readOnly
                                />
                            </div>
                            <div className='activity'>
                                <div> Activity</div>
                            </div>
                            <ActivityLevel restaurant={name} />
                        </>
                </div>
                <div className='summary'>
                    <MenuComponent restaurant={name} />
                </div>
            </div>
        )
    }

    

}

PodiumBox.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mealperiod: PropTypes.bool.isRequired
}

export default PodiumBox;