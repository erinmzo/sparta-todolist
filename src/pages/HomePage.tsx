import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../components/common/Loading";
import Header from "../components/layout/Header";
import Page from "../components/layout/Page";

const Todos = lazy(() => import("../components/todos/Todos"));
function HomePage() {
  return (
    <>
      <Helmet>
        <title>한달인턴 과제 - Todolist</title>
      </Helmet>
      <Suspense fallback={<Loading />}>
        <div className="bg-sky-100">
          <Page>
            <Header />
            <Todos />
          </Page>
        </div>
      </Suspense>
    </>
  );
}

export default HomePage;
