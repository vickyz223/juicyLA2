import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Homepage.css';
import PodiumBox from './PodiumBox';
import { getDatabase, ref, get, child, set} from "firebase/database";

const getMealPeriod =()=>
    {
        const now = new Date() ;
        // let time = 10.5;

        let time = now.getHours();
        // const now = new Date()
        console.log(now,time)
        if ((time < 10 && time >=8) ||(time < 15 && time >=11) || time >= 17 && time < 21){
             return true
        }
        return false
    }

const getRating = async (diningId) => {
    const db = getDatabase();

    if (getMealPeriod()){
        const num = (await get(child(ref(db),'ratings' + '/' + diningId))).val().rating;
        console.log("getRating?")
        return num;
    } else {
        set(ref(db,'ratings' + '/' + diningId),{
            rating: 0,
            count: 0
        })
        return 0
    }
};

function diningHall(name, rating) {
    this.name = name;
    this.rating = rating;
}

const Homepage = () => {
    let navigate = useNavigate();
    const places = ['Epicuria', 'BruinPlate', 'DeNeve'];
    let len = places.length;
    const mealperiod = getMealPeriod()

    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        async function getRestaurantData () {
            const restaurantTemp = []
            for (let i = 0; i < len; i++) {
                const name = places[i];
                const item = new diningHall(name, await getRating(name), mealperiod);
                restaurantTemp.push(item);
                console.log(item)
            }
            if (mealperiod){

                restaurantTemp.sort((a, b) => {
                    if (a.rating > b.rating) {
                        return -1;
                    } else if (a.rating < b.rating) {
                        return 1;
                    }
                    return 0;

                });
                // console.log("useeffect if")
            }  
                setRestaurants(restaurantTemp);
                console.log("useeffect else?")
            
        }
        getRestaurantData();
    }, [])

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
                            () => { navigate('/RestaurantPage', { state: { name: restaurants[1].name, isMealPeriod: mealperiod} }) }
                        }
                    >
                        <PodiumBox name={restaurants[1].name} rating={restaurants[1].rating} mealperiod={mealperiod} />
                    </div>
                    <div className='first'
                        id='podiumBoxes'
                        onClick={
                            () => { navigate('/RestaurantPage', { state: { name: restaurants[0].name, isMealPeriod: mealperiod} }) }
                        }
                    >
                        <PodiumBox name={restaurants[0].name} rating={restaurants[0].rating} mealperiod={mealperiod} />
                    </div>
                    <div className='third'
                        id="podiumBoxes"
                        onClick={
                            () => { navigate('/RestaurantPage', { state: { name: restaurants[2].name, isMealPeriod: mealperiod} }) }
                        }
                    >
                        <PodiumBox name={restaurants[2].name} rating={restaurants[2].rating} mealperiod={mealperiod} />
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