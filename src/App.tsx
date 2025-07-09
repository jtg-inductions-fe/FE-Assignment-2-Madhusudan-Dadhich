import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';

/**
 * The App component serves as the root component of the application.
 * It provides the router configuration to the application using RouterProvider.
 */
export const App = (): React.ReactElement => <RouterProvider router={router} />;
