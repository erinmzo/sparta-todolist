export const JOIN_VALIDATION = (nickname: string, id: string, password: string) => {
  if (!id.trim() || !password.trim() || !nickname.trim()) {
    alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요.");
    return false;
  }
  if (id.length < 4 || 10 < id.length) {
    alert("아이디는 4~10 글자로 입력해주세요.");
    return false;
  }
  if (password.length < 4 || 15 < password.length) {
    alert("비밀번호는 4~15 글자로 입력해주세요.");
    return false;
  }
  if (nickname.length < 1 || 10 < nickname.length) {
    alert("닉네임은 1~10 글자로 입력해주세요.");
    return false;
  }
  return true;
};
