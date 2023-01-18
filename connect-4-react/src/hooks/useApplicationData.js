import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useApplicationData() {
  const [data, setData] = useState({
    leaderboard: [],
    playerInfo: []
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userStatus = localStorage.getItem("user");
  const [currentUser, setCurrentUser ] = useState(Cookies.get("token"))
  const playerID = localStorage.getItem('userId');


  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  },[currentUser]);

  useEffect(() => {
    const leaderboardURL = `http://localhost:3003/leaderboard`;
    const playerProfileURL= `http://localhost:3003/player/${playerID}`

    Promise.all([
      axios.get(leaderboardURL),
      axios.get(playerProfileURL)
    ])
      .then((all) => {
        setData(prev => ({
          ...prev,
          leaderboard: all[0].data,
          playerInfo: all[1].data
        }))
      })
      .catch((error) => {
        console.log(error)
      })
    }, [playerID])


  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle successful login
        if (response.status === 200) {
          // saves a cookie
          Cookies.set("token", response.data, { expires: 7, secure: true });
          // stores userID and userName in a local storage
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("userName", response.data.name);

          // // store default game conditions upon login to solve bug. when user not logged in, goes to /game route, and logs in without completing game setup page
          localStorage.setItem('playerOne', response.data.name);
          localStorage.setItem('playerTwo', '2');
          localStorage.setItem('gameSizeX', 7);
          localStorage.setItem('gameSizeY', 6);
          localStorage.setItem('winCondition', 4);

          // changes login State to true
          setIsLoggedIn(true);

          //remove console.log
          console.log("it worked!");
        }
      })
      .catch((error) => {
        // Handle failed login
        console.log(error);
      });
  };

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("userName", null)
    setCurrentUser(null)
    localStorage.removeItem("userId", null)
  }
  
  const addWinToDB = (userID) => {
    axios.post(`http://localhost:3003/addWin/`, {
      userID: userID
    }) 
  } 

  return { data, handleSubmit, isLoggedIn, handleLogout, userStatus, addWinToDB };
}
