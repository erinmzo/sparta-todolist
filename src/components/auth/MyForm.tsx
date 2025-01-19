import { useUpdateProfile } from "../../hooks/auth/useUpdateProfile";
import Button from "../common/Button";
import Input from "../common/Input";

function MyForm() {
  const { nickname, handleChange, handleSubmit } = useUpdateProfile();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input type="file" label="프로필 사진" />
        <Input type="text" label="닉네임" name="nickname" value={nickname} onChange={handleChange} />
        <Button content="수정하기" bgColor="bg-orange-500" textColor="text-white" />
      </div>
    </form>
  );
}

export default MyForm;
