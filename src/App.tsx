import { FormProvider } from "./contexts/FormContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <FormProvider>
      <Outlet />
    </FormProvider>
  );
}

export default App;
