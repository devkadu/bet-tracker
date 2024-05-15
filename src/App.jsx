import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./View/Home/Home";
import InputItem from "./View/Home/InputItem/InputItem";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new-bet",
      element: <InputItem />,
    },
  ]);
  return (
    <>
      <h1>BetTracker</h1>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
