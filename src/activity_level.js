import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { get, getDatabase, child, ref, set } from "firebase/database";

const now = new Date();

async function request(r) {
    var url = 'http://menu.dining.ucla.edu/Menus/' + r;
    const request = await axios.get(url);
    return request.data;
}

function getLevel(r) {
    const db = getDatabase();
    const reference = ref(db, 'activity/' + r);

    request(r).then(re => {
        const pattern = /<span class="activity-level activity-level-.*?><\/span><\/span> ([0-9]*)%/s;
        let al = re.match(pattern)[1];

        set(reference, {
            date: now.getHours(),
            level: al
        })
    })
}

function levelData(rest) {
    try {
        const reference = ref(getDatabase(), 'activity/' + rest);

        get(child(ref(getDatabase()), 'activity/' + rest)).then((snapshot) => {
            if(!snapshot.exists() || snapshot.val().date != now.getHours()) {
                getLevel(rest);
            }
        })

        get(child(ref(getDatabase()), 'activity/' + rest)).then((snapshot) => {
            set(reference, {
                level: snapshot.val().level
            })
        })
    } catch {
        console.log("Failed to get activity level.");
    }
}

export default class ActivityLevel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: '',
        }
    }

    propTypes = {
        restaurant: PropTypes.string,
    }

    render() {
        console.log("hi");
        const restaurant = this.props.restaurant;
        levelData(restaurant);
        get(child(ref(getDatabase()), 'activity/' + restaurant)).then((snapshot) => {
            this.setState({
                activity: snapshot.val().level
            })
        }).catch((error) => {
            console.error(error);
        });
        return (
            <progress value={this.state.activity} max="100" />
        );
    }

}