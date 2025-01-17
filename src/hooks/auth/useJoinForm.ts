// hooks/auth/useJoinForm.ts
import { FormEvent } from "react";
import { JOIN_VALIDATION } from "../../constants/validation";
import { JoinDataType } from "../../types/auth";
import { useInputChange } from "../common/useInputChange";
import { useJoin } from "./useJoin";

export function useJoinForm() {
  const initialValue: JoinDataType = {
    nickname: "",
    id: "",
    password: "",
  };

  const { input, handleChange } = useInputChange<JoinDataType>(initialValue);
  const { nickname, id, password } = input;

  const { join, isLoading } = useJoin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!JOIN_VALIDATION(nickname, id, password)) return;
    join({ nickname, id, password });
  };

  return {
    nickname,
    id,
    password,
    handleChange,
    handleSubmit,
    isLoading,
  };
}
