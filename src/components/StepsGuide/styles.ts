import styled from 'styled-components';

export const Container = styled.div`
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #000;
  }
`;

export const NumberBox = styled.div<{active: boolean;}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${props => props.active ? '#424CF9' : '#F5F5F5'};
  color: ${props => props.active ? '#FFF' : '#000'};
  border-radius: 8px;
`;