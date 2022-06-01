import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Homepage.css';
import PodiumBox from './PodiumBox';
import { getDatabase, ref, get, child} from "firebase/database";


const getRating = async (diningId) => {
    const db = getDatabase();
    const num = (await get(child(ref(db),'ratings' + '/' + diningId))).val().rating;
    return num;
};

function diningHall(name, rating) {
    this.name = name;
    this.rating = rating;
}

const Homepage = () => {
    let navigate = useNavigate();
    const places = ['Epicuria', 'BruinPlate', 'DeNeve'];
    let len = places.length;

    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        async function getRestaurantData () {
            const restaurantTemp = []
            for (let i = 0; i < len; i++) {
                const name = places[i];
                const item = new diningHall(name, await getRating(name));
                restaurantTemp.push(item);
            }
            restaurantTemp.sort((a, b) => {
                if (a.rating > b.rating) {
                    return -1;
                } else if (a.rating < b.rating) {
                    return 1;
                }
                return 0;
            });
            setRestaurants(restaurantTemp);
        }
        getRestaurantData();
    }, [])

    // const [name, setName] = useState('Name');
    return (
        restaurants && 
        (<>
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
                            () => { navigate('/RestaurantPage', { state: { name: restaurants[1].name } }) }
                        }
                    >
                        <PodiumBox name={restaurants[1].name} rating={restaurants[1].rating} />
                    </div>
                    <div className='first'
                        id='podiumBoxes'
                        onClick={
                            () => { navigate('/RestaurantPage', { state: { name: restaurants[0].name } }) }
                        }
                    >
                        <PodiumBox name={restaurants[0].name} rating={restaurants[0].rating} />
                    </div>
                    <div className='third'
                        id="podiumBoxes"
                        onClick={
                            () => { navigate('/RestaurantPage', { state: { name: restaurants[2].name } }) }
                        }
                    >
                        <PodiumBox name={restaurants[2].name} rating={restaurants[2].rating} />
                    </div>
                </div>


            </div>

            {/* <div className='leaderBoard'>
                hsvgjbckjndssdcv
                <h1>fyghj</h1>
                <h1>fyghj</h1>
                <h1>fyghj</h1>
                <h1>fyghj</h1>
            </div> */}
        </>)
    );
}

export default Homepage;