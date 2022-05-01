import Pill from "../pill/Pill";
import Star from "../star/Star";
import { Wrapper } from "./Repo.styles";

const Repo = ({ name, language, visibility, updated }) => {
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

  return (
    <Wrapper className="repo__item">
      <div>
        <div className="repo__header">
          <h3 className="repo__title">
            <a href="/" className="repo__link">
              {name}
            </a>
            <span></span>
            <Pill content={visibility} secondary={true} />
          </h3>
        </div>
        <div></div>
        <div className="repo__description">
          <span className="repo__data">
            <span className="repo__laguage-color"></span>
            <span className="repo__language">{language}</span>
          </span>
          {" Updated "}
          <span>
            {() => {
              timeSince(updated);
            }}
          </span>
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
