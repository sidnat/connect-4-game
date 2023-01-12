import axios from "axios";
import { useState ,useEffect } from 'react';

export function useApplicationData () {
  const [ data, setData ] = useState({
    leaderboards: [],
    login: []
  })
  
  useEffect(() => {
    const playerID = 3

    const leaderboardURL = `http://localhost:3003/leaderboard`;
    const loginURL = `http://localhost:3003/player/${playerID}`
  
    Promise.all([
      axios.get(leaderboardURL),
      axios.get(loginURL)
    ])
    .then((all) => {
      setData(prev => ({
        ...prev,
        leaderboards: all[0].data,
        login: all[1].data
      }))
    })

    return () => {

    }
  }, [])

  //   axios.get(loginURL)
  //   .then(res => {
  //     setData(res.data)
  //   })
  // }, []);

  return { data };
}