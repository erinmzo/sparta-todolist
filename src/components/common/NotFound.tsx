import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-sky-100 min-h-screen w-full flex flex-col justify-center items-center gap-8">
      <h1 className="text-sky-600 text-2xl font-bold">404 - 페이지를 찾을 수 없습니다.</h1>
      <p className="text-slate-500 text-lg">요청하신 페이지가 존재하지 않습니다.</p>
      <Link to="/" className="bg-sky-700 rounded-lg py-2 px-3 text-white font-bold">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
