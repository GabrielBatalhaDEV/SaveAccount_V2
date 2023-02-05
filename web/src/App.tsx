import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";

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

const queryClient = new QueryClient();

export function App() {
  const [authToken, setAuthToken] = useState<string>();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}
