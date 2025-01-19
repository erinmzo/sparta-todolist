import { useQuery } from "@tanstack/react-query";
import { todoApiService } from "../../api/todoApi";
import { TodoType } from "../../types/todos";

export default function useGetTodo(id: string) {
  const {
    data: todo,
    isPending,
    isError,
  } = useQuery<TodoType>({
    queryKey: ["todo", id],
    queryFn: () => todoApiService.todoById(id),
    enabled: !!id,
  });

  return { todo, isPending, isError };
}
