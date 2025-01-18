import { Link } from "react-router-dom";
import { useAuthStore } from "../../zustand/useAuthStore";

function GlobalNav() {
  const user = useAuthStore((state) => state.user);
  return (
    <ul className="flex font-[18px] gap-8">
      {user ? (
        <li>
          <Link to="mypage">마이페이지 </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login" className="hover:text-sky-700">
              로그인
            </Link>
          </li>
          <li className="hover:text-skyblue-700">
            <Link to="/join" className="hover:text-sky-700">
              회원가입
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default GlobalNav;
