import styled from "styled-components";

export const Wrapper = styled.div`
  &.search__group {
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-bottom-default);
  }

  .search__controls {
    display: flex;
    align-items: flex-start;
  }

  .search__form {
    width: 100%;
  }

  .search__form-content {
    display: flex;
    flex: auto;
  }

  .search__input-wrapper {
    margin-right: var(--mb-1);
    flex: auto;
  }

  .search__input {
    width: 100%;
    padding: 5px 12px;
    line-height: 20px;
    color: var(--color-fg-default);
    vertical-align: middle;
    font-size: 14px;
    border: 1px solid var(--border-bottom-default);
    border-radius: 6px;
    box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
    outline: none;
  }

  .search__input:focus {
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px var(--color-accent-fg);
  }

  .search__buttons {
    display: flex;
    flex-wrap: wrap;
  }
`;
