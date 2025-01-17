import { useQuery } from "@tanstack/react-query";
import { todoApiSevice } from "../../api/todoApi";
import { STATUS } from "../../constants/todos";
import BackButton from "../common/BackButton";
import QueryStateHandler from "../common/QueryStateHandler";

function Todo({ id }: { id: string }) {
  const {
    data: todo,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => todoApiSevice.todoById(id),
    enabled: !!id,
  });
  console.log(todo);

  const status = todo && todo.completed ? STATUS.COMPELTED : STATUS.PENDING;

  return (
    <QueryStateHandler data={todo} isPending={isPending} isError={isError}>
      {todo && (
        <div className="flex flex-col gap-8 bg-white w-[600px] mx-auto py-6 px-8 rounded-xl">
          <BackButton />
          <span className={`max-w-max border rounded-full py-1 px-3 ${status.className}`}>{status.text}</span>
          <h1 className="font-bold text-3xl">{todo.title}</h1>
          <p className="mb-8">{status.description}</p>
        </div>
      )}
    </QueryStateHandler>
  );
}

export default Todo;
