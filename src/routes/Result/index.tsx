import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';

import { Theme } from '../../components/theme';
import * as Sty from './styles';

export default function Result() {
  const navigate = useNavigate();
  const { state, dispatch} = useForm();

  useEffect(() => {
    if(state.name === '') {
      navigate('/');
    }else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      });
    }
  }, [])

  return (
    <Theme>
      <Sty.MainBody>
        <h1>Thanks for your contribution <span translate="no">{state.name}</span>!</h1>
        <p>Check your details below.</p>

        <ul>
          <li><p>Your country: <span>{state.country[0].toUpperCase() + state.country.substring(1)}</span></p></li>
          <li><p>Your email: <span>{state.email}</span></p></li>
          <li><p>Your github: <span>{state.github}</span></p></li>
          <li>
            <p>Your profession: <span>
              {
                state.profession === 0 && "Tech Recruiter"
              }
              {
                state.profession === 1 && "Developer"
              }
              {
                state.profession === 2 && "Designer"
              }
            </span></p>
          </li>
        </ul>
        
        <div>
          <Link to="/step-3" className="backButton">Edit data</Link>
          <a href="/" className="exitButton">Exit</a>
        </div>

        <p className="linkGithub">Developed by <a href="https://github.com/ErickKS" target="_blank">Erick Kuwahara</a></p>
      </Sty.MainBody>
    </Theme>
  )
}