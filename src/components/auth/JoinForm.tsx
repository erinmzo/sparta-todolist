import { useJoinForm } from "../../hooks/auth/useJoinForm";
import Button from "../common/Button";
import Input from "../common/Input";

function JoinForm() {
  const { nickname, id, password, handleChange, handleSubmit, isLoading } = useJoinForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input label="닉네임" type="text" name="nickname" value={nickname} onChange={handleChange} />
        <Input label="아이디" type="text" name="id" value={id} onChange={handleChange} />
        <Input label="비밀번호" type="password" name="password" value={password} onChange={handleChange} />
        <Button
          type="submit"
          content={`${isLoading ? "처리중..." : "회원가입"}`}
          bgColor="bg-blue-500"
          textColor="text-white"
        />
      </div>
    </form>
  );
}

export default JoinForm;
