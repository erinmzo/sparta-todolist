import { useMutation } from "@tanstack/react-query";
import { authApiService } from "../../api/authApi";

export function useUpdateProfilMutation() {
  return useMutation({
    mutationFn: (nickname: string) => authApiService.updateProfile(nickname),
    onSuccess: () => {
      alert("성공적으로 수정되었습니다.");
    },
    onError: () => {
      alert("수정에 실패했습니다.");
    },
  });
}
