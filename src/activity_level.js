import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { get, getDatabase, child, ref, set } from "firebase/database";

const date_rn = new Date();
const now = date_rn.toString().slice(16, 18);

async function request(r) {
    var url = 'http://menu.dining.ucla.edu/Menus/' + r;
    const request = await axios.get(url);
    return request.data;
}

function getLevel(r) {
    const db = getDatabase();
    const reference = ref(db, 'activity/' + r + "_raw");

    request(r).then(re => {
        set(reference, {
            date: now,
            level: re
        })
    })
}

function generateLevel(data) {
    const pattern = /<span class="activity-level activity-level-.*?><\/span><\/span> ([0-9]*)%/s;
    let al = data.match(pattern)[1];
    return al;
}

function levelData(rest) {
    try {
        const reference = ref(getDatabase(), 'activity/' + rest);
        get(child(ref(getDatabase()), 'activity/' + rest + '_raw')).then((snapshot) => {
            if (!snapshot.exists() || snapshot.val().date != now) {
                getLevel(rest);
                const l = generateLevel(snapshot.val().level);
                set(reference, {
                    level: l
                })
            }
        }).catch((error) => {
            console.error(error);
        });
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

