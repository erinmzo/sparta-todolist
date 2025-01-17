import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/common/NotFound";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import JoinPage from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todo/:todoId",
    element: <DetailPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/join",
    element: <JoinPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
