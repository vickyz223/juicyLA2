import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Homepage.css';
import PodiumBox from './PodiumBox';
import Leaderboard from './HistoricLeaderboard';
import Button from '@mui/material/Button';
import { getDatabase, ref, get, child, set, onValue} from "firebase/database";

const getMealPeriod = (name) => {
    const now = new Date();
    let time = now.getHours();
    if (
      !(time < 10 &&
      time >= 7 &&
      name != "Epicuria") &&
      !(time < 15 && time >= 11 && name != "Epicuria") &&
      !(time >= 17 && time < 21)
    ) {
      return false;
    }
    return true;
}

const getRating = async (diningId) => {
    const db = getDatabase();

    if (getMealPeriod("a")) {
        const num = (await get(child(ref(db), 'ratings' + '/' + diningId))).val().rating;
        return num;
    } else {
        set(ref(db, 'ratings' + '/' + diningId), {
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

    const [show, setShow] = React.useState(false)
    const handleShow = () => {
        setShow(!show);
    }

    let navigate = useNavigate();
    const places = ['Epicuria', 'BruinPlate', 'DeNeve'];
    let len = places.length;
    const mealperiod = getMealPeriod("a")

    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        async function getRestaurantData() {
            const restaurantTemp = []
            for (let i = 0; i < len; i++) {
                const name = places[i];
                const item = new diningHall(name, await getRating(name), mealperiod);
                restaurantTemp.push(item);
            }
            if (mealperiod) {
                restaurantTemp.sort((a, b) => {
                    if (a.rating > b.rating) {
                        return -1;
                    } else if (a.rating < b.rating) {
                        return 1;
                    }
                    return 0;

                });

                const now = new Date();
                if((now.getHours() == 20 || now.getHours() == 9 || now.getHours() == 14) && now.getMinutes() == 59) {
                    let high_rank = restaurantTemp[0].name;
                    var mealPeriod;
                    switch(now.getHours()) {
                        case 9:
                            mealPeriod = 'BREAKFAST';
                            break;
                        case 14:
                            mealPeriod = 'LUNCH';
                            break;
                        case 20:
                            mealPeriod = 'DINNER';
                            break;
                    }
                    const hist_dbRef = ref(getDatabase(), 'historic_ratings/' + mealPeriod + '/' + high_rank);
                    let updated_count;
                    onValue(hist_dbRef, (snapshot) => {
                        updated_count = snapshot.val().count += 1;
                    })
                    set(hist_dbRef, {
                        count: updated_count
                    })
                }
            }
          setRestaurants(restaurantTemp);
        }
        getRestaurantData();
    }, [])

    return (
      restaurants && (
        <>
          <div className="topDivider">
            <div className="homepage-top"></div>
            <div className="brand">JUICYLA</div>
            <div className="status">
              {show ? "Historic Rankings" : "Current Rankings"}
            </div>
            <div id="rankingButton">
              <Button
                variant="contained"
                onClick={() => handleShow()}
                sx={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs",
                  fontWeight: "bold",
                  fontSize: 15,
                  bottom: 60,
                  color: "white",
                  backgroundColor: "#DC3545",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                {show ? "Back to Current" : "Historic Rankings"}
              </Button>
            </div>

            {show ? (
              <div className="podium">
                <div className="smaller" id="podiumBoxes">
                  <Leaderboard mealperiod={"BREAKFAST"} />
                </div>
                <div className="smaller" id="podiumBoxes">
                  <Leaderboard mealperiod={"LUNCH"} />
                </div>
                <div className="smaller" id="podiumBoxes">
                  <Leaderboard mealperiod={"DINNER"} />
                </div>
              </div>
            ) : (
              <div className="podium">
                {getMealPeriod(restaurants[1].name) && (
                  <div
                    className="first"
                    id="podiumBoxes"
                    onClick={() => {
                      navigate("/RestaurantPage", {
                        state: {
                          name: restaurants[1].name,
                          isMealPeriod: mealperiod,
                          liveRating: restaurants[1].rating,
                        },
                      });
                    }}
                  >
                    <PodiumBox
                      name={restaurants[1].name}
                      rating={restaurants[1].rating}
                      mealperiod={mealperiod}
                    />
                  </div>
                )}
                {getMealPeriod(restaurants[0].name) && (
                  <div
                    className="first"
                    id="podiumBoxes"
                    onClick={() => {
                      navigate("/RestaurantPage", {
                        state: {
                          name: restaurants[0].name,
                          isMealPeriod: mealperiod,
                          liveRating: restaurants[0].rating,
                        },
                      });
                    }}
                  >
                    <PodiumBox
                      name={restaurants[0].name}
                      rating={restaurants[0].rating}
                      mealperiod={mealperiod}
                    />
                  </div>
                )}
                {getMealPeriod(restaurants[2].name) && (
                  <div
                    className="first"
                    id="podiumBoxes"
                    onClick={() => {
                      navigate("/RestaurantPage", {
                        state: {
                          name: restaurants[2].name,
                          isMealPeriod: mealperiod,
                          liveRating: restaurants[2].rating,
                        },
                      });
                    }}
                  >
                    <PodiumBox
                      name={restaurants[2].name}
                      rating={restaurants[2].rating}
                      mealperiod={mealperiod}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )
    );
}

export default Homepage;