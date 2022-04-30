import Pill from "../pill/Pill";
import Star from "../star/Star";
import { Wrapper } from "./Repo.styles";
const Repo = ({ name, language, visibility, updated }) => {
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
          <span>{updated}</span>
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
