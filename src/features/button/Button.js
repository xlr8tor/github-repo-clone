import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";

const Button = ({ text, ml, mr, onShowMenu, isVisible }) => {
  return (
    <Wrapper
      ml={ml}
      mr={mr}
      type="button"
      onClick={() => {
        if (text === "Sort") {
          onShowMenu(!isVisible);
        }
      }}
    >
      {text}
      <FaCaretDown size="11" className="caret__icon" />
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  position: relative;
  background-color: var(--button-bg-color);
  padding: 5px 16px;
  border: 1px solid var(--button-border-color);
  border-radius: 6px;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-semi-bold);
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  appearance: none;
  box-shadow: 0 1px 0 rgba(27, 31, 36, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  margin-right: ${(props) => (props.mr ? "var(--mb-0-25)" : "0")};
  margin-left: ${(props) => (props.ml ? "var(--mb-0-25)" : "0")};

  &:hover {
    border-color: hsl(213deg 14% 12% / 15%);
    background-color: hsl(220deg 14% 96%);
  }

  svg.caret__icon {
    margin-left: var(--mb-0-25);
    vertical-align: middle;
  }
`;
