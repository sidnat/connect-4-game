import axios from "axios";
import { useState, useEffect } from "react";

export function useApplicationData() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userStatus = localStorage.getItem("user")

  useEffect(() => {
    const leaderboardURL = `http://localhost:3003/leaderboard`;

    axios.get(leaderboardURL).then((res) => {
      setData(res.data);
    });
  }, []);
    
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
          setUser(response.data.name);
          localStorage.setItem("user", response.data.name);
          console.log("it worked!");
        }
      })
      .catch((error) => {
        // Handle failed login
        console.log(error);
      });
  };

  const handleLogout = () => {
    localStorage.setItem("user", null)
  }
  
  return { players: data, handleSubmit, user, isLoggedIn, handleLogout, userStatus };
}
