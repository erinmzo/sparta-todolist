import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/common/Error";
import Loading from "../components/common/Loading";
import Page from "../components/layout/Page";

const Todo = lazy(() => import("../components/todo/Todo"));
function DetailPage() {
  const { todoId } = useParams();

  if (!todoId) return <Error />;

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-yellow-100">
        <Page>
          <Todo id={todoId} />
        </Page>
      </div>
    </Suspense>
  );
}

export default DetailPage;
