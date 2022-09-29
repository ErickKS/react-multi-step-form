import { createContext, ReactNode, useContext, useReducer } from 'react';

interface StateProps {
  currentStep: number,
  name: string,
  country: string,
  email: string,
  github: string,
  profession: null | 0 | 1 | 2
}

interface ActionProps {
  type: FormActions,
  payload: any,
} 

interface ContextProps {
  state: StateProps,
  dispatch: (action: ActionProps) => void
}

interface FormProviderProps {
  children: ReactNode
}

const initialData: StateProps = {
  currentStep: 0,
  name: '',
  country: '',
  email: '',
  github: '',
  profession: null
}

// CONTEXT
const FormContext = createContext<ContextProps | undefined>(undefined)

// REDUCER
export enum FormActions {
  setCurrentStep,
  setName,
  setCountry,
  setEmail,
  setGithub,
  setProfession
}

const formReducer = (state: StateProps, action: ActionProps) => {
    switch(action.type) {
      case FormActions.setCurrentStep:
        return {...state, currentStep: action.payload};
      case FormActions.setName:
        return {...state, name: action.payload};
      case FormActions.setCountry:
        return {...state, country: action.payload};
      case FormActions.setEmail:
        return {...state, email: action.payload};
      case FormActions.setGithub:
        return {...state, github: action.payload};
      case FormActions.setProfession:
        return {...state, profession: action.payload};
      default:
        return state;
    }
}

// PROVIDER
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch }

    return (
      <FormContext.Provider value={value}>
        {children}
      </FormContext.Provider>
    )
}

export const useForm = () => {
  const context = useContext(FormContext);
  if(context === undefined) {
    throw new Error('useForm error')
  }
  return context
}