import styled from 'styled-components';

export const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #E3E3E3;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 4rem;
  width: min(75rem, 100%);
  height: 40rem;
  margin-inline: 24px;
  border-radius: 24px;
  background-color: #FFF;

  @media only screen and (max-width: 1068px) {
    grid-template-columns: 1fr;
    padding-left: 64px;
  }
`;

export const SideBar = styled.div`
  background-image: url('../../../public/bg.jpg');
  background-size: cover;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;

  @media only screen and (max-width: 1068px) {
    display: none;
  }
`;

export const Steps = styled.div`
  padding-block: 56px 0;
  padding-right: 64px;
`;

export const StepsPagesGuide = styled.div`  
  .steps__guide {
    display: flex;
    gap: 40px;
  }

  .steps__line {
    width: 100%;
    height: 2px;
    margin-top: 16px;
    background-color: #8A8A8A;
  }
`;

export const StepsContent = styled.div`
  padding-block: 64px;
`;