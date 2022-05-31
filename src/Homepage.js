import React from 'react';
import { useNavigate } from "react-router-dom";
import './Homepage.css';
import PodiumBox from './PodiumBox';
import { getDatabase, ref, onValue } from "firebase/database";


function getActivity(diningId) {

    const db = getDatabase();
    const reference = ref(db, 'activity' + '/' + diningId);

    let activity;
    onValue(reference, (snapshot) => {
        activity = snapshot.val();
    });
    return (activity);
}

const getRating = (diningId) => {
    const db = getDatabase();
    const reference = ref(db, 'ratings' + '/' + diningId);

    let num;
    onValue(reference, (snapshot) => {
        num = snapshot.val().rating;
    });
    return (num);
};

function getMenu(diningId) {
    const db = getDatabase();
    const reference = ref(db, 'menu' + '/' + diningId);

    let menu;
    onValue(reference, (snapshot) => {
        menu = snapshot.val();
    });
    return (menu);

}

function diningHall(name, rating, menu, activity) {
    this.name = name;
    this.rating = rating;
    this.menu = menu;
    this.activity = activity;
}

const Homepage = () => {
    let navigate = useNavigate();
    const places = ['Epicuria', 'BruinPlate', 'DeNeve'];
    let len = places.length;
    
    const restaurants = [];

    for (let i = 0; i < len; i++) {
        const name = places[i];
        const item = new diningHall(name, getRating(name), getMenu(name), getActivity(name));
        if(i == 0) {
            restaurants.push(item);
        } else if(i == 1) {
            if(restaurants[0].rating > getRating(name)) {
                restaurants.push(item);
            }
            else {
                restaurants.unshift(item);
            }
        } else {
            if(restaurants[0].rating < getRating(name)) {
                restaurants.unshift(item);
            } else if(restaurants[1].rating < getRating(name)) {
                restaurants.splice(1,0,item);
            } else {
                restaurants.push(item);
            }
        }
    }

    // const [name, setName] = useState('Name');
    return (
        <>
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
        </>
    );
}

export default Homepage;