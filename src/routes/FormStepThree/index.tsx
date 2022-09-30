import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';

import { Theme } from '../../components/theme';
import { SelectOptions } from '../../components/SelectOptions';
import * as Sty from './styles';

export default function FormStepThree() {
  const navigate = useNavigate();
  const { state, dispatch} = useForm();

  const validation = /^[a-zA-Z]+$/;
  const emailUser = state.email.substring(0, state.email.indexOf("@"))
  const emailDomain = state.email.substring(state.email.indexOf("@")+ 1, state.email.length);

  useEffect(() => {
    if(!validation.test(state.name) || 
      !validation.test(state.country) ||
      (emailUser.length <=1) ||
      (emailDomain.length <=3) ||
      (emailUser.search("@")!=-1) ||
      (emailDomain.search("@")!=-1) ||
      (emailUser.search(" ")!=-1) ||
      (emailDomain.search(" ")!=-1) ||
      (emailDomain.search(".")==-1) ||
      (emailDomain.indexOf(".")<=1) ||
      (emailDomain.lastIndexOf(".") == emailDomain.length -1) ||
      state.github === ''
    ){
      navigate('/step-2');
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
        <p>Please select one of the options below {state.currentStep}</p>

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