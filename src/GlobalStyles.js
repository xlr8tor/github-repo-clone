import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --header-height: 3rem;

    /* ========== Colors ==========*/
    /* Change favorite color */
    --hue-color: 250; /*Purple 250 - Green 142 - Blue 230 - Pink 340*/
    --first-color: hsl(var(--hue-color),69%, 61%);
    --firstColorSecond:hsl(var(--hue-color),69%, 61%);
    --firstColorAlt: hsl(var(--hue-color), 57%, 53%);
    --firstColorLighter: hsl(var(--hue-color),92%, 85%);
    --titleColor: hsl(var(--hue-color), 8%, 15%);
    --textColor: hsl(var(--hue-color),8%, 45%);
    --textColorLight: hsl(var(--hue-color), 8%, 65%);
    --input-color: hsl(var(--hue-color),70%, 96%);
    --body-color: "#fff";
    --color-accent-fg: hsl(212deg 92% 45%);
    --color-fg-default:hsl(213deg 13% 16%);
    --border-bottom-default: hsl(210, 18%, 85%);
    --border-contrast: hsl(213deg 14% 12% / 10%);
    --button-border-color: hsl(213deg 14% 12% / 15%);
    --button-bg-color:  hsl(210deg 29% 97%);
    --Layout-sidebar-width: 220px;
    --Layout-gutter: 1rem;
    --containerColor: "#fff";
     
    
    /* ========== Fonts and Typography ==========*/
    --body-font: "Poppins", sans-serif;

    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;

    /* ========== Fonts Weights ==========*/
    --font-medium: 500;
    --font-semi-bold: 600;

    /* ========== Margin Bottoms ==========*/
    --mb-0-25: 0.25rem;
    --mb-0-5: 0.5rem;
    --mb-0-75: 0.75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /* ========== Z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;

    

    @media screen and (min-width: 768px){
    --Layout-sidebar-width: 256px;
    }

    @media (min-width: 1012px) {
      --Layout-sidebar-width: 296px;
      --Layout-gutter: 1.5rem;
    }
  }

  /* ========== BASE STYLES ==========*/
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0 0 var(--header-height) 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--textColor);
  }

  h1,
  h2,
  h3,
  h4 {
    color: var(--titleColor);
    font-weight: var(--font-semi-bold);
  }

  ul {
      list-style: none;
  }

  a {
      text-decoration: none;
  }

  img {
      display: block;
      max-width: 100%;
      height: auto;
  }

  button {
    border: none;
    outline: none;
    font-size: inherit;
  }

  

  @media screen and (min-width: 968px) {
    --big-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }

  

  

  

  /* ============ Reuseable Classes ============ */
  .section {
      padding: 2rem 0 4rem;
  }

  .section__title {
      font-size: var(--h1-font-size);
  }

  .section__subtitle {
      display: block;
      font-size: var(--small-font-size);
      margin-bottom: var(--mb-3);
  }

  .section__title,
  .section__subtitle {
      text-align: center;
  }

  .text-bold {
    font-weight: var(--font-semi-bold);
  }
/* ============ Layout ============ */
  .container {
      max-width: 768px;
      margin-left: var(--mb-1-5);
      margin-right: var(--mb-1-5);
  }

  .grid {
      display: grid;
      gap: 1.5rem;
  }
      
  }

/* ============ Button ============ */
  .button {
    display: inline-block;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);
  }

  .button:hover {
    background-color: var(--firstColorAlt);
    cursor: pointer;
  }

  .button--flex {
    display: inline-flex;
    align-items: center;
  }
  
  svg.button__icon {
    vertical-align: middle;
    margin-right: var(--mb-0-5);
    transition: 0.3s;
  }

  .btn {
    position: relative ;
    background-color: var(--button-bg-color);
    padding: 3px 12px;
    border: 1px solid var(--button-border-color);
    font-size: var(--smaller-font-size);
    font-weight: var(--font-medium);
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer ;
    user-select: none;
    appearance: none;
    box-shadow: 0 1px 0 rgba(27,31,36,.04), inset 0 1px 0 rgba(255,255,255,0.25);
  }


  @media (min-width: 768px){
    .container {
      margin-left: auto;
      margin-right: auto;
    }

    body {
      margin: 0;
    }

    .section {
      padding: 6rem 2rem;
    }

    .section__subtitle {
      margin-bottom: 4rem;
    }
  }

`;
