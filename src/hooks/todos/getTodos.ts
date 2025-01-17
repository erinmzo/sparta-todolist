import { useQuery } from "@tanstack/react-query";
import { todoApiSevice } from "../../api/todoApi";

export function getTodos() {
  const {
    data: todos = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: todoApiSevice.getTodos,
  });
  return { todos, isPending, isError };
}
