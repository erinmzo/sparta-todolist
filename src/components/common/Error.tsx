import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center gap-8">
      <h1 className="text-sky-600 text-2xl font-bold">페이지 오류</h1>
      <Link to="/" className="bg-sky-700 rounded-lg py-2 px-3 text-white font-bold">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default Error;
