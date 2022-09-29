import { Router } from './router'
import { FormProvider } from './contexts/FormContext';

function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App