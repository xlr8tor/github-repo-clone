import styled from "styled-components";

const NavItem = ({ children }) => {
  return (
    <Wrapper className="nav__item">
      <a href="/" className="nav__link">
        {children}
      </a>
    </Wrapper>
  );
};

export default NavItem;

const Wrapper = styled.li`
  &.nav__item {
    border-bottom: 2px solid transparent;
  }

  &.nav__item:hover {
    font-weight: var(--font-semi-bold);
    border-bottom: 2px solid hsl(11deg 97% 72%);
  }

  .nav__link {
    display: flex;
    align-items: center;
    color: var(--titleColor);
    padding: 0.5rem 1rem;
  }
`;
