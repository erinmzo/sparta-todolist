import { RouterProvider } from "react-router-dom";
import { useInitializeUser } from "./hooks/auth/useInitializeUser";
import QueryProvider from "./provider/QueryProvider";
import { router } from "./routes/Router";

function App() {
  useInitializeUser();
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
