import { useParams } from "react-router-dom";
import Error from "../components/common/Error";
import Page from "../components/layout/Page";
import Todo from "../components/todo/Todo";

function DetailPage() {
  const { todoId } = useParams();

  if (!todoId) return <Error />;

  return (
    <div className="bg-yellow-100">
      <Page>
        <Todo id={todoId} />
      </Page>
    </div>
  );
}

export default DetailPage;
