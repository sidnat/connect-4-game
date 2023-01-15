import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useApplicationData() {
  const [data, setData] = useState({
    leaderboard: []
  });
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userStatus = localStorage.getItem("user");
  const currentUser = Cookies.get("token");

  useEffect(() => {
    if (currentUser !== undefined) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const leaderboardURL = `http://localhost:3003/leaderboard`;

    Promise.all([
      axios.get(leaderboardURL)
    ])
      .then((all) => {
        setData(prev => ({
          ...prev,
          leaderboard: all[0].data
        }))
      })
    }, [])

          
  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        // Handle successful login
        if (response.status === 200) {
          Cookies.set("token", response.data, { expires: 7 });
          localStorage.setItem("user", response.data.name);
          localStorage.setItem("isLoggedIn", true);
          console.log("it worked!");
        }
      })
      .catch((error) => {
        // Handle failed login
        console.log(error);
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    Cookies.remove("token");
    localStorage.setItem("user", null)
  }
  
  return { data, handleSubmit, user, isLoggedIn, handleLogout, userStatus };
}
