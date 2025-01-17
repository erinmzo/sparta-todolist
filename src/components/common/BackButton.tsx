import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to="/" className="text-green-500 py-1 px-2">
      🡐 목록으로 돌아가기
    </Link>
  );
}

export default BackButton;
