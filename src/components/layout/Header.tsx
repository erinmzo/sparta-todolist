import { Link } from "react-router-dom";
import GlobalNav from "./GlobalNav";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-[18px] hover:text-sky-600">
        <Link to="/">Todo List</Link>
      </h1>
      <GlobalNav />
    </div>
  );
}

export default Header;
