import { useState } from "react";
import Button from "../button/Button";
import { Wrapper } from "./Search.styles";
import { FaBook } from "react-icons/fa";

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);

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
              <Button
                text="Sort"
                ml={true}
                onShowMenu={onChangeVisible}
                isVisible={isVisible}
              />
              {isVisible && <Dropdown />}
            </div>
          </div>
        </form>
        <div className="search__new-repo">
          <button className="btn new-repo">
            <FaBook />
            New
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Search;
