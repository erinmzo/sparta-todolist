// hooks/auth/useSignUp.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApiService } from "../../api/authApi";
import { JoinDataType } from "../../types/auth";

export function useJoin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const join = async (signUpData: JoinDataType) => {
    try {
      setIsLoading(true);
      await authApiService.join(signUpData);
      alert("회원가입에 성공하셨습니다.");
      navigate("/login");
    } catch (error) {
      alert(`${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { join, isLoading };
}
