import styled from "styled-components";

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--black);
  }

  p {
    margin: 0;
    opacity: 1;
  }
`;

export const NumberBox = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.active ? "var(--primary)" : "var(--secondary)"};
  color: ${(props) => (props.active ? "var(--white)" : "var(--black)")};
  border-radius: 8px;
`;
