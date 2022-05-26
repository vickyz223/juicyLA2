import React from 'react';
import axios from 'axios';
import { get, getDatabase, child, ref, set } from "firebase/database";
import { useState, useEffect } from 'react';

const between = 60000; // in ms

async function request() {
    var url = 'http://menu.dining.ucla.edu/Menus/DeNeve';
    const request = await axios.get(url);
    return request.data;
}

function getLevel() {
    const db = getDatabase();
    const reference = ref(db, 'activity/DeNeve');

    request().then(re => {
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

const ActivityLevel = () => {

    const [activity_level, set_level] = useState(0);

    useEffect(() => {
        const reference = ref(getDatabase(), 'activity/');

        getLevel();
        get(child(reference,'DeNeve')).then((snapshot) => {
            set_level(activity_level => activity_level - activity_level + snapshot.val().level);
        })
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const reference = ref(getDatabase(), 'activity/');

            getLevel();
            get(child(reference,'DeNeve')).then((snapshot) => {
                set_level(activity_level => activity_level - activity_level + snapshot.val().level);
            })

        }, between); // every ten minutes
        return () => clearInterval(interval);
    }, [activity_level]);

    return (

        <progress value={activity_level} max="100" />
    );
};

export default ActivityLevel;