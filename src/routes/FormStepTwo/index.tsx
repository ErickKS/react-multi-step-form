import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

import { Main } from "../../components/Main";
import * as Sty from "./styles";

export default function FormStepTwo() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const validation = /^[a-zA-Z]+$/;

  useEffect(() => {
    if (!validation.test(state.name) || !validation.test(state.country)) {
      navigate("/react-multi-step-form/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  function handleNextStep() {
    const emailUser = state.email.substring(0, state.email.indexOf("@"));
    const emailDomain = state.email.substring(state.email.indexOf("@") + 1, state.email.length);

    if (state.github && state.github !== "") {
      handleValidation();
    } else {
      alert("Please fill in all fields below");
    }

    function handleValidation() {
      if (
        emailDomain.length >= 3 &&
        emailUser.search("@") == -1 &&
        emailDomain.search("@") == -1 &&
        emailUser.search(" ") == -1 &&
        emailDomain.search(" ") == -1 &&
        emailDomain.search(".") != -1 &&
        emailDomain.indexOf(".") >= 1 &&
        emailDomain.lastIndexOf(".") < emailDomain.length - 1
      ) {
        navigate("/react-multi-step-form/step-3");
      } else {
        alert("Please fill in the email field correctly");
      }
    }
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value,
    });
  }

  function handleGithubChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value,
    });
  }

  return (
    <Main>
      <Sty.MainBody>
        <h1>
          <span translate="no">{state.name}</span>, tell us where we can find you
        </h1>
        <p>Please fill in all fields below correctly</p>

        <div>
          <label htmlFor="email">
            Your email <span>*</span>
          </label>
          <input
            id="email"
            type="email"
            autoFocus
            autoComplete="off"
            value={state.email}
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <label htmlFor="github">
            Your GitHub <span>*</span>
          </label>
          <input id="github" type="text" autoComplete="off" value={state.github} onChange={handleGithubChange} />
        </div>

        <Link to="/react-multi-step-form/" className="backButton">
          Back
        </Link>
        <button onClick={handleNextStep}>Next</button>
      </Sty.MainBody>
    </Main>
  );
}
