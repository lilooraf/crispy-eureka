import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ReservationPage from 'pages/Reservation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ReservationPage />,
  },
]);

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
