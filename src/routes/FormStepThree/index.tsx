import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';

import { Theme } from '../../components/theme';
import { SelectOptions } from '../../components/SelectOptions';
import * as Sty from './styles';

export default function FormStepThree() {
  const navigate = useNavigate();
  const { state, dispatch} = useForm();

  useEffect(() => {
    if(state.name === '') {
      navigate('/');
    }else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, [])

  function handleNextStep() {
    if(state.profession !== null) {
      navigate('/result');
    }else {
      alert("Please select one of the options below");
    }
  }

  function setProfession(profession: number) {
    dispatch({
      type: FormActions.setProfession,
      payload: profession
    })
  }

  return (
    <Theme>
      <Sty.MainBody>
        <h1>Lastly, what is your profession?</h1>
        <p>Please select one of the options below</p>

        <div className="select__box">
          <SelectOptions
            title = "Tech Recruiter"
            svg = "compass.svg"
            selected = {state.profession === 0}
            onClick = {() => setProfession(0)}
          />
          <SelectOptions
            title = "Developer"
            svg = "cpu.svg"
            selected = {state.profession === 1}
            onClick = {() => setProfession(1)}
          />
          <SelectOptions
            title = "Designer"
            svg = "pen-tool.svg"
            selected = {state.profession === 2}
            onClick = {() => setProfession(2)}
          />
        </div>

        <Link to="/step-2" className="backButton">Back</Link>
        <button onClick={handleNextStep}>Submit</button>
      </Sty.MainBody>
    </Theme>
  )
}