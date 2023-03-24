import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfileRoute from "./routes/ProfileRoute";
import SignInRoute from "./routes/SignInRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInRoute />
  },
  {
    path: "/profile/:userID",
    element: <ProfileRoute />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
};

export default App;
