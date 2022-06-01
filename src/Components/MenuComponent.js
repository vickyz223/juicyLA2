import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { get, getDatabase, child, ref, set } from "firebase/database";
import "./MenuComponent.css"

const now = new Date();
const d = now.toString();
let date_string = d.slice(0, 15) + '\n';
date_string = date_string.replace(/\s+/g, '');

async function request(r) {
    var url = 'http://menu.dining.ucla.edu/Menus/' + r;
    const request = await axios.get(url);
    return request.data;
}

function writeMenu(r) {
    const db = getDatabase();
    const reference = ref(db, 'menu/' + r + '/' + date_string);

    get(child(ref(db), 'menu/' + r + '/' + date_string)).then((snapshot) => {
        if (!snapshot.exists()) {
            request(r).then(re => {
                set(reference, {
                    date: date_string,
                    menu_html: re
                })
            })
        }
    }).catch((error) => {
        console.error(error);
    });
    return date_string;
}

function generateData(data, period) {

    var table = [period];

    var p_pattern = null;

    switch (period) {
        case 'Breakfast':
            p_pattern = /<h3 class="col-header">Breakfast(.*?)<h3/s;
            break;
        case 'Lunch':
            p_pattern = /<h3 class="col-header">Lunch(.*?)<h3/s;
            break;
        case 'Dinner':
            p_pattern = /<h3 class="col-header">Dinner(.*?)<hr class/s;
            break;
    }

    if (p_pattern == null) {
        return 'inv_p';
    }

    const reg_period = p_pattern;

    let period_data = data.match(reg_period)[1]; // pd is now specifically the period you are in

    let restaurant_data = period_data;

    const r_sectGet = /<li class="sect-item">([A-za-z\s]*)</gs; // Get section names

    const r_itemGet = /<ul class="item-list">[rn\s]*<li class="menu-item">(.*?)<\/ul>/gs; // Get section items
    const r_itemName = /<a class="recipelink" href=".*?">(.*?)<\/a>/gs; // Get names in items

    const r_itemDe = /<div class="item-description-wrapper">(.*?)<\/div>/gs; // Get descriptions in items part 1
    const r_itemText = /<div class="tt-description">(.*?)<\/div>/s; // Get descriptions in items part 2

    let sec_names = [...restaurant_data.matchAll(r_sectGet)];
    let processed_sec_names = [];

    let sec_cont = [...restaurant_data.matchAll(r_itemGet)];
    let processed_sec_cont = [];

    for (let i = 0; i < sec_names.length; i++) {
        let s = sec_names[i][1].replace(/rn/g, '');
        processed_sec_names.push(s.trim());
    }

    let sect_lens = [];

    for (let i = 0; i < sec_cont.length; i++) {

        let item_names = [...sec_cont[i][1].matchAll(r_itemName)];
        sect_lens.push([processed_sec_names[i], item_names.length]);

        let item_descripts = [...sec_cont[i][1].matchAll(r_itemDe)];

        for (let j = 0; j < item_names.length; j++) {

            let a = [];
            a[0] = item_names[j][1];

            if (item_descripts[j][0].match(r_itemText) != null) {
                let d = item_descripts[j][0].match(r_itemText)[1].replace(/rn/g, '');
                a[1] = d.trim();
            }
            else {
                a[1] = "No description.";
            }

            processed_sec_cont.push(a);
        }
    }

    table.push(sect_lens);
    table.push(processed_sec_cont);

    var finTable = "";

    var numItem = 0;

    for (let i = 0; i < table[1].length; i++) {
        let current_sect = table[1][i][0]; // ex: Psistaria
        finTable += '<h2>' + current_sect + '</h2>';
        finTable += '<ul>';
        for (let j = 0; j < table[1][i][1]; j++) {
            finTable += '<li>' + table[2][numItem][0] + '</li>';
            numItem++;
        }
        finTable += '</ul>';
    }

    return finTable;
}

function MenuData(rest) {
    try {
        const now = new Date();
        let periods = ['Breakfast', 'Lunch', 'Dinner'];
        let period = "";

        if (now.getHours() < 9) {
            period = periods[0];
        } else if (now.getHours() < 15 && now.getHours() >= 9) {
            period = periods[1];
        } else if (now.getHours() >= 15) {
            period = periods[2];
        }

        const ds = writeMenu(rest);
        const menu_table_ref = ref(getDatabase(), 'menu_table/' + ds + '/' + period + '/' + rest);

        get(child(ref(getDatabase()), 'menu/' + rest + '/' + ds)).then((snapshot) => {
            const d = generateData(snapshot.val().menu_html, period);
            set(menu_table_ref, {
                table: d
            })
        }).catch(() => {
            console.log(`No ${period} time at ${rest}`);
        });

        return (ds + '/' + period + '/' + rest);
    } catch {
        console.log("Failed to get menu.");
    }
}

const MenuComponent = ({restaurant}) => { 
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        async function getMenu() {
            const menu_path = MenuData(restaurant);
            await get(child(ref(getDatabase()), 'menu_table/' + menu_path)).then((snapshot) => {
                let newMenu = snapshot.val().table
                if (menu !== newMenu) {
                    setMenu(newMenu)
                }
            }).catch(() => {
                console.log("Failed to get menu.");
            });
        }
        getMenu();
    }, [])

    return (
        menu && (<div dangerouslySetInnerHTML={{ __html: menu }} />)
    );
}

MenuComponent.propTypes = {
    restaurant: PropTypes.string,
}

export default MenuComponent;
