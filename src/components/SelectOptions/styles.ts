import styled from "styled-components";

export const Container = styled.div<{selected: boolean;}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 9rem;
  height: 9rem;
  border: 2px solid ${props => props.selected ? 'var(--primary)' : 'var(--gray)'};
  background-color: ${props => props.selected ? 'var(--secondary)' : 'transparent'};
  border-radius: 12px;
  cursor: pointer;
`;

export const Svg = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
`;