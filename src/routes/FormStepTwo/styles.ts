import styled from "styled-components";

export const MainBody = styled.div`
  h1 {
    span {
      text-transform: capitalize;
      color: var(--black);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  label {
    font-size: 1rem;
  }

  span {
    display: inline-block;
    color: #ff0000;
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
      border: 2px solid var(--black);
    }
  }
`;
