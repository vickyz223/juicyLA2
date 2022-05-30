import React from 'react';
import axios from 'axios';
import PropType from "prop-types";
import { get, getDatabase, child, ref, set } from "firebase/database";
import { useState, useEffect } from 'react';

const between = 60000; // in ms

async function request(restaurant) {
    var url = 'http://menu.dining.ucla.edu/Menus/' + restaurant;
    const request = await axios.get(url);
    return request.data;
}

function getLevel(restaurant) {
    const db = getDatabase();
    const reference = ref(db, 'activity/' + restaurant);

    request(restaurant).then(re => {
        const pattern = /<span class="activity-level activity-level-.*?><\/span><\/span> ([0-9]*)%/s;
        let al;
        
        try{
            al = re.match(pattern)[1];
        } catch {
            al = 0;
        }
        
        set(reference, {
            level: al
        })
    })
}

const ActivityLevel = ({ restaurant }) => {

    const [activity_level, set_level] = useState(0);

    useEffect(() => {
        const reference = ref(getDatabase(), 'activity/');

        getLevel(restaurant);
        get(child(reference,restaurant)).then((snapshot) => {
            set_level(activity_level => activity_level - activity_level + snapshot.val().level);
        })
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const reference = ref(getDatabase(), 'activity/');

            getLevel(restaurant);
            get(child(reference,restaurant)).then((snapshot) => {
                set_level(activity_level => activity_level - activity_level + snapshot.val().level);
            })

        }, between); // every ten minutes
        return () => clearInterval(interval);
    }, [activity_level]);

    return (

        <progress value={activity_level} max="100" />
    );
};

ActivityLevel.propTypes = {
    restaurant: PropType.string.isRequired,
}

export default ActivityLevel;