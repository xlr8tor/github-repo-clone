import { useState } from "react";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import { Wrapper } from "./Search.styles";
import { FaBook } from "react-icons/fa";

const Search = () => {
  const [isVisible, setIsVisible] = useState({ sort: false, filter: false });

  const onChangeVisible = (flag) => {
    setIsVisible(flag);
  };

  return (
    <Wrapper className="search__group">
      <div className="search__controls">
        <form className="search__form">
          <div className="search__form-content">
            <div className="search__input-wrapper">
              <input type="text" className="search__input" />
            </div>
            <div className="search__buttons">
              <Button text="Type" mr={true} />
              <Button text="Laguage" />
              {isVisible.filter && (
                <Dropdown onShowMenu={onChangeVisible} type={"language"} />
              )}
              <Button
                text="Sort"
                ml={true}
                onShowMenu={onChangeVisible}
                isVisible={isVisible}
              />
              {isVisible && <Dropdown onShowMenu={onChangeVisible} />}
            </div>
          </div>
        </form>
        <div className="search__new-repo">
          <button className="btn new-repo">
            <FaBook className="new-repo_icon" /> New
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Search;
