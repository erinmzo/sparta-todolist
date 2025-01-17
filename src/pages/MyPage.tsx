import My from "../components/auth/My";
import Page from "../components/layout/Page";

function MyPage() {
  return (
    <div className="bg-sky-100">
      <Page>
        <My />
      </Page>
    </div>
  );
}

export default MyPage;
