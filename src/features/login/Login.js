import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  setLoggedIn,
  setAccessToken,
  selectIsLoggedIn,
  fetchAsync,
  fetchRepoAsync,
} from "./loginSlice";
import { Wrapper } from "./Login.styles";
import { UilGithub } from "@iconscout/react-unicons";
import { getAuthorizeHref } from "../../oauthConfig";
import Spinner from "../spinner/Spinner";

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loginStatus = useSelector((state) => state.auth.status);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);

      const requestData = {
        code: newUrl[1],
      };

      if (loginStatus === "idle") {
        dispatch(fetchAsync(requestData)).then((data) =>
          dispatch(fetchRepoAsync(data.payload.repos_url))
        );
      }
    }
  }, [dispatch, loginStatus]);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper className="login section">
      <div className="login__bg">
        <div className="login__container container grid">
          <div className="login__data">
            <h2 className="login__title">Repo trcker</h2>
            <span className="login__subtitle">
              Maintain your repos with ease
            </span>
          </div>
          {loginStatus == "loading" ? <Spinner /> : null}
          <div className="login__buttons">
            <button
              className="button button--flex"
              onClick={() => {
                window.open(getAuthorizeHref(), "_self");
              }}
            >
              <UilGithub size="25" className="button__icon" />
              Login with GitHub
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
