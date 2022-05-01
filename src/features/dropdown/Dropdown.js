import { Wrapper } from "./Dropdown.styles";
import { FaTimes, FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filter } from "../login/loginSlice";

const Dropdown = ({ onShowMenu }) => {
  const dispatch = useDispatch();

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
        <ul className="dropdown_list">
          <li
            className="dropdown_item"
            onClick={() => {
              dispatch(filter(true));
              onShowMenu(false);
            }}
          >
            <FaCheck className="dropdown_icon" />
            <span>Name</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Dropdown;
