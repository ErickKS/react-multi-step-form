import { Routes, Route } from 'react-router-dom';

import FormStepOne from './routes/FormStepOne';
import FormStepTwo from './routes/FormStepTwo';
import FormStepThree from './routes/FormStepThree';
import Result from './routes/Result';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<FormStepOne />} />
      <Route path="/step-2" element={<FormStepTwo />} />
      <Route path="/step-3" element={<FormStepThree />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}