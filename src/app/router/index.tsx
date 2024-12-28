import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { BasePage } from 'pages/Base';

export const router = createBrowserRouter([
  {
    path: '/json-validator.github.io/',
    element: <App />,
    children: [
      {
        index: true,
        element: <BasePage />,
      },
    ],
  },
]);
