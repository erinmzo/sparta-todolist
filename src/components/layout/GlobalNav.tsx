import { Link } from "react-router-dom";

function GlobalNav() {
  return (
    <ul className="flex font-[18px] gap-8">
      <li>
        <Link to="/login" className="hover:text-sky-700">
          로그인
        </Link>
      </li>
      <li className="hover:text-skyblue-700">
        <Link to="/login" className="hover:text-sky-700">
          회원가입
        </Link>
      </li>
    </ul>
  );
}

export default GlobalNav;
