import { RouterProvider } from "react-router-dom";
import QueryProvider from "./provider/QueryProvider";
import { router } from "./routes/Router";

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
