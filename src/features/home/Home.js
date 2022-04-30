import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectAccessToken } from "../login/loginSlice";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Repos from "../repos/Repos";
import { Main, Wrapper } from "./Home.styles";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const accessToken = useSelector(selectAccessToken);

  if (!isLoggedIn && !accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <Main>
      <Header />
      <Wrapper className="home__container">
        <div className="home__content grid">
          <Profile />
          <Repos />
        </div>
      </Wrapper>
    </Main>
  );
};

export default Home;
