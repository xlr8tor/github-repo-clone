import Pill from "../pill/Pill";
import Star from "../star/Star";
import { Wrapper } from "./Repo.styles";
import { FaRegStar } from "react-icons/fa";

const Repo = ({
  name,
  language,
  visibility,
  updated,
  description,
  fork,
  forks_url,
  stargazers_count,
}) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const timeSince = (time) => {
    const date = new Date(time);
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear().toString().substring(2);

    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
      return `${day} ${month} ${year}`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${day} ${month}`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  };

  const capitalize = (text) => {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  };

  return (
    <Wrapper className="repo__item">
      <div>
        <div className="repo__header">
          <h3 className="repo__title">
            <a href="/" className="repo__link">
              {name}
            </a>
            <span></span>
            <Pill content={capitalize(visibility)} secondary={true} />
            {fork && (
              <span className="repo_forked">
                Forked from{" "}
                {forks_url.split("/")[4] + "/" + forks_url.split("/")[5]}
              </span>
            )}
          </h3>
        </div>
        {description && (
          <div>
            <p className="repo_inspiration">{description}</p>
          </div>
        )}
        <div></div>
        <div className="repo__description">
          {language && (
            <span className="repo__data">
              <span className={`repo__laguage-color ${language}`}></span>
              <span className="repo__language">{language}</span>
            </span>
          )}
          {stargazers_count > 0 ? (
            <span className="repo_star-count">
              <FaRegStar className="repo_star-icon" />
              {stargazers_count}
            </span>
          ) : null}
          {" Updated "}
          <span>{timeSince(updated)}</span>
        </div>
      </div>
      <div className="repo__button-section">
        <div>
          <Star />
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Repo;
