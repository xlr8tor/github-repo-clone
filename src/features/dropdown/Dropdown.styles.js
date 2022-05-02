import styled from "styled-components";

export const Wrapper = styled.div`
  &.dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: var(--z-modal);
    font-size: var(--smaller-font-size);
  }

  .dropdown_menu {
    position: absolute;
    left: auto;
    top: 30px;
    bottom: auto;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    max-height: 480px;
    margin: var(--mb-0-5) 0 var(--mb-1) 0;
    border: 1px solid var(--border-bottom-default);
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
    animation-name: dropdown-modal;
    animation: dropdown-modal 0.12s cubic-bezier(0, 0.1, 0.1, 1) backwards;
    animation-duration: 0.12s;
    animation-timing-function: cubic-bezier(0, 0.1, 0.1, 1);
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: backwards;
    animation-play-state: running;
    z-index: var(--z-modal);
    overflow: hidden;
  }

  .dropdown_header {
    display: flex;
    align-items: center;
    padding: 7px 7px 7px 16px;
    border-bottom: 1px solid var(--border-bottom-default);
  }

  .dropdown_title {
    font-weight: var(--font-semi-bold);
    flex: 1;
  }

  .dropdown_close {
    -webkit-appearance: button;
    padding: 8px;
    border: 0px;
    background-color: transparent;
    line-height: 1;
    margin: -8px -7px;
    color: hsl(212deg 10% 38%);
    cursor: pointer;
  }

  .dropdown_list {
    position: relative;
    padding: 0;
    margin: 0;
    margin-bottom: -1px;
    flex: auto;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ;
  }

  .dropdown_item {
    padding: 7px 16px;
    border-bottom: 1px solid var(--border-bottom-default);
  }

  .dropdown_item:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }

  .dropdown_icon {
    width: 16px;
    margin-right: 8px;
  }
`;
