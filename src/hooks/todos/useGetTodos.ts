import { useQuery } from "@tanstack/react-query";
import { todoApiService } from "../../api/todoApi";

export function useGetTodos() {
  const {
    data: todos = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: todoApiService.getTodos,
  });
  return { todos, isPending, isError };
}
