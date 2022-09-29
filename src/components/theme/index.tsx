import { ReactNode } from 'react';
import { useForm } from '../../contexts/FormContext';

import { StepsGuide } from '../StepsGuide';
import * as Sty from './styles';

interface ThemeProps {
  children: ReactNode
}

export function Theme({children}: ThemeProps) {
  const { state } = useForm();

  return (
    <Sty.MainBody>
      <Sty.Container>
        <Sty.SideBar />

        <Sty.Steps>
          <Sty.StepsPagesGuide>
            <div className="steps__guide">
              <StepsGuide
                title="Personal"
                number={1}
                path="/"
                active={state.currentStep === 1}
              />
              <StepsGuide
                title="Contact"
                number={2}
                path="/step-2"
                active={state.currentStep === 2}
              />
              <StepsGuide
                title="Profession"
                number={3}
                path="/step-3"
                active={state.currentStep === 3}
              />
            </div>
            <div className="steps__line"></div>
          </Sty.StepsPagesGuide>

          <Sty.StepsContent>
            {children}
          </Sty.StepsContent>
        </Sty.Steps>
      </Sty.Container>
    </Sty.MainBody>
  )
}