import styled from "styled-components";
import { FaCaretDown, FaRegStar } from "react-icons/fa";

const Star = () => {
  return (
    <div>
      <Button className="btn starred">
        <FaRegStar className="star__icon tp" />
        Star
      </Button>
      <Button className="btn caret">
        <FaCaretDown className="star__icon" />
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
    font-weight: var(--font-semi-bold);
  }

  &.caret {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }

  svg.star__icon {
    display: inline-block;
    font-size: 12px;
    vertical-align: middle;
    margin-right: var(--mb-0-25);
    color: hsl(212deg 10% 38%);
  }

  svg.tp {
    vertical-align: sub;
    font-size: 1rem;
  }
`;
