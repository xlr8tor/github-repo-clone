import styled from "styled-components";

export const Wrapper = styled.li`
  &.repo__item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--border-bottom-default);
    padding: 1.5rem 0;
  }

  .repo__header {
    display: inline-block;
    margin-bottom: var(--mb-0-25);
  }

  .repo__title {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    word-break: break-all;
  }

  .repo__link {
    color: hsl(212deg 92% 45%);
  }

  .repo__link:hover {
    cursor: pointer;
    text-decoration: underline;
    outline-width: 0;
  }

  .repo_inspiration {
    display: inline-block;
    padding-right: 2rem;
    margin-bottom: var(--mb-0-5);
    color: hsl(212deg 10% 38%);
    font-size: 14px;
  }

  .repo__description {
    margin-top: (--mb-0-5);
    font-size: var(--smaller-font-size);
  }

  .repo__data {
    margin-right: var(--mb-1);
  }

  .repo__laguage-color {
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    top: 1px;
    border: 1px solid var(--border-contrast);
    border-radius: 50%;
    margin-right: var(--mb-0-25);
  }

  .repo__button-section {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
