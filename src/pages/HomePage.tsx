import Header from "../components/layout/Header";
import Page from "../components/layout/Page";
import Todos from "../components/todos/Todos";

function HomePage() {
  return (
    <div className="bg-sky-100">
      <Page>
        <Header />
        <Todos />
      </Page>
    </div>
  );
}

export default HomePage;
