import { ErrorBoundary } from "@sentry/react";
import { getTodos } from "../../hooks/todos/getTodos";
import { TodosType } from "../../types/todos";
import Error from "../common/Error";
import QueryStateHandler from "../common/QueryStateHandler";
import TodoCard from "./TodosCard";

function Todos() {
  const { todos, isPending, isError } = getTodos();

  return (
    <ErrorBoundary fallback={<Error />}>
      <QueryStateHandler isPending={isPending} isError={isError} data={todos}>
        <div className="mt-8">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {todos.map((todo: TodosType) => (
              <li key={todo.id}>
                <TodoCard id={todo.id} title={todo.title} completed={todo.completed} />
              </li>
            ))}
          </ul>
        </div>
      </QueryStateHandler>
    </ErrorBoundary>
  );
}

export default Todos;
