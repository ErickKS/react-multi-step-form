import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary: #424CF9;
    --primary-hover: #333EFD;
    --secondary: #F5F5F5;
    --gray: #8a8a8a;
    --white: #fff;
    --black: #000;

    --body: #e3e3e3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.2;
    opacity: 0.7;
    margin-bottom: 40px;
  }

  ul {
    list-style-type: none;
  }

  input {
    width: min(270px, 100%);
    padding: 16px 16px;
    border: 2px solid var(--gray);
    border-radius: 12px;
    font-size: 16px;
    outline: none;
  }

  button {
    padding: 16px 24px;
    background-color: var(--primary);
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    color: var(--white);
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      background-color: var(--primary-hover);
    }
  }
`;
