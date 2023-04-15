import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Global from "./theme/Global";

import App from "./App";
import FormStepOne from "./routes/FormStepOne";
import FormStepTwo from "./routes/FormStepTwo";
import FormStepThree from "./routes/FormStepThree";
import Result from "./routes/Result";

const router = createBrowserRouter([
  {
    path: "/react-multi-step-form/",
    element: <App />,
    children: [
      {
        path: "/react-multi-step-form/",
        element: <FormStepOne />,
      },
      {
        path: "/react-multi-step-form/step-2",
        element: <FormStepTwo />,
      },
      {
        path: "/react-multi-step-form/step-3",
        element: <FormStepThree />,
      },
      {
        path: "/react-multi-step-form/result",
        element: <Result />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />

    <RouterProvider router={router} />
  </React.StrictMode>
);
