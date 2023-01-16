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
  const currentUser = Cookies.get("token");
  const playerID = localStorage.getItem('userId');


  useEffect(() => {
    if (currentUser !== undefined) {
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
    // e.preventDefault();
    axios
      .post("http://localhost:3003/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle successful login
        if (response.status === 200) {
          Cookies.set("token", response.data, { expires: 7, secure: true });
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("userName", response.data.name);
          setIsLoggedIn(true);
          console.log("it worked!");
        }
      })
      .catch((error) => {
        // Handle failed login
        console.log(error);
      });
  };

  const handleLogout = (e) => {
    // e.preventDefault();
    Cookies.remove("token");
    localStorage.removeItem("userName", null)
    localStorage.removeItem("userId", null)
  }
  
  return { data, handleSubmit, isLoggedIn, handleLogout, userStatus };
}
