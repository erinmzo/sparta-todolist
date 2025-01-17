import { useLoginForm } from "../../hooks/auth/useLoginForm";
import Button from "../common/Button";
import Input from "../common/Input";

function LoginForm() {
  const { handleChange, handleSubmit, id, password } = useLoginForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input label="아이디" type="text" name="id" value={id} onChange={handleChange} />
        <Input label="비밀번호" type="password" name="password" value={password} onChange={handleChange} />
        <Button type="submit" content="로그인" bgColor="bg-blue-500" textColor="text-white" />
        <Button to="/join" content="회원가입" bgColor="bg-orange-400" textColor="text-white" />
      </div>
    </form>
  );
}

export default LoginForm;
