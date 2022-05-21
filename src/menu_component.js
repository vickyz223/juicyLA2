import React from 'react';
import MenuData from './menu_data.js';
import { get, getDatabase, child, ref } from "firebase/database";
import PropTypes from 'prop-types';

export default class MenuComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: '',
        }
    }

    propTypes = {
        restaurant: PropTypes.string,
    }
      
    render() {
        const restaurant = this.props.restaurant;
        const menu_path = MenuData(restaurant);
        get(child(ref(getDatabase()), 'menu_table/' + menu_path)).then((snapshot) => {
            if(this.state.menu != snapshot.val().table) {
                this.setState({
                    menu: snapshot.val().table
                });
            }
        }).catch((error) => {
            console.error(error);
        });
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.menu }} />
        );
      }
    }
