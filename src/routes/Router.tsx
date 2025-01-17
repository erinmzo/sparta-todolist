import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectRoute";
import NotFound from "../components/common/NotFound";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import JoinPage from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";

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
    path: "/mypage",
    element: (
      <ProtectedRoute>
        <MyPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
