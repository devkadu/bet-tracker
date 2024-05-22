import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InputItem from "./View/Home/InputItem/InputItem";
import GlobalStyle from "./theme/GlobalTheme";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import Home from "./pages/Home.jsx/Home";
import Header from "./components/header/Header";

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
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
