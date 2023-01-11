import axios from "axios";
import { useState ,useEffect } from 'react';

export function useApplicationData () {
  const [ data, setData ] = useState([])
  const [ loggedIn, setLoggedIn ] = useState([])
  
  useEffect(() => {
    const leaderboardURL = `http://localhost:3003/leaderboard`;
  
    axios.get(leaderboardURL).then(res => {
      setData(res.data)
    })
  }, []);

  useEffect(() => {
    //make this so other players can be logged in, player/'${id}'
    axios.get('http://localhost:3003/player/1').then(res => {
      setLoggedIn(res.data)
    })
  }, []);

  return { players: data, loggedIn };
}
