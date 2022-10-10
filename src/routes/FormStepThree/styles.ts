import styled from "styled-components";

export const MainBody = styled.div`
  h1 {
    span {
      text-transform: capitalize;
      color: var(--black);
    }
  }

  .select__box {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;

    @media only screen and (max-width: 592px) {
      flex-wrap: wrap;
    }
  }

  label {
    font-size: 1rem;
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
    color: var(--black);
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      border: 2px solid var(--black);
    }
  }
`;
