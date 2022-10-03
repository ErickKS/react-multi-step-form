import styled from 'styled-components';

export const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #E3E3E3;

  @media only screen and (max-width: 592px) {
    height: 100%;
    background-color: #FFF;
  }
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
  
  @media only screen and (max-width: 1096px) {
    grid-template-columns: 20rem 1fr;
    gap: 2rem;
  }

  @media only screen and (max-width: 848px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 592px) {
    height: 100%;
    margin-inline: 0;
  }
`;

export const SideBar = styled.div`
  background-image: url('./bg.jpg');
  background-size: cover;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;

  @media only screen and (max-width: 848px) {
    display: none;
  }
`;

export const Steps = styled.div`
  padding-block: 56px 0;
  padding-right: 64px;

  @media only screen and (max-width: 1068px) {
    padding-right: 24px;
  }

  @media only screen and (max-width: 848px) {
    padding-inline: 24px;
  }
`;

export const StepsPagesGuide = styled.div`  
  .steps__guide {
    display: flex;
    gap: 40px;

    @media only screen and (max-width: 848px) {
      gap: 24px;
    }

    @media only screen and (max-width: 456px) {
      gap: 16px;
      flex-wrap: wrap;
    }
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