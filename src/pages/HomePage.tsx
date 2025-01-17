import { Suspense, lazy } from "react";
import Loading from "../components/common/Loading";
import Header from "../components/layout/Header";
import Page from "../components/layout/Page";

const Todos = lazy(() => import("../components/todos/Todos"));
function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-sky-100">
        <Page>
          <Header />
          <Todos />
        </Page>
      </div>
    </Suspense>
  );
}

export default HomePage;
