// hooks/auth/useJoinForm.ts
import { FormEvent } from "react";
import { authApiService } from "../../api/authApi";
import { JOIN_VALIDATION } from "../../constants/validation";
import { JoinDataType } from "../../types/auth";
import { useInputChange } from "../common/useInputChange";

export function useJoinForm() {
  const initialValue: JoinDataType = {
    nickname: "",
    id: "",
    password: "",
  };

  const { input, handleChange } = useInputChange<JoinDataType>(initialValue);
  const { nickname, id, password } = input;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!JOIN_VALIDATION(nickname, id, password)) return;
    const joinData = await authApiService.join({ nickname, id, password });
    alert(joinData);
  };

  return {
    nickname,
    id,
    password,
    handleChange,
    handleSubmit,
  };
}
