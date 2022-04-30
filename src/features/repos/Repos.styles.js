import styled from "styled-components";

export const Wrapper = styled.ul``;

export const Container = styled.div`
  &.layout-main {
    grid-column: 2 / span 2;

    @media (max-width: 768px) {
      grid-row: 2 / span 2;
      grid-column: 1;
    }
  }
`;
