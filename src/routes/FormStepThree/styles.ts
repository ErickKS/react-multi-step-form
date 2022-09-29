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
    opacity: .7;
    margin-bottom: 40px;
  }

  .select__box {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-bottom: 32px;
  }

  label {
    font-size: 1rem;
  } 

  button {
    padding: 16px 24px;
    background-color: #424CF9;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    color: #FFF;
    cursor: pointer;
    transition: .2s ease-in;

    &:hover {
      background-color: #333EFD;
    }
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
`;