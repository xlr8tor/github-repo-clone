import { Wrapper } from "./Profile.styles";
import Avatar from "../avatar/Avatar";
import { useSelector } from "react-redux";
import {
  UilMapMarker,
  UilTwitter,
  UilEnvelope,
  UilUsersAlt,
} from "@iconscout/react-unicons";

const Profile = () => {
  const Username = useSelector((state) => state.auth.user.login);
  const Name = useSelector((state) => state.auth.user.name);
  const Email = useSelector((state) => state.auth.user.email);
  const Followers = useSelector((state) => state.auth.user.followers);
  const Following = useSelector((state) => state.auth.user.following);
  const Location = useSelector((state) => state.auth.user.location);
  const Twitter = useSelector((state) => state.auth.user.twitter_username);

  const Bio = useSelector((state) => state.auth.user.bio);

  return (
    <Wrapper className="profile layout-sidebar">
      <div className="profile__container grid">
        <div className="profile__content">
          <div className="profile__data">
            <div className="profile__avatar">
              <Avatar />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{Name}</h1>
              <span className="profile__nickname">{Username}</span>
            </div>
          </div>

          <div className="profile__body">
            <div>
              <button className="btn btn-edit">Edit Profile</button>
              {Bio && <h2 className="profile__bio">{Bio}</h2>}
              <div className="profile__follow">
                <UilUsersAlt className="profile__icon" size="16" />
                <span>
                  <span className="text-bold"> {Followers || 0}</span> followers
                  · <span className="text-bold">{Following || 0}</span>{" "}
                  following
                </span>
              </div>
              <ul className="profile__list">
                {Location && (
                  <li className="profile__item">
                    <UilMapMarker className="profile__icon" size="16" />
                    <a href="/">{Location}</a>
                  </li>
                )}
                {Email && (
                  <li className="profile__item">
                    <UilEnvelope className="profile__icon" size="16" />
                    <a href="/" className="email">
                      {Email}
                    </a>
                  </li>
                )}
                {Twitter && (
                  <li className="profile__item">
                    <UilTwitter className="profile__icon" size="16" />
                    <a href="/">{Twitter}</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
