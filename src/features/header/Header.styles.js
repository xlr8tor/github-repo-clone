import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: var(--z-fixed);
  margin-top: var(--mb-1-5);
  border-bottom: 1px solid hsl(210, 21%, 90%);
  background-color: #fff;

  .nav {
    padding: 0 1rem;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }

  .nav__menu {
    grid-auto-flow: column;
    grid-template-columns: auto 0 minmax(
        0,
        calc(100% - var(--Layout-sidebar-width) - var(--Layout-gutter))
      );
    gap: var(--Layout-gutter);
  }

  .layout-sidebar {
    grid-column: 1;
    width: var(--Layout-sidebar-width);
  }

  &.layout-main {
    grid-column: 2 / span 2;
  }

  .nav__list {
    gap: 0;
    display: flex;
  }

  svg.nav__icon {
    vertical-align: middle;
    margin-right: var(--mb-0-5);
    transition: 0.3s;
  }

  @media screen and (min-width: 768px) {
    .container,
    .nav__list {
      padding: 0 1.5rem;
    }
  }

  @media (min-width: 1012px) {
    .container,
    .nav__list {
      padding: 0 2rem;
    }
  }
`;
