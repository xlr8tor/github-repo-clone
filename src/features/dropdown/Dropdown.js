import { useState } from "react";
import { Wrapper } from "./Dropdown.styles";
import { FaTimes, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { filter, sort, selectLanguage } from "../login/loginSlice";

const Dropdown = ({ onShowMenu, type }) => {
  const selectedLanguage = useSelector(selectLanguage);
  const [isChecked, setIsChecked] = useState({ [selectedLanguage]: true });

  const dispatch = useDispatch();

  //Get languages for dropdown
  let languages = useSelector((state) =>
    state.auth.repos.map((item) => item.language)
  );
  let newLanguages = languages.filter((item) => item !== null);
  newLanguages = Array.from(new Set(newLanguages));

  let content =
    type === "language" ? (
      <ul className="dropdown_list">
        <li
          className="dropdown_item"
          onClick={() => {
            setIsChecked({ All: true });
            dispatch(filter({ language: "All" }));
            onShowMenu(false);
          }}
        >
          {isChecked["All"] && <FaCheck className="dropdown_icon" />}
          <span>All</span>
        </li>
        {newLanguages.map((item, i) => {
          return (
            <li
              key={i}
              className="dropdown_item"
              onClick={(e) => {
                setIsChecked({ [e.target.textContent]: true });
                dispatch(filter({ language: item }));
                onShowMenu(false);
              }}
            >
              {isChecked[item] && <FaCheck className="dropdown_icon" />}
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    ) : (
      <ul className="dropdown_list">
        <li
          className="dropdown_item"
          onClick={() => {
            dispatch(sort(true));
            onShowMenu(false);
          }}
        >
          <FaCheck className="dropdown_icon" />
          <span>Name</span>
        </li>
      </ul>
    );

  return (
    <Wrapper className="dropdown">
      <div className="dropdown_menu">
        <header className="dropdown_header">
          <span className="dropdown_title">Select order</span>
          <button
            className="dropdown_close"
            type="button"
            onClick={() => {
              onShowMenu(false);
            }}
          >
            <FaTimes />
          </button>
        </header>
        {content}
      </div>
    </Wrapper>
  );
};

export default Dropdown;
