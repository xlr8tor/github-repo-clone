import styled from "styled-components";
import { FaCaretRight, FaRegStar } from "react-icons/fa";

const Star = () => {
  return (
    <div>
      <Button className="btn starred">
        <FaRegStar className="button__icon star__icon" />
        Star
      </Button>
      <Button className="btn caret">
        <FaCaretRight />
      </Button>
    </div>
  );
};

export default Star;

const Button = styled.button`
  &.starred {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    border-right-width: 0;
  }

  &.caret {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }

  svg.star__icon {
    display: inline-block;
    font-size: 12px;
  }
`;
