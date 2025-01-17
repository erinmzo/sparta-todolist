import { useQuery } from "@tanstack/react-query";
import { todoApiService } from "../../api/todoApi";
import { STATUS } from "../../constants/todos";
import { TodoType } from "../../types/todos";
import BackButton from "../common/BackButton";
import QueryStateHandler from "../common/QueryStateHandler";
function Todo({ id }: { id: string }) {
  const {
    data: todo,
    isPending,
    isError,
  } = useQuery<TodoType>({
    queryKey: ["todo", id],
    queryFn: () => todoApiService.todoById(id),
    enabled: !!id,
  });

  const status = todo ? (todo.completed ? STATUS.COMPLETED : STATUS.PENDING) : STATUS.PENDING;

  return (
    <QueryStateHandler data={todo} isPending={isPending} isError={isError}>
      <div className="flex flex-col gap-8 bg-white w-[600px] mx-auto py-6 px-8 rounded-xl">
        <BackButton />
        {todo && (
          <>
            <span className={`inline-block border rounded-full py-1 px-3 ${status.className}`}>{status.text}</span>
            <h1 className="font-bold text-3xl">{todo.title}</h1>
            <p className="space-y-8">{status.description}</p>
          </>
        )}
      </div>
    </QueryStateHandler>
  );
}

export default Todo;
