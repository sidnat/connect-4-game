import React from 'react';
import LandingPage from './landing-page'
import GamePage from './game-page'
import ProfilePage from './profile-page'
import LeaderboardPage from './leaderboard-page'
// import useVisualMode from 'hooks/useVisualMode';
// import "./styles.scss";

const LANDING_PAGE = "LANDING_PAGE";
const GAME_PAGE = "GAME_PAGE";
const PROFILE_PAGE = "PROFILE_PAGE";
const LEADERBOARD_PAGE = "LEADERBOARD_PAGE";

export default function MainPage(props) {
  // const { loggedIn } = props;

  // if user is logged in, initial mode is profile page, else landing page
  // const { mode, transition, back } = useVisualMode(loggedIn ? PROFILE_PAGE : LANDING_PAGE);

  const mode = PROFILE_PAGE;

  if (mode === LANDING_PAGE) {
    return <LandingPage />;
  }

  if (mode === GAME_PAGE) {
    return <GamePage />;
  }

  if (mode === PROFILE_PAGE) {
    return <ProfilePage />;
  }

  if (mode === LEADERBOARD_PAGE) {
    return <LeaderboardPage />;
  }

  // return (
  //   <article>
  //     {mode === LANDING_PAGE && <LandingPage/>}
  //     {mode === GAME_PAGE && <GamePage/>}
  //     {mode === PROFILE_PAGE && <ProfilePage/>}
  //     {mode === LEADERBOARD_PAGE && <LeaderboardPage/>}
  //   </article>
  // );
}