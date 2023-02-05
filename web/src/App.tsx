import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export function App() {
  return <RouterProvider router={routes} />;
}
