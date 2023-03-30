import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OuterFrame from './components/OuterFrame';
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

function App() {

  return (
    <RouterProvider router={router} />
  );
};

export default App;
