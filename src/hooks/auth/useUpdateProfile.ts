import { FormEvent } from "react";
import { useAuthStore } from "../../zustand/useAuthStore";
import { useInputChange } from "../common/useInputChange";
import { useUpdateProfilMutation } from "./useUpdateProfileMutation";

export function useUpdateProfile() {
  const user = useAuthStore((state) => state.user);
  const { input, handleChange } = useInputChange({
    nickname: user?.nickname || "",
  });
  const { nickname } = input;

  const updateProfile = useUpdateProfilMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile.mutate(nickname);
  };

  return { nickname, handleChange, handleSubmit };
}
