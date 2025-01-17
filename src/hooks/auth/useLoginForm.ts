import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { authApiService } from "../../api/authApi";
import { LOGIN_VALIDATION } from "../../constants/validation";
import { LoginDataType } from "../../types/auth";
import { useAuthStore } from "../../zustand/useAuthStore";
import { useInputChange } from "../common/useInputChange";

export function useLoginForm() {
  const initialValue: LoginDataType = {
    id: "",
    password: "",
  };

  const { input, handleChange } = useInputChange(initialValue);
  const { id, password } = input;

  const { saveUser } = useAuthStore();
  const navigator = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!LOGIN_VALIDATION(id, password)) return;
    try {
      const response = await authApiService.login({ id, password });
      if (response) {
        localStorage.setItem("AccessToken", response.token);
        const userData = await authApiService.getUser();
        if (userData) {
          saveUser(userData);
          navigator("/");
        }
      }
    } catch (error) {
      throw error;
    }
  };
  return { handleChange, handleSubmit, id, password };
}
