import { Link } from "react-router-dom";
import { STATUS } from "../../constants/todos";

interface TodoCardProps {
  id: number;
  title: string;
  completed: boolean;
}
function TodoCard({ id, title, completed }: TodoCardProps) {
  const status = completed ? STATUS.COMPLETED : STATUS.PENDING;
  return (
    <div className="relative bg-white rounded-lg py-4 px-6 h-[200px]">
      <Link to={`/todo/${id}`}>
        <h3 className="font-bold text-lg ">{title}</h3>
        <span
          className={`absolute right-3 bottom-3 max-w-max border text-[13px] rounded-full py-1 px-3 ${status.className}`}
        >
          {status.text}
        </span>
      </Link>
    </div>
  );
}

export default TodoCard;
