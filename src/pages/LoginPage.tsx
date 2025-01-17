import Login from "../components/auth/Login";
import Page from "../components/layout/Page";

function LoginPage() {
  return (
    <div className="bg-sky-100">
      <Page>
        <Login />
      </Page>
    </div>
  );
}

export default LoginPage;
