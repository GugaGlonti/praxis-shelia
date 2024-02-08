import RootLayout from './layouts/RootLayout';
import Landing from './modules/landing/Landing';
import Leistungen from './modules/leistungen/Leistungen';
import Team from './modules/team/Team';
import Kontakt from './modules/kontakt/Kontakt';
import Impressum from './modules/impressum/Impressum';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/praxis-shelia',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
      {
        path: 'leistungen',
        element: <Leistungen />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'kontakt',
        element: <Kontakt />,
      },
      {
        path: 'impressum',
        element: <Impressum />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>test</h1>,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
