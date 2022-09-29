import styled from "styled-components";

export const Container = styled.div<{selected: boolean;}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 9rem;
  height: 9rem;
  border: 2px solid ${props => props.selected ? '#424CF9' : '#8A8A8A'};
  background-color: ${props => props.selected ? '#F5F5F5' : 'transparent'};
  border-radius: 12px;
  cursor: pointer;
`;

export const Svg = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
`;

export const Info = styled.div`
  
`;