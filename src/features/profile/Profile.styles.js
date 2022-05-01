import styled from "styled-components";

export const Wrapper = styled.div`
  &.layout-sidebar {
    grid-column: 1;
    width: var(--Layout-sidebar-width);

    @media (max-width: 768px) {
      grid-row: 1;
      width: 100%;
    }
  }

  .profile__container {
    margin-top: -2rem;
  }

  .profile__data {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-1-5);
  }

  .profile__avatar {
    display: inline-block;
    margin-right: var(--mb-1);
    z-index: var(--z-modal);
    position: relative;
  }

  .profile__info {
    padding: 1rem 0;
    width: 100%;
    float: left;
  }

  .profile__name {
    font-size: var(--h1-font-size);
    line-height: 24px;
  }

  .profile__nickname {
    display: block;
    font-size: var(--h2-font-size);
    line-height: 24px;
  }

  .profile__body {
    display: flex;
    flex-flow: column nowrap;
  }

  .btn-edit {
    width: 100%;
    border-radius: 6px;
    font-size: 0.875rem;
    margin-bottom: var(--mb-1);
    cursor: pointer;
    font-weight: var(--font-semi-bold);
  }

  .btn-edit:hover {
    border-color: hsl(213deg 14% 12% / 15%);
    background-color: hsl(220deg 14% 96%);
  }

  .profile__bio {
    font-size: var(--normal-font-size);
    margin-bottom: var(--mb-1);
  }

  .profile__follow {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-1);
    margin-top: var(--mb-0-5);
  }

  .profile__item {
    padding-top: 4px;
  }

  .profile__item a:visited {
    color: var(--color-fg-default);
  }

  .profile__item:hover a {
    color: hsl(212deg 92% 45%);
    cursor: pointer;
  }
  .profile__item:hover .email {
    text-decoration: underline;
  }

  svg.profile__icon {
    vertical-align: middle;
    margin-right: var(--mb-0-5);
  }

  @media (min-width: 768px) {
    .profile__data {
      display: block;
      margin-bottom: 0;
    }

    .profile__info {
      float: none;
    }

    .profile__avatar {
      margin-right: 0;
    }

    .profile__follow {
      margin-top: 0;
    }

    .text-bold {
      color: var(--color-fg-default);
    }
  }
`;
