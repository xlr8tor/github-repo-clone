import styled from "styled-components";

export const Main = styled.main``;
export const Wrapper = styled.div`
  &.home__container {
    padding: 0 2rem;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    line-height: 21px;

    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }

    @media (max-width: 375px) {
      padding: 0 1rem;
    }
  }

  .home__content {
    grid-auto-flow: column;
    grid-template-columns: auto 0 minmax(
        0,
        calc(100% - var(--Layout-sidebar-width) - var(--Layout-gutter))
      );
    gap: var(--Layout-gutter);
  }

  @media (max-width: 768px) {
    .home__content {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
    }
  }
`;
