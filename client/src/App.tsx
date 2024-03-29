import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OuterFrame from './components/general/OuterFrame';
import ProfileRoute from "./routes/ProfileRoute";
import SignInRoute from "./routes/SignInRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInRoute />
  },
  {
    path: "/main",
    element: <OuterFrame />,
    children: [
      {
        path: ":userName",
        element: <ProfileRoute />
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
