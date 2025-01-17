import { useEffect } from "react";
import { authApiService } from "../../api/authApi";
import { useAuthStore } from "../../zustand/useAuthStore";

export const useInitializeUser = () => {
  const { saveUser } = useAuthStore();

  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem("AccessToken");
      if (!token) return;

      const userData = await authApiService.getUser();
      if (userData) {
        saveUser(userData);
      }
    };

    initializeUser();
  }, [saveUser]);
};
