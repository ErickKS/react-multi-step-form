import styled from "styled-components";

export const MainBody = styled.div`
  h1 {
    span {
      text-transform: capitalize;
      color: var(--black);
    }
  }

  p {
    opacity: 1;
  }

  ul li p {
    margin-bottom: 4px;
  }

  ul li p span {
    margin-bottom: 4px;
    opacity: 0.7;
  }

  ul li:first-of-type p span {
    text-transform: capitalize;
    color: var(--black);
  }

  div {
    padding-top: 56px;
  }

  .backButton {
    padding: 14px 22px;
    background-color: transparent;
    border: 2px solid var(--gray);
    border-radius: 12px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      border: 2px solid #000;
    }
  }

  .exitButton {
    padding: 16px 24px;
    background-color: var(--primary);
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: var(--white);
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      background-color: var(--primary-hover);
    }
  }

  .linkGithub {
    margin-top: 46px;
    margin-bottom: 0;
  }

  .linkGitHub a {
    color: var(--primary);
  }
`;
