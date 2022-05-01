import styled from "styled-components";

const NavItem = ({ children, active }) => {
  return (
    <Wrapper className="nav__item" active={active}>
      <a href="/" className="nav__link">
        {children}
      </a>
    </Wrapper>
  );
};

export default NavItem;

const Wrapper = styled.li`
  &.nav__item {
    border-bottom: ${(props) =>
      props.active ? "2px solid hsl(11deg 97% 72%)" : "2px solid transparent"};
  }

  &.nav__item:hover {
    font-weight: var(--font-semi-bold);
  }

  .nav__link {
    display: flex;
    align-items: center;
    color: var(--titleColor);
    padding: 0.5rem 1rem;
  }
`;
