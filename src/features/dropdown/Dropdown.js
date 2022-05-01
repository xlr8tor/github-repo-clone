import { Wrapper } from "./Dropdown.styles";
import { FaTimes, FaCheck } from "react-icons/fa";

const Dropdown = () => {
  return (
    <Wrapper className="dropdown">
      <div className="dropdown_menu">
        <header className="dropdown_header">
          <span className="dropdown_title">Select order</span>
          <button className="dropdown_close">
            <FaTimes />
          </button>
        </header>
        <ul className="dropdown_list">
          <li className="dropdown_item">
            <FaCheck className="dropdown_icon" />
            <span>Name</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Dropdown;
