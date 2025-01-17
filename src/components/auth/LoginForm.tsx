import Button from "../common/Button";
import Input from "../common/Input";

function LoginForm() {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <Input label="아이디" type="text" />
        <Input label="비밀번호" type="password" />
        <Button type="submit" content="로그인" bgColor="bg-blue-500" textColor="text-white" />
        <Button to="/join" content="회원가입" bgColor="bg-orange-400" textColor="text-white" />
      </div>
    </form>
  );
}

export default LoginForm;
