import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

import { Main } from "../../components/Main";
import * as Sty from "./styles";

export default function FormStepOne() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const validation = /^[a-zA-Z]+$/;

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  function handleNextStep() {
    if (!validation.test(state.name) || !validation.test(state.country)) {
      alert("Please fill in all fields correctly");
    } else {
      navigate("/react-multi-step-form/step-2");
    }
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: event.target.value,
    });
  }

  function handleCountryChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setCountry,
      payload: event.target.value,
    });
  }

  return (
    <Main>
      <Sty.MainBody>
        <h1>First, let's start with some of your data</h1>
        <p>Please fill in all fields below correctly</p>

        <div>
          <label htmlFor="name">
            Your first name <span>*</span>
          </label>
          <input id="name" type="text" autoFocus autoComplete="off" value={state.name} onChange={handleNameChange} />
        </div>

        <div>
          <label htmlFor="country">
            Your country <span>*</span>
          </label>
          <input id="country" type="text" autoComplete="off" value={state.country} onChange={handleCountryChange} />
        </div>

        <button onClick={handleNextStep}>Next</button>
      </Sty.MainBody>
    </Main>
  );
}
