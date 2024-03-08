import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProfileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#2177B3]/50 bg-[#2177B3]/10 max-w-[246px] rounded-lg px-2 font-semibold text-sm hover:scale-105 transition"
        >
          <ChevronLeftIcon className="w-4" />
          Previous Page
        </button>
        <nav className="flex gap-1 text-[#2177B3]/50 text-sm">
          <Link className="hover:scale-105 transition" to={"/"}>Home</Link>
          <Link
            to={"/profile"}
            className={location.pathname === "/profile" ? "font-bold hover:scale-105 transition" : "hover:scale-105 transition"}
          >
            • Profile
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default ProfileNav;
