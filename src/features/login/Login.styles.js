import styled from "styled-components";

export const Wrapper = styled.div`
  &.login {
    text-align: center;
  }

  .login__bg {
    padding-top: 3rem;
  }

  .login__container {
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
    padding: 3rem 2.5rem;
    background-color: #fff;
  }

  .login__title {
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-0-75);
  }

  .login__subtitle {
    margin-bottom: var(--mb-1-5);
  }

  .login__buttons {
    display: flex;
    justify-content: center;
  }
`;
