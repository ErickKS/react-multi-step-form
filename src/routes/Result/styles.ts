import styled from 'styled-components';

export const MainBody = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 500;

    span {
      text-transform: capitalize;
      color: #000;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.2;
    margin-bottom: 40px;
  }

  ul {
    list-style-type: none;

  }

  ul li p {
    margin-bottom: 4px;
  }

  ul li p span {
    margin-bottom: 4px;
    opacity: .7;
  }

  div {
    padding-top: 56px;
  }

  .backButton {
    padding: 14px 22px;
    background-color: transparent;
    border: 2px solid #8A8A8A;
    border-radius: 12px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    transition: .2s ease-in;

    &:hover {
      border: 2px solid #000;
    }
  }

  .exitButton {
    padding: 16px 24px;
    background-color: #424CF9;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    transition: .2s ease-in;

    &:hover {
      background-color: #333EFD;
    }
  }

  .linkGithub {
    margin-top: 46px;
    margin-bottom: 0;
  }

  .linkGitHub a {
    color: #424CF9;
  }
`;